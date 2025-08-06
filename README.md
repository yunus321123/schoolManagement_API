📚 School Management API (Node.js + MySQL)
This is a simple RESTful API built using Node.js, Express.js, and MySQL that allows you to:

🏫 Add schools with location data (latitude & longitude)

📍 List all schools sorted by proximity to a user's location

🔧 Features
Add new schools (POST /api/schools)

Get all schools sorted by nearest (GET /api/schools?lat=..&lng=..)

Modular structure (controllers, models, routes, config)

MySQL Database integration

 

📦 Technologies Used
Node.js

Express.js

MySQL2 (promise-based)

dotenv for environment management

Postman (for testing)

📁 Folder Structure
lua
Copy code
project-root/
├── controller/
├── models/
├── routes/
├── config/
├── server.js
├── package.json
└── .env
🧪 Example API Usage
POST /api/schools

json
Copy code
{
  "name": "ABC School",
  "address": "Lucknow",
  "latitude": "26.8500",
  "longitude": "80.949997"
}
GET /api/schools?lat=26.85&lng=80.94

Returns schools sorted by distance.
