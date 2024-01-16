import mongoose from "mongoose";
const { Schema } = mongoose;

const gameSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  yearpublished: { type: String, required: true },
  minPlayers: { type: String, required: true },
  maxPlayers: { type: String, required: true },
  playtime: { type: String, required: true },
  minPlaytime: { type: String, required: true },
  maxPlaytime: { type: String, required: true },
  minAge: { type: String, required: true },
  categories: { type: Array, required: true },
});
const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);
export default Game;
