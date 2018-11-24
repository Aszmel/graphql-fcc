const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mongo db
mongoose.connect("mongodb://arek:sentencja1@ds115094.mlab.com:15094/gql-books");
mongoose.connection.once("open", () => {
  console.log("connected to mongo db");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for request on port 4000");
});

// app start in app directory by: nodemon app
