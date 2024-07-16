Visitor Management Application (VMS)
What is VMS?

VMS (Visitor Management System) is a web application designed to streamline the visitor registration process for organizations. It replaces manual record-keeping with a user-friendly interface, improving efficiency and security.

Features:

Intuitive Visitor Registration: Visitors easily enter their details (Name, Email, Mobile No.) through a web form.
Automatic Check-In: Upon check-in, the system captures the current time and sends notification emails and SMS alerts (optional) to the designated host.
Check-Out with Edit: Visitors can edit their details and record their checkout time.
Automated Check-Out Notifications: After checkout, the system sends a confirmation email and SMS (optional) to the visitor.
Configurable Host: Company can define the host details (email and phone number) in a configuration file (config.json).
Technology Stack:

Front-End: HTML, CSS, Bootstrap (for responsive design)
Back-End: Node.js (JavaScript runtime environment for server-side operations)
Database: MySQL (relational database for storing visitor data) (Note: Configuration details for MySQL setup are provided in setup.txt)
SMS API (Optional): Twilio (external service for sending SMS alerts. Requires a Twilio account and configuration in config.json)
Email Notifications: SMTP protocol (standard for sending emails)
Installation:

Install Dependencies:
Bash
npm install
Use code with caution.

Configure Database: Follow instructions in setup.txt to install and configure MySQL.
Configure Twilio (Optional):
Create a Twilio trial account and obtain the following credentials:
Authorization SID and Token
Free trial phone number (use this for the "from" field in config.json)
Verified phone number (use this for the "to" field in config.json)
Input these details in config.json.
Start the Application:
Bash
node index.js
Use code with caution.

Disclaimer:

This application serves as a basic VMS and can be further customized to meet specific needs.

Output Files:

The repository includes sample output files (output1 and output2) for demonstration purposes.
