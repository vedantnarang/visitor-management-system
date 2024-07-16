***Visitor Management Application (VMS)***

**What is VMS?**

VMS (Visitor Management System) is a web application designed to streamline the visitor registration process for organizations. It replaces manual record-keeping with a user-friendly interface, improving efficiency and security.

**Features:**

Intuitive Visitor Registration: Visitors easily enter their details (Name, Email, Mobile No.) through a web form.
Automatic Check-In: Upon check-in, the system captures the current time and sends notification emails and SMS alerts (optional) to the designated host.
Automated Check-Out Notifications: After checkout, the system sends a confirmation email and SMS (optional) to the visitor.
Configurable Host: Company can define the host details (email and phone number) in a configuration file (config.json).

**Technology Stack:**

Front-End: HTML, CSS, JS
Back-End: Node.js (with express.js)
Database: Mongodb

**Install Dependencies:**
Use the node package manager [npm](https://www.npmjs.com/) to first install all modules listed in package.json.

```bash
npm install

```

**Start the Application:**
```bash
npx nodemon

```
(make sure that nodemon is installed globally or locally on your device)

Then go to your browser and search "localhost:3000"

**Disclaimer:**

This application serves as a basic VMS and can be further customized to meet specific needs.

**Output Files:**

Once you Start the localhost you will see the database created into your mongodb app(make sure its open) 

![Screenshot 2024-07-16 155219](https://github.com/user-attachments/assets/dfa942a8-6cbe-4bbf-a485-aa4904266756)

Now go to the browser and type "localhost:3000"to see the form and then add all of teh information ensuring you don't leave the required ones empty

![Screenshot 2024-07-16 172125](https://github.com/user-attachments/assets/8f039943-5d4e-42b8-bf43-4de7bb68cd38)

After submitting the form you will be able to see the visitor information in the form of an id card as shown below following a message "visitor added succesfully"

![Screenshot 2024-07-16 173842](https://github.com/user-attachments/assets/e750ac16-eed3-4e66-bfbc-0f2df334b283)


Then go on to check the mongodb into the visitor_management , you will be able to see the details of the visitor (make sure you refresh)

![Screenshot 2024-07-16 155836](https://github.com/user-attachments/assets/f25aabbc-e2f2-48a2-9274-2b27c3ec32da)


