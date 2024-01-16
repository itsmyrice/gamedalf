import dbConnect from "@/db/connect";
import Games from "@/db/models/Game";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const games = await Games.find();
    response.status(200).json(games);
  } else {
    response.status(400).json({ message: "Something went wrong !!!" });
  }
}
