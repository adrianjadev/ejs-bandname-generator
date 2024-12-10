import express from "express";
import bodyParser from "body-parser";
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {
  
  var adjLength = adj.length;
  var nounLength = noun.length;

  var randomAdj = adj[Math.round((Math.random() * adjLength + 1))];
  var randomNoun = noun[Math.round((Math.random() * nounLength + 1))];

  console.log(`${randomAdj} ${randomNoun}`);
  res.render('index.ejs', {
    randomBandName: (`${randomAdj} ${randomNoun}`),
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const adj = [
  "Agile", "Ambitious", "Ancient", "Angelic", "Arctic", "Atomic", "Bold", "Brave", 
  "Burning", "Candid", "Celestial", "Chaotic", "Clever", "Cosmic", "Creative", 
  "Crimson", "Daring", "Dark", "Dazzling", "Deadly", "Eccentric", "Electric", 
  "Elegant", "Ethereal", "Evil", "Fiery", "Flying", "Frosty", "Golden", "Graceful", 
  "Grand", "Grim", "Heavenly", "Heroic", "Hidden", "Holy", "Hypnotic", "Icy", 
  "Imaginary", "Infinite", "Iron", "Jagged", "Lone", "Luminous", "Magical", 
  "Majestic", "Mighty", "Misty", "Moonlit", "Mythical", "Nocturnal", "Obscure", 
  "Oceanic", "Otherworldly", "Parallel", "Peaceful", "Phantom", "Radiant", 
  "Rebellious", "Red", "Restless", "Revered", "Rising", "Sacred", "Savage", 
  "Scarlet", "Shadowy", "Silent", "Silver", "Skyward", "Sonic", "Spectral", 
  "Spirited", "Stellar", "Stormy", "Striking", "Sublime", "Sunny", "Surreal", 
  "Thunderous", "Timeless", "Tragic", "Unbroken", "Unseen", "Velvet", "Vivid", 
  "Wandering", "Wicked", "Wild", "Winged", "Wistful", "Wise", "Yellow", 
  "Young", "Zealous", "Zigzagging"
];

const noun = [
  "Alliance", "Angels", "Arrows", "Astronauts", "Bandits", "Beacons", 
  "Blades", "Blossoms", "Captains", "Chasers", "Chronicles", "Clouds", 
  "Comets", "Crusaders", "Cyborgs", "Cyclones", "Dawn", "Demons", 
  "Destiny", "Diamonds", "Dragons", "Dreamers", "Echoes", "Embers", 
  "Empires", "Eternals", "Explorers", "Falcons", "Fangs", "Flames", 
  "Flares", "Flowers", "Fugitives", "Giants", "Guardians", "Harmonies", 
  "Hearts", "Heroes", "Horizon", "Hurricanes", "Illusions", "Kings", 
  "Knights", "Legends", "Lions", "Looms", "Lords", "Machines", 
  "Mavericks", "Melodies", "Mirages", "Monarchs", "Monsters", "Mystics", 
  "Nations", "Nomads", "Oceans", "Odyssey", "Oracles", "Outlaws", 
  "Overlords", "Panthers", "Paragons", "Phantoms", "Phoenixes", "Pirates", 
  "Prophets", "Raiders", "Rangers", "Rebels", "Revolution", "Riders", 
  "Rivers", "Rogues", "Sailors", "Scorpions", "Seekers", "Sentinels", 
  "Shadows", "Singers", "Skylines", "Soldiers", "Sparks", "Spirits", 
  "Stars", "Storms", "Strangers", "Survivors", "Symphony", "Titans", 
  "Trailblazers", "Vanguard", "Voyagers", "Warriors", "Waves", "Whispers", 
  "Wolves", "Wonders"
];
