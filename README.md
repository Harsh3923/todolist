# TaskBoard – Multi-Page To-Do Web Application

## Overview
TaskBoard is a simple multi-page to-do list web application built using **Node.js** and **Express**. The purpose of this application is to demonstrate the basic concepts of client–server communication and the use of a **RESTful API**. The application allows users to view a list of tasks, add new tasks, and delete existing tasks through a web browser. These actions are performed using **GET**, **POST**, and **DELETE** HTTP requests sent from client-side HTML pages to the server. Task data is stored on the server as a JSON object.

This project was developed to meet the requirements of CPS630 Assignment 1 and focuses on understanding how a **Node.js** server handles different types of requests, how data can be managed using JSON, and how multiple web pages can interact with a backend server. The application is intentionally kept simple to clearly demonstrate these core concepts.

In the future, TaskBoard could be extended by adding a database to store tasks permanently instead of using an in-memory JSON object. Additional features such as editing tasks, marking tasks as completed, or improving the user interface could also be added. These extensions would build on the same structure used in this assignment while introducing more advanced functionality.

---

## Technologies Used
- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (Fetch API)

---

## Features
- Express server implemented in `server.js`
- Server-side JSON object used to store task data
- Three distinct HTML pages
- REST API with proper HTTP methods and status codes
- Client-side interaction using JavaScript `fetch()`
- Static files served using Express middleware
- User feedback messages for actions (add/delete)

---

## Application Pages / HTML Routes

### Home Page (`/`) -- GET /
- Introduction to the application
- Navigation to other pages

### Tasks Page (`/tasks`) -- GET /tasks
- Displays the list of tasks (GET request)
- Allows users to add a new task (POST request)
- Allows users to delete an existing task (DELETE request)
- Displays status messages confirming actions

### About Page (`/about`) -- GET /about
- Describes the application
- Lists available REST API endpoints

---

## REST API

### GET – Retrieve All Tasks (GET /api/tasks)

**Response:**
- Status: `200 OK`
- Returns a JSON object containing the list of tasks

---

### POST – Add a Task (POST /api/tasks)
**Request Body (JSON):**
```json
{
  "title": "Task title"
}
```
### Delete a Task (DELETE /api/tasks/:id)
DELETE /api/tasks/:id


### Responses
- `200 OK` – Task successfully deleted
- `201 Created` - Task sucessfully added
- `400 Bad Request` – Invalid task ID
- `404 Not Found` – Task does not exist


### Project Structure
```text
project-root/
├── server.js
├── package.json
└── public/
    ├── index.html
    ├── tasks.html
    ├── about.html
    └── css/
        └── styles.css
```

### How to Run the Application
### Prerequisites
Node.js (version 16 or later recommended)
npm (included with Node.js)

### Steps

- Clone the repository:
git clone <repository-url>

- Navigate to the project directory:
cd project-root

- Install dependencies:
npm install

- Start the server:
npm start

- Open a web browser and visit:
http://localhost:3000

### How to Use
- Open the **Tasks** page.
- Enter a task title and click **Add**.
- The task list updates immediately.
- Click **Delete** to remove a task.
- Status messages appear on the page to confirm each action.

### Notes
Task data is stored in memory using a JSON object on the server.
Restarting the server will reset the task list.

### Reflection
### Brief Overview
This assignment involved developing a simple multi-page to-do web application using Node.js and Express. The project included creating a server that handles GET, POST, and DELETE requests, storing task data in a JSON object, and building HTML pages that allow users to interact with the server. Through this assignment, I gained a better understanding of how client–server communication works and how RESTful APIs can be used to manage data in a web application.

### Challenges/Successes
One of the main challenges was correctly handling POST and DELETE requests and ensuring that the server updated the JSON data as expected. Debugging issues related to request handling and testing the API endpoints helped reinforce my understanding of HTTP methods and status codes. A success of this assignment was getting all required features working correctly and having the client pages successfully communicate with the server. Overall, this project helped strengthen my understanding of Express and REST APIs.

This application is intended for educational purposes.
