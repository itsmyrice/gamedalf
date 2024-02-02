import dbConnect from "@/db/connect";
import Game from "@/db/models/Game";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();

  const session = await getServerSession(request, response, authOptions);

  if (request.method === "GET") {
    const games = await Game.find();
    return response.status(200).json(games);
  }

  if (!session) {
    response.status(401).json({ status: "Not authorized!" });
    return;
  }

  if (request.method === "POST") {
    try {
      const user = session.user;
      const formData = request.body;
      const newGame = {
        ...formData,
        user,
      };
      await Game.create(newGame);
      response.status(201).json({ status: "game created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
