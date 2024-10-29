# Node.js Service Template

A basic Node.js RESTful API service built using **Express**.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Postman](https://www.postman.com/) (for testing the API)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nodejs-service-example.git
   cd nodejs-service-example
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Server

1. **Setup environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   ```

2. **Start the server**:
   ```bash
   node server.js
   ```

   The server will start at `http://localhost:3000`.

## Environment Variables

| Variable Name | Description          | Default Value |
|---------------|----------------------|---------------|
| `PORT`        | The port the server runs on | 3000          |

## API Endpoints

| Method | Endpoint          | Description                      |
|--------|-------------------|----------------------------------|
| GET    | `/api/users`      | Get a list of all users          |
| GET    | `/api/users/:id`  | Get a user by ID                 |
| POST   | `/api/users`      | Create a new user                |
| PUT    | `/api/users/:id`  | Update an existing user by ID    |
| DELETE | `/api/users/:id`  | Delete a user by ID              |

### Example Request and Response

#### GET `/api/users`

- **Request**:
  ```http
  GET /api/users HTTP/1.1
  Host: localhost:3000
  ```

- **Response**:
  ```json
  [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
  ]
  ```

#### POST `/api/users`

- **Request**:
  ```http
  POST /api/users HTTP/1.1
  Host: localhost:3000
  Content-Type: application/json

  {
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```

- **Response**:
  ```json
  {
    "id": 3,
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```

## Testing with Postman

To test this API with **Postman**:

1. **Start the server** using the command:
   ```bash
   node server.js
   ```

2. Open **Postman** and create a new request for each endpoint:
   - **GET** `/api/users` to fetch all users.
   - **GET** `/api/users/:id` to fetch a specific user by ID.
   - **POST** `/api/users` to create a new user (provide JSON body).
   - **PUT** `/api/users/:id` to update a user (provide JSON body).
   - **DELETE** `/api/users/:id` to delete a user by ID.

3. Check the responses in Postman to ensure your API is working as expected.

## Project Structure

```
nodejs-service-example/
│
├── .env                  # Environment configuration
├── package.json          # Project metadata and dependencies
├── server.js             # Main server file
└── routes/
    └── api.js            # API route definitions
```

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to open a pull request or submit an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides an overview of the project, installation steps, and detailed information on running the project and using the API. Feel free to customize it to better fit your project’s needs!
