# AI Evaluation Prompts – Recycling Production Line Manager Selection System

These prompts are used to evaluate candidates for a Recycling Production Line Manager role.  
Scores are normalized to a 1–10 scale and can be generated using mock AI responses or a free AI API.

Each prompt includes a scoring rubric to ensure consistency and explainability.

---

## 1. Crisis Management Prompt

**Prompt:**

You are an HR evaluation AI.  
Evaluate the candidate’s ability to handle operational crises in a recycling production line environment  
(e.g., equipment failure, safety incidents, labor shortages, compliance issues).

**Base your evaluation on:**
- Years of experience
- Past operational responsibilities
- Safety and crisis-related skills
- Decision-making under pressure

**Scoring Rubric (1–10):**
- 1–3 → No crisis-handling experience, junior or theoretical knowledge only  
- 4–6 → Some operational exposure, limited crisis ownership  
- 7–8 → Managed teams or incidents with good outcomes  
- 9–10 → Led crisis response, prevented downtime, strong safety leadership  

**Return:**
- A score from 1–10  
- A one-line justification  

**Example Output:**
```json
{
  "score": 8,
  "reason": "Managed safety incidents and equipment failures in prior supervisory role."
}
```

## 2. Sustainability Knowledge Prompt

**Prompt:**
Evaluate the candidate’s understanding of sustainability principles relevant to recycling operations and waste management.

**Base your evaluation on:**
- Knowledge of waste segregation workflows
- Recycling best practices
- Environmental compliance
- Process optimization to reduce waste

**Scoring Rubric (1–10):**
- 1–3 → No sustainability exposure
- 4–6 → Basic operational understanding
- 7–8 → Applied sustainability practices in daily operations 
- 9–10 → Led or designed sustainability initiatives

**Return:**
- A score from 1–10  
- A one-line justification  

**Example Output:**
```json
{
  "score": 7,
  "reason": "Demonstrated applied knowledge of waste segregation and recycling workflows."
}
```

## 3. Team Motivation Prompt

**Prompt:**
Assess the candidate’s ability to motivate and manage teams in high-pressure production environments.

**Base your evaluation on:**
- Leadership experience
- Communication skills
- Conflict resolution
- Ability to maintain morale during peak workloads

**Scoring Rubric (1–10):**
- 1–3 → Individual contributor, no leadership
- 4–6 → Assisted in team coordination 
- 7–8 → Led small teams or shifts 
- 9–10 → Led large teams, improved retention and morale 

**Return:**
- A score from 1–10  
- A one-line justification  

**Example Output:**
```json
{
  "score": 9,
  "reason": "Led cross-functional teams and maintained morale during peak workloads."
}
```