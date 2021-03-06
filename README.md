# :closed_lock_with_key: LastPass Clone
LastPass is a password manager that stores all your login credentials in a secured vault

This project has been developed as a part of CSS Assignment 1 by Manali Bagwe, Netra Ghaisas and Bhagyashree Phadnis

## Features implemented
:key: Master Password to unlock your secure password vault

:arrows_counterclockwise: Randomly generate strong passwords locally

:muscle: Test password strength locally

_Note: Passwords are generated and tested locally with JavaScript and never sent in cleartext form to the database_

## Architecture
![lastpass architecture](images/architecture.JPG)


This project uses the SJCL library at https://github.com/bitwiseshiftleft/sjcl for encryption, decryption, password hashing and random number generation

# How to run the project
:Clone this repository into XAMPP root folder

:Open PHPMyAdmin and import the database from databases/lastpass.sql file

:Alternatively, a database has been hosted on remotemysql.com for this project. Go to dbConnection.php and change the connection query to include remote database parameters instead of local database parameters. The remote database connection query has been commented out in the same file
