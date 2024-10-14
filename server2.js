import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Bob Smith" },
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next(); // Call the next middleware or route handler
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

// Route handler for POST /api/users
const createUsersHandler = (req, res) => {
  const body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      const user = JSON.parse(Buffer.concat(body).toString());
      users.push(user);
      res.statusCode = 201;
      res.write(JSON.stringify(user));
      res.end();
    });
};
//Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route Not found" }));
  res.end();
};

const server = createServer((req, res) => {
  // Apply logger middleware
  logger(req, res, () => {
    // Apply JSON middleware
    jsonMiddleware(req, res, () => {
      // Route handler for GET /api/users
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      }
      // Route handler for GET /api/users/:id
      else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUsersHandler(req, res);
      }
      // Not found handler
      else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
