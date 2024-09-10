-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2024 at 06:46 AM
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
-- Table structure for table `register_data`
--

CREATE TABLE `register_data` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `address_line1` varchar(255) DEFAULT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `percentage_share` decimal(5,2) DEFAULT NULL,
  `work_title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `type_of_work` varchar(255) DEFAULT NULL,
  `subcategory` varchar(255) DEFAULT NULL,
  `year_of_creation` int(11) DEFAULT NULL,
  `date_of_publication` date DEFAULT NULL,
  `nation_of_publication` varchar(255) DEFAULT NULL,
  `same_as_claimants` varchar(10) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register_data`
--

INSERT INTO `register_data` (`id`, `first_name`, `last_name`, `company_name`, `address_line1`, `address_line2`, `city`, `state`, `postal_code`, `country`, `phone_number`, `email`, `percentage_share`, `work_title`, `description`, `type_of_work`, `subcategory`, `year_of_creation`, `date_of_publication`, `nation_of_publication`, `same_as_claimants`, `file_path`, `created_at`) VALUES
(2, 'Kunwar', 'BANK', '6valley', 'Gram mohandiya dhansi Post  mandawar, Bijnor, Bijnor', 'Bijnor', 'BIJNOR', 'UTTAR PRADESH', '246721', 'India', '123456535', 'aasg@gmail.com', 100.00, 'tests', 'kjhvrekvhreikghn', 'Literary Works', 'Advertising and Marketing Materials', 2024, '2024-09-03', 'Tuvalu', 'Yes, the a', NULL, '2024-09-10 02:39:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register_data`
--
ALTER TABLE `register_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register_data`
--
ALTER TABLE `register_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
