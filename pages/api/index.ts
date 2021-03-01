import { NextApiRequest, NextApiResponse } from "next";
import { phraseResolver } from "../../util/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.body as { query: string };

  const words = query
    .split("$")
    .map((w) => w.split(/[^a-z]/i))
    .flat();
  console.log(words);

  const phrase = await phraseResolver(words);
  res.json(phrase);
};
