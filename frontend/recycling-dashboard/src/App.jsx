import { useEffect, useMemo, useRef, useState } from "react";
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Text,
  Table,
  Badge,
  Group,
  Button,
  CopyButton,
  Tooltip,
  Loader,
} from "@mantine/core";
import { fetchCandidates, fetchLeaderboard, recomputeRankings } from "./api";

function SkillHeatmap({ candidates }) {
  const top10 = [...candidates]
    .filter((c) => c.rank_position)
    .sort((a, b) => a.rank_position - b.rank_position)
    .slice(0, 10);

  return (
    <Card withBorder mt="xl" radius="md">
      <Title order={2} mb="sm">🔥 Skill Heatmap</Title>

      <Table striped highlightOnHover withTableBorder layout="fixed">
        <thead>
          <tr>
            <th style={{ textAlign: "left", paddingLeft: 16 }}>Name</th>
            <th style={{ width: 120, textAlign: "center" }}>Crisis</th>
            <th style={{ width: 140, textAlign: "center" }}>Sustainability</th>
            <th style={{ width: 120, textAlign: "center" }}>Motivation</th>
          </tr>
        </thead>

        <tbody>
          {top10.map((c) => (
            <tr key={c.id}>
              <td style={{ paddingLeft: 16 }}>{c.name}</td>
              {["crisis_score", "sustainability_score", "motivation_score"].map((key) => {
                const value = c[key];
                const color = value >= 8 ? "green" : value >= 5 ? "yellow" : "red";

                return (
                  <td key={key} style={{ textAlign: "center" }}>
                    <Badge
                      color={color}
                      radius="xl"
                      size="md"
                      styles={{
                        root: {
                          width: 44,
                          height: 28,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontVariantNumeric: "tabular-nums",
                        },
                      }}
                    >
                      {value}
                    </Badge>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>

      <Text size="sm" c="dimmed" mt="xs">
        Heatmap visualizes top 10 candidates’ skill scores using color intensity.
      </Text>
    </Card>
  );
}

export default function App() {
  const [candidates, setCandidates] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [sortBy, setSortBy] = useState({ key: "rank_position", dir: "asc" });
  const [lastRecomputeAt, setLastRecomputeAt] = useState(null);
  const [loading, setLoading] = useState(false);

  const prevRanks = useRef({});

  const medalColor = (rank) =>
    rank === 1 ? "yellow" : rank === 2 ? "gray" : rank === 3 ? "orange" : "green";

  useEffect(() => {
    fetchCandidates()
      .then((res) => setCandidates(Array.isArray(res.data) ? res.data : []))
      .catch(console.error);

    fetchLeaderboard()
      .then((res) => setLeaderboard(Array.isArray(res.data) ? res.data : []))
      .catch(console.error);
  }, []);

  const sortedLeaderboard = useMemo(() => {
  if (!Array.isArray(leaderboard)) return [];

  const data = [...leaderboard];

  data.sort((a, b) => {
    const key = sortBy.key;

    if (key === "name") {
      const v1 = a.name.toLowerCase();
      const v2 = b.name.toLowerCase();
      return sortBy.dir === "asc"
        ? v1.localeCompare(v2)
        : v2.localeCompare(v1);
    }

    const v1 = Number(a[key]);
    const v2 = Number(b[key]);
    return sortBy.dir === "asc" ? v1 - v2 : v2 - v1;
  });

  return data;
}, [leaderboard, sortBy]);

  const toggleSort = (key) => {
    setSortBy((prev) =>
      prev.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" }
    );
  };

  const handleRecompute = async () => {
    try {
      setLoading(true);
      await recomputeRankings();
      const res = await fetchLeaderboard();

      const updated = (Array.isArray(res.data) ? res.data : []).map((c) => {
        const prev = prevRanks.current[c.name];
        const diff = prev ? prev - c.rank_position : 0;
        prevRanks.current[c.name] = c.rank_position;
        return { ...c, diff };
      });

      setLeaderboard(updated);
      setLastRecomputeAt(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Recompute failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="lg" py="xl">
      <Card withBorder mb="lg" radius="md">
        <Title order={2}>♻️ Recycling Production Line Manager Selection</Title>
        <Text size="sm" c="dimmed">
          Ranked by Crisis Management, Sustainability Knowledge, and Team Motivation
        </Text>
        {lastRecomputeAt && (
          <Text size="sm" c="dimmed" mt="xs">
            Last recomputed at {lastRecomputeAt}
          </Text>
        )}
      </Card>

      <Group justify="space-between" mb="sm">
        <Title order={2}>🏆 Leaderboard (Top 10)</Title>
        <Button variant="light" size="sm" loading={loading} onClick={handleRecompute}>
          🔁 Recompute Rankings
        </Button>
      </Group>

      <Card withBorder radius="md" p="md">
        <Table striped highlightOnHover withTableBorder layout="fixed">
          <thead>
  <tr>
    <th style={{ width: 80, textAlign: "center", cursor: "pointer" }} onClick={() => toggleSort("rank_position")}>
      Rank {sortBy.key === "rank_position" ? (sortBy.dir === "asc" ? "↑" : "↓") : "↕"}
    </th>

    <th style={{ width: 60, textAlign: "center" }}>
      🏅
    </th>

    <th style={{ width: "60%", textAlign: "left", cursor: "pointer" }} onClick={() => toggleSort("name")}>
      Name {sortBy.key === "name" ? (sortBy.dir === "asc" ? "↑" : "↓") : "↕"}
    </th>

    <th style={{ width: 160, textAlign: "center", cursor: "pointer" }} onClick={() => toggleSort("total_score")}>
      Total Score {sortBy.key === "total_score" ? (sortBy.dir === "asc" ? "↑" : "↓") : "↕"}
    </th>
  </tr>
</thead>

          <tbody>
            {sortedLeaderboard.map((c) => (
              <tr key={c.name}>
  {/* Rank number only */}
  <td style={{ textAlign: "center", fontWeight: 600 }}>
    #{c.rank_position}
    {c.diff > 0 && <Text span c="green" ml={6}>↑{c.diff}</Text>}
    {c.diff < 0 && <Text span c="red" ml={6}>↓{Math.abs(c.diff)}</Text>}
  </td>

  {/* Medal column */}
  <td style={{ textAlign: "center", fontSize: 18}}>
    {Number(c.rank_position) === 1 && "🥇"}
    {Number(c.rank_position) === 2 && "🥈"}
    {Number(c.rank_position) === 3 && "🥉"}
  </td>

  {/* Name */}
  <td>
    <Text fw={500}>{c.name}</Text>
  </td>

  {/* Total score */}
  <td style={{ textAlign: "center" }}>
    <Badge
      color={medalColor(c.rank_position)}
      radius="xl"
      size="lg"
      styles={{
        root: {
          width: 52,
          height: 32,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontVariantNumeric: "tabular-nums",
        },
      }}
    >
      {c.total_score}
    </Badge>
  </td>
</tr>

            ))}
          </tbody>
        </Table>
      </Card>

      <SkillHeatmap candidates={candidates} />

      <Title order={2} mt="xl">👤 Candidates</Title>

      <SimpleGrid cols={3} spacing="md" mt="sm">
        {candidates.map((c) => (
          <Card key={c.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="xs">
              <Text fw={600}>{c.name}</Text>
              <Badge color="blue" variant="light">#{c.rank_position}</Badge>
            </Group>

            <Text size="sm">Experience: {c.experience} yrs</Text>
            <Text size="sm" c="dimmed">Skills: {c.skills}</Text>

            <Group mt="sm" gap="xs">
              <Badge color="red">Crisis: {c.crisis_score}</Badge>
              <Badge color="green">Sustain: {c.sustainability_score}</Badge>
              <Badge color="yellow">Motivation: {c.motivation_score}</Badge>
            </Group>

            <Group mt="md" justify="space-between">
              <Badge variant="outline">Total: {c.total_score}</Badge>

              <CopyButton value={JSON.stringify(c, null, 2)}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? "Copied!" : "Share Candidate"}>
                    <Button size="xs" variant="light" onClick={copy}>
                      Share
                    </Button>
                  </Tooltip>
                )}
              </CopyButton>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}