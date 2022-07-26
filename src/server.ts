import "dotenv/config";
import express from "express";
import cors from "cors";
import fccTestingRoutes from "./routes/fcctesting.js";
import apiRoutes from "./routes/api";
import runner from "./test-runner";

const app = express();

app.use("/public", express.static(`${__dirname}/public`));
app.use(cors()); //For FCC testing purposes only

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

//For FCC testing purposes
fccTestingRoutes(app);

// User routes
apiRoutes(app);

//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404).type("text").send("Not Found");
});

//Start our server and tests!
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
  // process.env.NODE_ENV='test'
  if (process.env.NODE_ENV === "test") {
    console.log("Running Tests...");
    setTimeout(function () {
      try {
        (runner as any).run();
      } catch (error) {
        console.log("Tests are not valid:");
        console.error(error);
      }
    }, 1500);
  }
});

export default app
