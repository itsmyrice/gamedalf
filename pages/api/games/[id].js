import dbConnect from "@/db/connect";
import Game from "@/db/models/Game";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  const session = await getServerSession(request, response, authOptions);

  if (request.method === "GET") {
    const game = await Game.findById(id);
    if (!game) {
      return response.status(404).json({ message: "Game not found" });
    }
    return response.status(200).json(game);
  }

  if (!session) {
    response.status(401).json({ status: "Not authorized!" });
    return;
  }

  if (request.method === "DELETE") {
    const updatedGame = request.body;
    await Game.findByIdAndDelete(id, updatedGame);
    return response
      .status(200)
      .json({ status: "Game is successfully deleted." });
  }

  if (request.method === "PATCH") {
    const updatedGame = request.body;
    await Game.findByIdAndUpdate(id, updatedGame);
    return response.status(200).json({ status: "Game successfully updated." });
  }
}
