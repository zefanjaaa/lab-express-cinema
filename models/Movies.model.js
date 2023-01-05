const { Schema, model } = require("mongoose");
const { title } = require("process");

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  description: String,
  showtimes: Array,
  image: String,
});
