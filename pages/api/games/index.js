import dbConnect from "@/db/connect";
import Game from "@/db/models/Game";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const games = await Game.find();
    return response.status(200).json(games);
  }
  if (request.method === "POST") {

    try {
      const formData = request.body;
      console.log(formData);

      await Game.create(formData);
      response.status(201).json({ status: "game created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
