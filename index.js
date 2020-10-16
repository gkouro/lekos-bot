var express = require("express");
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NTUxNzkxODg1ODY2NTAwMTM1.XZpaYQ.OQBThiUb_egtpD8P4mmJuXsZhEE";

client.login(token);

client.on("ready", () => {
  var testChannel = client.channels.find(
    channel => channel.id === "537065553638981652"
  );

  console.log("This bot is online!");

  setInterval(() => {
    testChannel.send(".play lekoz");
  }, 14800000);
});

client.on("ready", () => {
  var testChannel = client.channels.find(
    channel => channel.id === "537065553638981652"
  );

  console.log("This bot is online!");

  setInterval(() => {
    testChannel.send("+hqcoins kallitheacity");
  }, 14800000);
});
