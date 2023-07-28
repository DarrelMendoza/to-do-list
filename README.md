# **Darrel's To-Do List Application**

Welcome to the repository of Darrel's To-Do List application, a simple yet powerful to-do list application that helps manage your tasks easily. This application is built with Angular and Bootstrap for the frontend, and NodeJS, Express.js, and MySQL for the backend. You can view the live application here: [**https://darrels-todolist.web.app/**](https://darrels-todolist.web.app/)

## **Live Demo**

For live demo of the application, please visit: [**https://darrels-todolist.web.app/**](https://darrels-todolist.web.app/)

## **Technologies Used**

- Frontend: [**Angular**](https://angular.io/) and [**Bootstrap**](https://getbootstrap.com/)
- Backend: [**Node.js**](https://nodejs.org/en/), [**Express.js**](https://expressjs.com/), and [**MySQL**](https://www.mysql.com/)

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## **Table of Contents**

1. **[Features](#features)**
2. **[Installation](#installation)**
3. **[Running the Application](#running-the-application)**
4. **[Screenshots](#screenshots)**

## **Features**

- Create a task
- Delete a task
- Mark a task as completed
- Edit a task

## **Installation**

Here are the steps to install and setup the application.

### **Prerequisites**

- NodeJS
- Angular CLI
- XAMPP
- MySQL

### **Setting up the Backend**

The NodeJS and Express.js file named **`app.js`** is located in the **`api`** folder. The exported MySQL database file is located in the **`db`** folder.

1. Install [**XAMPP**](https://www.apachefriends.org/download.html) for our MySQL database.
2. Open XAMPP control panel and start the Apache and MySQL services.
3. Navigate to **`http://localhost/phpmyadmin/`** on your browser.
4. Click on 'Import' and choose the exported database file from the **`db`** folder. Click 'Go' to import the database.
5. Clone the repository and navigate to the **`api`** folder.
6. Run **`npm install`** to install the required dependencies.

### **Setting up the Frontend**

Make sure that you have the Angular CLI installed globally. If not, install it using the following command:
```
npm install -g @angular/cli
```
1. Navigate to the root directory of the project.
2. Run npm install to install all the required dependencies.

### **Running the Application**

To run the application, you need to start both the backend and the frontend servers.

### **Running the Backend**

Navigate to the api folder.
Run the following command to start the server:

```
node app.js
```

You should now have your backend running on http://localhost:3000/.

### **Running the Frontend**

Navigate to the root directory of the project.
Run the following command to start the Angular dev server:

```
ng serve
```

You should now have your frontend running on http://localhost:4200/.
Visit http://localhost:4200/ in your browser. Your application should be up and running.

### **Screenshots**

Below are some more screenshots demonstrating the features of the application.

### **Main Page**


### **Adding a Task**

### **Editing a Task**

### **Deleting a Task**

## **Acknowledgements**

- **[Angular](https://angular.io/)**
- **[Bootstrap](https://getbootstrap.com/)**
- **[Node.js](https://nodejs.org/en/)**
- **[Express.js](https://expressjs.com/)**
- **[MySQL](https://www.mysql.com/)**

Feel free to fork this repository and enhance the application.
