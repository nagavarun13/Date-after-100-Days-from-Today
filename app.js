const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const todayDate = new Date();
  const res = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    ),
    100
  );
  response.send(`${res.getDate()}/${res.getMonth() + 1}/${res.getFullYear()}`);
});

module.exports = app;
