import mongoose from "mongoose";
const { Schema } = mongoose;

const gameSchema = new Schema({
name:{type: String},
 price:{type: Number},

});
const Games = mongoose.models.Games || mongoose.model("Games", gameSchema);
export default Games;
