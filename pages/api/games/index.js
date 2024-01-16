/*
 import { parseString } from "xml2js";
const baseApiUrl = "https://boardgamegeek.com/xmlapi2/";

// convertor function from library
const parseXMLToJSON = async (xmlData) => {
  return new Promise((resolve, reject) => {
    parseString(
      xmlData,
      { explicitArray: false, mergeAttrs: true },
      (error, result) => {
        if (error) {
          console.error("Error in parseString:", error);
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

// fetch xml from API and converting xml to json
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
    // we get endpoing first and we join dynamicUrl to the baseApiUrl
    const dynamicUrl = request.query.endpoint;
    const fullUrl = baseApiUrl + dynamicUrl;

    try {
      const data = await fetcher(fullUrl);
      response.json(data);
    } catch (error) {
      response.status(500).json({ error: "Error to get a correct path" });
    }
  } else {
    return response.status(405).json({ error: "error 405" });
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
