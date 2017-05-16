-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 15, 2017 at 12:10 PM
-- Server version: 5.7.18-0ubuntu0.17.04.1
-- PHP Version: 7.0.18-1+deb.sury.org~yakkety+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mario`
--

-- --------------------------------------------------------

--
-- Table structure for table `marioUser`
--

CREATE TABLE `marioUser` (
  `idUser` int(11) NOT NULL,
  `pseudoUser` varchar(255) NOT NULL,
  `highscoreUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marioUser`
--

INSERT INTO `marioUser` (`idUser`, `pseudoUser`, `highscoreUser`) VALUES
(6, 'fyghujnkl,', NULL),
(10, 'Rinja', NULL),
(11, 'fd', NULL),
(12, 'skuuuuuurt', NULL),
(13, 'Amonisaka', NULL),
(14, 'hhhhh', NULL),
(15, 'rinja', NULL),
(16, 'test', NULL),
(17, 'test1', NULL),
(18, 'test1', NULL),
(19, 'ouioui', NULL),
(20, 'lolo', NULL),
(21, 'lélé', NULL),
(22, 'Nizza', NULL),
(23, 'Nizza', NULL),
(24, 'Nizzalola', NULL),
(25, 'ahmadou', NULL),
(26, 'lalalalalala', NULL),
(27, 'hahahaha', NULL),
(28, 'coco', NULL),
(29, 'cuicui', NULL),
(30, 'koko', NULL),
(31, 'lolpm', NULL),
(32, 'kekekeke', NULL),
(33, 'uiuiu', NULL),
(34, 'ronaldo', NULL),
(35, 'blabla', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `marioUser`
--
ALTER TABLE `marioUser`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `marioUser`
--
ALTER TABLE `marioUser`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
