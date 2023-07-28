# **Simple To-Do List Application**

This application is built with Angular and Bootstrap for the frontend, and NodeJS, Express.js, and MySQL for the backend. This is also deployed to firebase.

## **Live Demo**

For live demo of the application, please visit: [**https://darrels-todolist.web.app/**](https://darrels-todolist.web.app/)

## **Technologies Used**

- Frontend: [**Angular**](https://angular.io/) and [**Bootstrap**](https://getbootstrap.com/)
- Backend: [**Node.js**](https://nodejs.org/en/), [**Express.js**](https://expressjs.com/), and [**MySQL**](https://www.mysql.com/)
- Hosting: [**Firebase**](https://www.firebase.com/)

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## **Table of Contents**

1. **[Features](#features)**
2. **[Installation](#installation)**
3. **[Running the Application](#running-the-application)**
4. **[Screenshots](#screenshots)**

## **Features**

- Create a task
- View tasks
- Edit a task
- Delete a task


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
2. Run **`npm install`** to install all the required dependencies.

## **Running the Application**

To run the application, you need to start both the backend and the frontend servers.

### **Running the Backend**

Navigate to the **`api`** folder.
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

## **Screenshots**

Below are some more screenshots demonstrating the features of the application.

### **Main Page**
![main](https://github.com/DarrelMendoza/to-do-list/assets/88825804/c5364d87-c2d6-4c41-8268-bc8db461a864)

### **Adding a Task**
![CPT2307281847-1920x906](https://github.com/DarrelMendoza/to-do-list/assets/88825804/e12b7008-b9b9-4d82-a3df-6a35ac7d5440)

### **Editing a Task**
![CPT2307281849-1920x906](https://github.com/DarrelMendoza/to-do-list/assets/88825804/09f42ed4-68d4-4355-9642-34d6eae891ad)

### **Deleting a Task**
![CPT2307281845-1920x906](https://github.com/DarrelMendoza/to-do-list/assets/88825804/bae250ed-4554-4a78-9fb4-47a2c32c1d2d)

## **Acknowledgements**

- **[Angular](https://angular.io/)**
- **[Bootstrap](https://getbootstrap.com/)**
- **[Node.js](https://nodejs.org/en/)**
- **[Express.js](https://expressjs.com/)**
- **[MySQL](https://www.mysql.com/)**
- **[Firebase](https://www.firebase.com/)**

Feel free to fork this repository and enhance the application.
