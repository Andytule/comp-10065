-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2020 at 11:27 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `000805099`
--

-- --------------------------------------------------------

--
-- Table structure for table `stockupdates`
--

CREATE TABLE `stockupdates` (
  `StockId` int(20) NOT NULL,
  `StockName` varchar(20) NOT NULL,
  `CurrentPrice` double(20,0) NOT NULL,
  `UpdateDateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stockupdates`
--

INSERT INTO `stockupdates` (`StockId`, `StockName`, `CurrentPrice`, `UpdateDateTime`) VALUES
(1, 'Apple', 10, '2020-08-19 16:31:22'),
(2, 'Samsung', 15, '2020-08-18 16:35:25'),
(3, 'Google', 100, '2020-08-20 19:49:53'),
(4, 'Amazon', 35, '2020-08-11 20:36:00'),
(9, 'Tesla', 50, '2020-08-13 03:49:16'),
(10, 'Black Berry', 2, '2020-08-12 03:50:36'),
(11, 'Intel', 35, '2020-08-19 03:54:33'),
(12, 'Mcdonalds', 40, '2020-08-04 03:55:27'),
(13, 'Honda', 45, '2020-08-05 03:57:27'),
(14, 'Amazon', 85, '2020-08-19 03:58:01'),
(15, 'Mohawk College', 1, '2020-08-20 03:59:02'),
(16, 'McMaster University', 2, '2020-08-19 03:59:23'),
(17, 'Itzy', 200, '2020-08-18 04:00:07'),
(18, 'Logitech', 95, '2020-08-19 04:00:27'),
(19, 'Sony', 31, '2020-08-01 04:07:55'),
(20, 'Wendy', 3, '2020-08-12 04:17:43'),
(21, 'Cocos', 3, '2020-08-12 04:18:11'),
(24, 'AMD', 42, '2020-08-19 04:26:11'),
(25, 'NASA', 43, '2020-08-11 04:26:11'),
(26, 'Riot Games', 32, '2020-08-13 04:26:11'),
(27, 'Dell', 55, '2020-08-04 05:21:22'),
(28, 'Panasonic', 32, '2020-08-19 05:21:22'),
(29, 'HP', 25, '2020-08-19 05:21:22'),
(33, 'Dofasco', 32, '2020-08-19 05:27:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stockupdates`
--
ALTER TABLE `stockupdates`
  ADD PRIMARY KEY (`StockId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stockupdates`
--
ALTER TABLE `stockupdates`
  MODIFY `StockId` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
