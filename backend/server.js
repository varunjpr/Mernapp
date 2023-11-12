// import express from "express";
// import dotenv from "dotenv";
// dotenv.config();
// const port = process.env.PORT || 5000;
// const app = express();
// app.get("/", (req, res) => res.send("server is ready"));
// app.listen(port, () => console.log(`server started on port ${port}`));
const express = require("express");
const format = require("date-format");
const app = express();

const port = 4000 || process.env.PORT;

app.get("/api/v1/instagram", (req, res) => {
  const instadetails = {
    name: "varun",
    followers: "189",
    following: "1187",
    date: format.asString("dd[MM] hh:mm:ss", new Date()),
  };
  res.status(200).json(instadetails);
});

app.get("/api/v1/facebook", (req, res) => {
  const instadetails = {
    name: "varun07",
    followers: "1500",
    following: "3004",
    date: Date.now(),
  };
  res.status(200).json(instadetails);
});

app.get("/api/v1/linkedin", (req, res) => {
  const instadetails = {
    name: "varun m",
    followers: "37",
    following: "88",
    date: new Date(),
  };
  res.status(200).json(instadetails);
});
app.get("/api/v1/:id", (req, res) => {
  res.status(200).json("userRequested" + " " + req.params.id);
});
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
