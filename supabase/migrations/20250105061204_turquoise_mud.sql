/*
  # Events Platform Database Schema

  1. Tables
    - users: Store user account information
    - events: Store event details
    - tickets: Store ticket information
    - bookings: Store booking information
    
  2. Stored Procedures
    - User authentication
    - Event management
    - Ticket operations
*/

-- Users table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Events table
CREATE TABLE events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  location VARCHAR(255),
  date DATE NOT NULL,
  time TIME NOT NULL,
  capacity INT NOT NULL,
  organizer_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (organizer_id) REFERENCES users(id)
);

-- Tickets table
CREATE TABLE tickets (
  id INT PRIMARY KEY AUTO_INCREMENT,
  event_id INT NOT NULL,
  type VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES events(id)
);

-- Bookings table
CREATE TABLE bookings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  ticket_id INT NOT NULL,
  quantity INT NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (ticket_id) REFERENCES tickets(id)
);

-- Stored Procedures

DELIMITER //

-- User login procedure
CREATE PROCEDURE sp_user_login(IN p_email VARCHAR(255))
BEGIN
  SELECT id, email, password, first_name, last_name
  FROM users
  WHERE email = p_email;
END //

-- User registration procedure
CREATE PROCEDURE sp_user_register(
  IN p_email VARCHAR(255),
  IN p_password VARCHAR(255)
)
BEGIN
  INSERT INTO users (email, password)
  VALUES (p_email, p_password);
END //

-- Get featured events procedure
CREATE PROCEDURE sp_get_featured_events()
BEGIN
  SELECT 
    e.id,
    e.title,
    e.description,
    e.image_url,
    e.location,
    e.date,
    e.time,
    e.capacity,
    MIN(t.price) as min_price
  FROM events e
  LEFT JOIN tickets t ON e.id = t.event_id
  GROUP BY e.id
  ORDER BY e.date ASC
  LIMIT 6;
END //

DELIMITER ;