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
-- Dumping data for table `candidates`
--

LOCK TABLES `candidates` WRITE;
/*!40000 ALTER TABLE `candidates` DISABLE KEYS */;
INSERT INTO `candidates` VALUES (1,'Dana Oberbrunner',7,'Process Optimization, Leadership, Team Handling'),(2,'Zachary Hane',4,'Logistics, Leadership, Inventory'),(3,'Yoshiko Vandervort',3,'Process Optimization, Logistics, Inventory'),(4,'Wendell Prosacco V',11,'Team Handling, Safety Protocols, Waste Management'),(5,'Ford Corkery',12,'Leadership, Safety Protocols, Logistics'),(6,'Phoebe Fadel',7,'Process Optimization, Inventory, Waste Management'),(7,'Osvaldo Lang',2,'Team Handling, Inventory, Process Optimization'),(8,'Maryam Kulas',2,'Safety Protocols, Logistics, Waste Management'),(9,'Lila Feil',5,'Inventory, Operations, Leadership'),(10,'Kristina Nader',4,'Process Optimization, Logistics, Inventory'),(11,'Mandy Reynolds',13,'Team Handling, Waste Management, Operations'),(12,'Travon Kris',10,'Process Optimization, Waste Management, Safety Protocols'),(13,'Dr. Vergie Labadie I',8,'Waste Management, Logistics, Leadership'),(14,'Kay Hessel',9,'Safety Protocols, Inventory, Operations'),(15,'Braxton Ortiz I',6,'Process Optimization, Logistics, Leadership'),(16,'Kathy Frami',15,'Safety Protocols, Process Optimization, Team Handling'),(17,'Domenica Doyle',13,'Safety Protocols, Inventory, Leadership'),(18,'Janet Rosenbaum',6,'Safety Protocols, Team Handling, Leadership'),(19,'Tony Cronin',5,'Safety Protocols, Process Optimization, Leadership'),(20,'Jake Weimann MD',10,'Waste Management, Logistics, Operations'),(21,'Timothy Langworth',4,'Leadership, Inventory, Waste Management'),(22,'Genevieve Boyer',3,'Operations, Leadership, Waste Management'),(23,'Ben Ebert',9,'Logistics, Operations, Safety Protocols'),(24,'Mr. Edwin Goldner',14,'Team Handling, Process Optimization, Inventory'),(25,'Mason Hermann',12,'Logistics, Safety Protocols, Leadership'),(26,'Miss Roberto Feeney',4,'Process Optimization, Inventory, Waste Management'),(27,'Mertie Conn',9,'Leadership, Safety Protocols, Inventory'),(28,'Tobin DuBuque',4,'Logistics, Operations, Inventory'),(29,'Tomas Hermiston',3,'Inventory, Process Optimization, Team Handling'),(30,'Terri Goldner II',4,'Process Optimization, Operations, Leadership'),(31,'Beverly Kris',9,'Safety Protocols, Inventory, Leadership'),(32,'Vicki Murray',1,'Logistics, Process Optimization, Safety Protocols'),(33,'Alexis Tillman',9,'Operations, Inventory, Leadership'),(34,'Andy Toy',2,'Waste Management, Leadership, Inventory'),(35,'Dina Schoen',3,'Operations, Inventory, Process Optimization'),(36,'Drew Schiller I',8,'Operations, Inventory, Process Optimization'),(37,'Marilyn Walsh',8,'Process Optimization, Team Handling, Logistics'),(38,'Randall Stiedemann',8,'Waste Management, Operations, Safety Protocols'),(39,'Mrs. Doyle Carter',15,'Logistics, Operations, Process Optimization'),(40,'Wilson Beahan',13,'Logistics, Process Optimization, Waste Management');
/*!40000 ALTER TABLE `candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `evaluations`
--

LOCK TABLES `evaluations` WRITE;
/*!40000 ALTER TABLE `evaluations` DISABLE KEYS */;
INSERT INTO `evaluations` VALUES (1,1,5,3,3),(2,2,8,9,3),(3,3,3,10,2),(4,4,7,7,8),(5,5,3,10,3),(6,6,8,5,3),(7,7,2,2,9),(8,8,4,10,7),(9,9,2,1,3),(10,10,8,9,6),(11,11,6,8,5),(12,12,1,1,6),(13,13,6,3,2),(14,14,1,3,7),(15,15,2,8,3),(16,16,4,8,8),(17,17,4,2,5),(18,18,7,3,7),(19,19,3,9,9),(20,20,1,6,7),(21,21,5,7,8),(22,22,8,1,9),(23,23,3,5,9),(24,24,10,9,2),(25,25,10,6,4),(26,26,10,9,1),(27,27,1,9,6),(28,28,7,3,1),(29,29,3,9,2),(30,30,7,10,1),(31,31,10,9,6),(32,32,6,5,7),(33,33,10,8,5),(34,34,9,7,5),(35,35,5,7,4),(36,36,9,6,10),(37,37,8,1,2),(38,38,10,10,9),(39,39,10,1,9),(40,40,10,4,3);
/*!40000 ALTER TABLE `evaluations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rankings`
--

LOCK TABLES `rankings` WRITE;
/*!40000 ALTER TABLE `rankings` DISABLE KEYS */;
INSERT INTO `rankings` VALUES (1,11,38),(2,20,12),(3,15,28),(4,22,6),(5,16,27),(6,16,25),(7,13,32),(8,21,8),(9,6,40),(10,23,5),(11,19,17),(12,8,39),(13,11,36),(14,11,34),(15,13,31),(16,20,15),(17,11,33),(18,17,23),(19,21,10),(20,14,30),(21,20,11),(22,18,20),(23,17,22),(24,21,9),(25,20,14),(26,20,13),(27,16,24),(28,11,35),(29,14,29),(30,18,19),(31,25,3),(32,18,18),(33,23,4),(34,21,7),(35,16,26),(36,25,2),(37,11,37),(38,29,1),(39,20,16),(40,17,21);
/*!40000 ALTER TABLE `rankings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-13 11:19:49
