# Todo List Application (MERN)

## Overview

This is a **MERN stack** based **Todo List Application** that allows users to add, edit, and delete their tasks. The project is built using **JavaScript, React, MongoDB, Express, Node.js, and Redux Toolkit**.

## Features

- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as completed
- Responsive UI

## Technologies Used

- **Frontend:** React.js, Redux Toolkit
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** Redux Toolkit
- **Styling:** CSS

## Installation & Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Git

### Steps to Run the Project

#### 1. Clone the Repository

```sh
git clone https://github.com/Githubuser1/Todo_using_mern.git
cd Todo_using_mern
```

#### 2. Install Dependencies

##### Install backend dependencies:

```sh
cd backend
npm install
```

##### Install frontend dependencies:

```sh
cd ../frontend
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### 4. Start the Application

##### Start Backend Server:

```sh
cd backend
npm start
```

##### Start Frontend Server:

```sh
cd frontend
npm start
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Folder Structure

```
Todo_using_mern/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── App.js
│   │   ├── index.js
```

## API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /todos      | Get all todos     |
| POST   | /todos      | Create a new todo |
| PUT    | /todos/:id  | Update a todo     |
| DELETE | /todos/:id  | Delete a todo     |

## Screenshots

Here are some screenshots of the application:

![Todo List UI](./frontend/Mern_auth/src/assets/Screenshot%20(3).png)


## Live Demo
Check out the live demo: [Todo List App](https://todo-mern-kappa-dusky.vercel.app/)

## Future Enhancements

- Add authentication (Login/Signup)
- Add due date & priority feature
- Add dark/light mode toggle
- Implement notifications for pending tasks

## Contributing

Contributions are welcome! If you find any issues, feel free to raise an issue or submit a pull request.

### How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Author

Siddhant Mishra

https://www.linkedin.com/in/siddhant-mishra-developer/

## Badges

![GitHub issues](https://img.shields.io/github/issues/Githubuser1/Todo_using_mern)
![GitHub forks](https://img.shields.io/github/forks/Githubuser1/Todo_using_mern)
![GitHub stars](https://img.shields.io/github/stars/Githubuser1/Todo_using_mern)

