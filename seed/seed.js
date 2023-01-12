const mongoose = require("mongoose");

const MovieModel = require("../models/Movie.model");

const CelebrityModel = require("../models/Celebrity.model");

const MONGODB_URI = "mongodb://127.0.0.1/lab-movies-celebrities";

const movies = [
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    title: "The Shining",
    genre: "Horror",
    plot: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
  },
  {
    title: "12 Years a Slave",
    genre: "Drama",
    plot: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
  },
  {
    title: "Harry Potter",
    genre: "Fantasy",
    plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
  },
  {
    title: "Into the Wild",
    genre: "Adventure",
    plot: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
  },
  {
    title: "Fight club",
    genre: "Drama",
    plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  },
  {
    title: "Se7en",
    genre: "Mystery",
    plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
  },
  {
    title: "Black Adam",
    genre: "Action",
    plot: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian godsan d imprisoned just as quickly Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
  },
  {
    title: "Home Alone",
    genre: "Comedy",
    plot: "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas eve",
  },
];

const celebrities = [
  {
    name: "Heidi Klum",
    occupation: "Model",
    catchPhrase: "Auf Wiedersehen!",
  },
  {
    name: "Paris Hilton",
    occupation: "Actress",
    catchPhrase: "That's Hot",
  },
  {
    name: "Ariana Grande",
    occupation: "Singer",
    catchPhrase: "Say It With Emojis",
  },
  {
    name: "Matthew McConaughey",
    occupation: "Actor",
    catchPhrase: "Alright, Alright, Alright",
  },
  {
    name: "Charlie Sheen",
    occupation: "Actor",
    catchPhrase: "Winning",
  },
  {
    name: "Julia Roberts",
    occupation: "Actress",
    catchPhrase: "Big Mistake! Huge!",
  },
  {
    name: " Arnold Schwarzenegger",
    occupation: "Actor",
    catchPhrase: "I’ll be back",
  },
  {
    name: "Sean Connery ",
    occupation: "Actor",
    catchPhrase: "Bond, James Bond",
  },
  {
    name: "Tom Cruise’s",
    occupation: "Actor",
    catchPhrase: "Show me the money!",
  },
];

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connection established!");
    return CelebrityModel.create(celebrities);
  })
  .then(() => {
    console.log("Movies and Ceelebrities updated");
    return MovieModel.create(movies);
  })
  .then(() => {
    console.log("Connection closed!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error while seeding db: ", err);
  });