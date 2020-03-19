import { NextApiRequest, NextApiResponse } from "next";
import ky from "ky-universal";

function random(contents: string) {
  contents = contents.replace(/[\r]/g, "");
  const words = contents.split("\n");
  words.pop();
  const i = Math.floor(Math.random() * words.length);
  return words[i];
}

const contentsRetriever = async filePath => {
  let contents;
  try {
    contents = await ky.get(filePath).text();
  } catch (e) {
    contents = null;
  }
  return random(contents) + " ";
};

const phraseGenerator = async (words, host) => {
  let phrase = "";
  for (const word of words) {
    if (word !== "a" && word !== "the") {
      const filePath = "http://" + host + "/db/" + word + "s.txt";
      phrase += await contentsRetriever(filePath);
    } else if (word == "the") {
      phrase += "the ";
    }
  }
  return phrase;
};

const vowelTester = phrase => new RegExp(/[aeiou]/g).test(phrase[0]);

export const phraseResolver = async (slug, host) => {
  const words = slug.split(",");
  let phrase = await phraseGenerator(words, host);
  if (words[0] == "a") phrase = (vowelTester(phrase) ? "an" : "a") + " " + phrase;
  phrase = phrase.slice(0, phrase.length - 1);
  return { phrase };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = (typeof req.body === "string" ? JSON.stringify(req.body) : req.body) as { query: string };

  if (query) {
    const host = req.headers.host;
    const phrase = await phraseResolver(query.toString(), host);
    res.json(phrase);
  } else res.status(400).json({ error: "missing query" });
};
