import dbConnect from "@/db/connect";
import Game from "@/db/models/Game";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const game = await Game.findById(id);
    
    if (!game) {
      return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(game);
  } else {
    response.status(400).json({ message: "Something went wrong !!!" });
  }
}
