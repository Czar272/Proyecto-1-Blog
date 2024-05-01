-- Create Database
Create database if not exists blog_db; 
Use blog_db;

-- Create a user and grant privilages
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON blog_db.* to 'blog_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS juego (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL, 
    cont TEXT NOT NULL, 
    img TEXT NOT NULL, 
    creator TEXT NOT NULL
);