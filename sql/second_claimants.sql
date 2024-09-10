-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2024 at 12:10 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_register`
--

-- --------------------------------------------------------

--
-- Table structure for table `second_claimants`
--

CREATE TABLE `second_claimants` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `street_address_line1` varchar(255) NOT NULL,
  `street_address_line2` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `postal_code` varchar(20) NOT NULL,
  `country` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `percentage` int(11) NOT NULL CHECK (`percentage` > 0 and `percentage` <= 100),
  `register_data_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `second_claimants`
--

INSERT INTO `second_claimants` (`id`, `first_name`, `last_name`, `company_name`, `street_address_line1`, `street_address_line2`, `city`, `state`, `postal_code`, `country`, `phone_number`, `email`, `percentage`, `register_data_id`) VALUES
(2, 'Kunwar', 'Management', 'Entry-level Developer', 'CIVIL LINES BIJNORE UTTAR PRADESH 245701', 'Bijnor', 'ponta', 'UTTAR PRADESH', '246721', 'India', '07818038865', 'hjgaasg@gmail.com', 50, 21),
(3, 'Kunwar', 'Management', 'Entry-level Developer', 'CIVIL LINES BIJNORE UTTAR PRADESH 245701', 'Bijnor', 'ponta', 'UTTAR PRADESH', '246721', 'India', '07818038865', 'hjgaasg@gmail.com', 30, 22),
(4, 'Aashish', 'Rajput', '6valley', 'Gram mohandiya dhansi Post  mandawar, Bijnor, Bijnor', 'Bijnor', 'BIJNOR', 'UTTAR PRADESH', '246721', 'Afghanistan', '746684754', 'oifuhe@figjn.com', 40, 22),
(5, 'Kunwar', 'Management', 'Entry-level Developer', 'CIVIL LINES BIJNORE UTTAR PRADESH 245701', 'Bijnor', 'ponta', 'UTTAR PRADESH', '246721', 'India', '07818038865', 'hjgaasg@gmail.com', 40, 23),
(6, 'Aashish', 'Rajput', '6valley', 'Gram mohandiya dhansi Post  mandawar, Bijnor, Bijnor', 'Bijnor', 'BIJNOR', 'UTTAR PRADESH', '246721', 'Afghanistan', '746684754', 'oifuhe@figjn.com', 20, 23),
(7, 'Aashish', 'Rajput', '6valley', 'Gram mohandiya dhansi Post  mandawar, Bijnor, Bijnor', '', 'BIJNOR', 'UTTAR PRADESH', '246721', 'Afghanistan', '5465654', 'aashishrajput456@gmail.com', 50, 29);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `second_claimants`
--
ALTER TABLE `second_claimants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `register_data_id` (`register_data_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `second_claimants`
--
ALTER TABLE `second_claimants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `second_claimants`
--
ALTER TABLE `second_claimants`
  ADD CONSTRAINT `second_claimants_ibfk_1` FOREIGN KEY (`register_data_id`) REFERENCES `register_data` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
