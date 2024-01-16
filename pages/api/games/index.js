/*
 import { parseString } from "xml2js";
const baseApiUrl = "https://boardgamegeek.com/xmlapi2/";

const parseXMLToJSON = async (xmlData) => {
  return new Promise((resolve, reject) => {
    parseString(
      xmlData,
      { explicitArray: false, mergeAttrs: true },
      (err, result) => {
        if (err) {
          console.error("Error in parseString:", err);
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const fetcher = async (url) => {
  const response = await fetch(url);
  const xmlData = await response.text();
  try {
    const jsonData = await parseXMLToJSON(xmlData);
    return jsonData.items.item;
  } catch (error) {
    console.error("Error parsing XML:", error);
    throw error;
  }
};

export default async function handler(request, response) {
  if (request.method === "GET") {
    const dynamicUrl = request.query.endpoint;

    const fullUrl = baseApiUrl + dynamicUrl;

    try {
      const data = await fetcher(fullUrl);
      response.json(data);
    } catch (error) {
      response.status(500).json({ error: "Error to get a correct path" });
    }
  }
}
*/

import dbConnect from "@/db/connect";
import Games from "@/db/models/Games";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const games = await Games.find();
    response.status(200).json(games);
  }else{
    response.status(400).json({message:"Something went wrong !!!"})
  }
}
