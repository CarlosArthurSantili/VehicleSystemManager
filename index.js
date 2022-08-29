import express from "express";
import bodyParser from "body-parser";

import gasBombRoutes from "./routes/gasBomb.js";
import staffRoutes from "./routes/staff.js";
import vehicleRoutes from "./routes/vehicle.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/gasBomb", gasBombRoutes);
app.use("/staff", staffRoutes);
app.use("/vehicle", vehicleRoutes);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
