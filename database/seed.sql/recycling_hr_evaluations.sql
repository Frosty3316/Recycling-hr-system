-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: recycling_hr
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `evaluations`
--

DROP TABLE IF EXISTS `evaluations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `candidate_id` int DEFAULT NULL,
  `crisis_score` int DEFAULT NULL,
  `sustainability_score` int DEFAULT NULL,
  `motivation_score` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `candidate_id` (`candidate_id`),
  CONSTRAINT `evaluations_ibfk_1` FOREIGN KEY (`candidate_id`) REFERENCES `candidates` (`id`) ON DELETE CASCADE,
  CONSTRAINT `evaluations_chk_1` CHECK ((`crisis_score` between 1 and 10)),
  CONSTRAINT `evaluations_chk_2` CHECK ((`sustainability_score` between 1 and 10)),
  CONSTRAINT `evaluations_chk_3` CHECK ((`motivation_score` between 1 and 10))
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluations`
--

LOCK TABLES `evaluations` WRITE;
/*!40000 ALTER TABLE `evaluations` DISABLE KEYS */;
INSERT INTO `evaluations` VALUES (1,1,5,3,3),(2,2,8,9,3),(3,3,3,10,2),(4,4,7,7,8),(5,5,3,10,3),(6,6,8,5,3),(7,7,2,2,9),(8,8,4,10,7),(9,9,2,1,3),(10,10,8,9,6),(11,11,6,8,5),(12,12,1,1,6),(13,13,6,3,2),(14,14,1,3,7),(15,15,2,8,3),(16,16,4,8,8),(17,17,4,2,5),(18,18,7,3,7),(19,19,3,9,9),(20,20,1,6,7),(21,21,5,7,8),(22,22,8,1,9),(23,23,3,5,9),(24,24,10,9,2),(25,25,10,6,4),(26,26,10,9,1),(27,27,1,9,6),(28,28,7,3,1),(29,29,3,9,2),(30,30,7,10,1),(31,31,10,9,6),(32,32,6,5,7),(33,33,10,8,5),(34,34,9,7,5),(35,35,5,7,4),(36,36,9,6,10),(37,37,8,1,2),(38,38,10,10,9),(39,39,10,1,9),(40,40,10,4,3);
/*!40000 ALTER TABLE `evaluations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-13 11:10:03
