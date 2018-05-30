// Dependencies
// ============================================================
let express = require("express");
let bodyParser = require("body-parser");
// let exphbs = require("express-handlebars");

// Express
// ============================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Handlebars
// ============================================================
// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
// app.set("view engine", "handlebars");

// Routes
// ============================================================
let routes = require("./controllers/controller.js");
app.use(routes);

// Require models for syncing
let db = require("./models");

// Sync with Sequelize and start the server
// ============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Server listening on http://localhost:" + PORT);
    })
})
