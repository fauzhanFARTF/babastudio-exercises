-- MariaDB dump 10.19  Distrib 10.8.3-MariaDB, for osx10.17 (arm64)
--
-- Host: localhost    Database: babastudio_express_ecommerce
-- ------------------------------------------------------
-- Server version	10.8.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `nama_produk` varchar(60) NOT NULL,
  `gambar_produk` varchar(200) NOT NULL,
  `harga_product` int(13) NOT NULL,
  `des_product` text NOT NULL,
  `createdate` date NOT NULL,
  `add_information` text DEFAULT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES
(1,'Garmin fenix 6X','Garmin fenix 6X.png',13999000,'Tidak perlu khawatir kehabisan daya baterai dalam ekspedisi berminggu-minggu. Gunakan fenix 6X yang memiliki sumber daya baterai dari energi matahari. Mode ekspedisinya akan membantu memperpanjang daya baterai Anda selama ekspedisi. Jalan mendaki pun tidak menjadi masalah dengan adanya fitur ClimbingPro yang memberikan informasi tentang jarak dan ketinggian. Sensor navigasi ABC yang dilengkapi dengan altimeter, barometer, serta kompas membuat perjalanan Anda lebih nyaman. Jatuhkan pilihan pada jam ini bila Anda gemar bertualang!','2020-01-17','Ukuran Layar->35,56 mm ; Daya Tahan Baterai->\n64 hari (mode hemat baterai), 36 hari (mode GPS ekspedisi), 21 hari (mode smartwatch:), 60 jam ( mode GPS:), 16 jam (mode GPS dan musik) ; Fitur->GPS, glonass, galileo, heart rate monitor, barometric altimeter, compass, gyroscope, accelerometer, thermometer, pulse ox, smart notification, text response, play and control music, music storage, Garmin pay, step counter, move bar, auto goal, sleep monitoring, calories burned, floors climbed, distance traveled, intensity minutes, TRUEUP, MOVE IQ, body battery energy monitor, all-day stress tracking ; Waterproof->10 ATM ; Bahan Strap-> Silicone atau titanium'),
(2,'Garmin Approach S62','Garmin Approach S62.png',8799000,'Rekomendasi jam tangan Garmin kali ini akan cocok untuk Anda yang memiliki hobi bermain golf. Jam tangan Garmin Approach S62 dapat mendukung hobi bermain golf karena memiliki fitur-fitur mumpuni seperti caddy virtual. Anda juga dapat mengetahui arah dan kecepatan angin. Jam ini memiliki tampilan layar yang lebih besar dari seri sebelumnya. Dengan begitu, Anda dapat melihat 41.000 peta CourseView berwarna dari lapangan golf dari seluruh dunia dengan nyaman.','2020-01-30','Ukuran Layar->Diameter 33,02 mm ; Daya Tahan Baterai->\nSmartwatch mode: hingga 14 hari, Mode GPS: hingga 20 jam ; Fitur->Sensor GPS, Garmin Elevate Wrist Heart Rate Monitor, Compass, Gyroscope, Accelerometer, Pulse Ox, connect IQ store, pemantauan tidur, TrueUp, Body battery energy monitoring ; Waterproof->5 ATM ; Bahan Strap-> Silikon'),
(3,'Garmin Instinct 2S Solar','Garmin Instinct 2S Solar.jpeg',7479000,'Apakah Anda memiliki hobi berpetualang? Jika iya, jam tangan Garmin Instinct 2S Solar dapat menjadi pilihan Anda. Jam ini memiliki fitur hemat baterai serta pengisian dengan energi matahari sehingga dapat digunakan dalam waktu lama. Selain itu, jam tangan GPS ini memiliki kemampuan tahan air hingga kedalaman 100 meter.','2020-01-30','Ukuran Layar->20 mm x 20 mm ; Daya Tahan Baterai->Mode Hemat Baterai: Hingga 50 hari / tak terbatas dengan tenaga surya ; Fitur->Tipe Layar monochrome, sunlight-visible, sensor GPS, GLONASS, GALILEO, Multi-Frequency Positioning, Garmin Eelevate Wrist Heart Rate Monitor, Barometric Altimeter, Compass, Gyroscope, Accelerometer, Thermometer, Pulse Ox Blood Oxygen Saturation Monitor, safety and tracking features, connect IQ store , smart notification, built-in sports app, recovery time, daily workout suggestion, Body Battery energy monitoring, stress tracking, sleep score and advanced sleep monitoring, women’s health tracking ; Waterproof->10 ATM (Berenang) ; Bahan Strap-> Silikon'),
(4,'Garmin epix Gen2','Garmin epix Gen2.jpeg',16649000,'Rekomendasi jam Garmin terbaik kali ini merupakan salah satu pilihan premium dari Garmin. Jam ini memiliki layar AMOLED yang selalu menyala dan dapat dilihat dengan nyaman di bawah sinar matahari yang terang. Jam ini akan cocok untuk Anda yang mencari perpaduan antara jam olahraga dan jam tangan sehari-hari. Jam ini menawarkan berbagai fitur olahraga, salah satunya dapat digunakan untuk bersepeda.','2020-01-30','Ukuran Layar->Diameter 33,02 mm ; Daya Tahan Baterai->Mode Smartwatch: hingga 16 hari (always-on 6 hari), mode hemat baterai: hingga 21 hari ; Fitur->Sensor GPS, GLONASS, GALILEO, Multi-Frequency Positioning, Garmin Eelevate Wrist Heart Rate Monitor, Barometric Altimeter, Compass, Gyroscope, Accelerometer, Thermometer, ambient light sensor, Pulse Ox Blood Oxygen Saturation Monitor, Tipe Layar AMOLED (always-on), respiration tracking, stress tracking, hydration tracking, body battery energy monitoring, sleep score and advanced sleep monitoring, PacePro Technology, Garmin coach, real-time stamina, safety and tracking features, connect IQ store , smart notification, music apps ; Waterproof->10 ATM (Berenang) ; Bahan Strap-> Silikon'),
(5,'Garmin Fenix 7X Solar','Garmin Fenix 7X Sapphire Solar.jpeg',16629000,'Jam ini cocok untuk Anda yang banyak berkegiatan di luar ruangan karena dapat menerima daya baterai dari sinar matahari. Salah satu keunggulan dari jam tangan Garmin ini adalah fitur olahraga yang lengkap. Jam ini dapat mendukung Anda untuk berselancar, berlari, berenang, bersepeda, bermain ski, golf, hingga mendaki.','2020-01-17','Ukuran Layar->Diameter 35,56 mm) ; Daya Tahan Baterai->GPS Ekspedisi: Hingga 62 hari / 139 hari dengan tenaga surya, Semua Sistem Satelit dan Multi-Band: Hingga 38 jam/42 jam dengan tenaga surya, Mode Smartwatch: Hingga 28 hari / 37 hari dengan tenaga surya, Mode Hemat Baterai: Hingga 90 hari / 1 tahun lebih dengan tenaga surya ; Fitur->\nSensor GPS, GLONASS, GALILEO, Multi-Frequency Positioning, Garmin Eelevate Wrist Heart Rate Monitor, sleep score and advanced sleep monitoring, Barometric Altimeter, Compass, Gyroscope, Accelerometer, Thermometer, Body battery energy monitoring, pulse Ox sensor, hydration tracking, respiration tracking, real-time stamina, PacePro technology, solar charged battery, golf course map, ClimbPro feature, Performance Metrics, recovery time advisor, built-in flashlight, smart notification, music apps, connect IQ store, safety and tracking features. ; Waterproof->10 ATM (Berenang) ; Bahan Strap-> Silikon'),
(6,'Garmin Venu Sq','Garmin Venu Sq – Music Edition.jpeg',3999000,'Jam ini memiliki fitur smart notification yang membantu Anda membaca bahkan membalas pesan singkat hingga e-mail pada layar jam. Jam ini juga menawarkan fitur pelacak kesehatan yang lengkap mulai dari stress tracking hingga menstrual cycle tracking. Tak hanya memiliki fitur yang lengkap, produk Garmin yang satu ini memiliki desain yang elegan. Tampilan yang clean dari jam ini sangat cocok dipadukan dengan Anda yang senang menggunakan outfit smart casual. Lebih dari itu, jam ini harus dipilih oleh Anda yang hobi mendengarkan musik karena playlist terekam di jam tangan. Menarik, bukan?','2020-01-17','Ukuran Layar->33,1 mm (diagonal) ; Daya Tahan Baterai->\nMode smartwacth: hingga 6 hari, mode GPS dengan musik: Hingga 6 jam, modus GPS tanpa musik: hingga 20 jam ; Fitur->\nBody battery energy monitoring, stress tracking, hydration tracking, respiration tracking, menstrual cycle tracking, pulse Ox sensor, advance sleep monitoring, smart notification, connected GPS, fitness tracking, & mindful breathing, musik, built-in sport apps, Garmin coach, custom workouts, connect IQ store, safety and tracking features, ANT+® Sensor GPS, Glonass, Galileo, Garmin Elevate™, termometer ; Waterproof->5 ATM (Berenang) ; Bahan Strap-> Silikon'),
(7,'Forerunner 55','Forerunner 55.png',3199000,'Jika Anda mencari smartwatch yang cocok digunakan untuk pelari, inilah produk yang perlu Anda pertimbangkan. Fitur lari yang ada pada jam ini di antaranya adalah lari treadmill, lari dalam ruangan, serta lari di luar ruangan. Jam ini juga dapat menunjukkan jumlah langkah per menit secara real time.','2020-01-17','Ukuran layar->Diameter 26,3 mm ; Daya tahan baterai->Mode smartwatch hingga 14 hari, mode GPS hingga 20jam ; Fitur->Sensor GPS, Glonass, Galileo, Monitor Denyut Jantung Pergelangan Garmin Elevate, Akselerometer, safety and tracking features, connect IQ store, respiration tracking, Body battery energy monitoring, stress tracking, smart notification, women\'s health tracking, Physio TrueUp, PacePro technology, recovery time advisor ; Waterproof->5 ATM ; Bahan strap->Silikon');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_images` (
  `id_images` int(11) NOT NULL AUTO_INCREMENT,
  `gambar_produk` varchar(200) NOT NULL,
  `id_product` int(13) NOT NULL,
  PRIMARY KEY (`id_images`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES
(1,'Garmin fenix 6X.png',1),
(2,'Garmin fenix 6X_p-1.png',1),
(3,'Garmin fenix 6X_p-2.png',1),
(4,'Garmin Approach S62.png',2),
(5,'Garmin Approach S62_p-1.png',2),
(6,'Garmin Approach S62_p-2.png',2),
(7,'Garmin Fenix 7X Sapphire Solar.jpeg',5),
(8,'Garmin Fenix 7X Sapphire Solar_p-1.jpeg',5),
(9,'Garmin Fenix 7X Sapphire Solar_p-2.jpeg',5),
(10,'Garmin epix Gen2.jpeg',4),
(11,'Garmin epix Gen2_p-1.jpeg',4),
(12,'Garmin epix Gen2_p-2.jpeg',4),
(13,'Garmin Instinct 2S Solar.jpeg',3),
(14,'Garmin Instinct 2S Solar_p-1.jpeg',3),
(15,'Garmin Instinct 2S Solar_p-2.jpeg',3),
(16,'Garmin Venu Sq – Music Edition.jpeg',6),
(17,'Garmin Venu Sq – Music Edition_p-1.png',6),
(18,'Garmin Venu Sq – Music Edition_p-2.png',6),
(19,'Forerunner 55.png',7),
(20,'Forerunner 55_p-1.jpeg',7),
(21,'Forerunner 55_p-2.jpeg',7);
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_slider`
--

DROP TABLE IF EXISTS `product_slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_slider` (
  `id_images` int(11) NOT NULL AUTO_INCREMENT,
  `gambar_produk` varchar(200) NOT NULL,
  PRIMARY KEY (`id_images`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_slider`
--

LOCK TABLES `product_slider` WRITE;
/*!40000 ALTER TABLE `product_slider` DISABLE KEYS */;
INSERT INTO `product_slider` VALUES
(1,'bnr-1.jpg'),
(2,'bnr-2.jpg'),
(3,'bnr-3.jpg');
/*!40000 ALTER TABLE `product_slider` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-26 15:34:48
