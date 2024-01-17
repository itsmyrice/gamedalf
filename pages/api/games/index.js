import dbConnect from "@/db/connect";
import Game from "@/db/models/Game";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const games = await Game.find();
    return response.status(200).json(games);
  } else {
    return response
      .status(400)
      .json({ error: "Bad Request" });
  }
}
