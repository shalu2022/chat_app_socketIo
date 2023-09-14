const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const connectDb = require("./db/db");
const routes = require("./routes/userRoutes");
const {errorHandler, notFound} = require("./middleware/errorHandler")

app.use(cors());
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;
app.use("/api/v1", routes);

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });
connectDb(process.env.MONGO_URI);

// io.on("connection", (socket) => {
//   console.log();

//   socket.on("join_user", (data) => {
//     socket.join(data);
//     console.log(`"user is connected:", ${socket.id}, User Name: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     console.log(data.room);
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log(`User is disconnected: ${socket.id}`);
//   });
// });

app.use(notFound)
app.use(errorHandler)

// app.get('/', (req, res) => {
//   res.send("server is on ");
// });

app.listen(PORT, () => {
  console.log(`server is connected at, ${PORT}`);
});
