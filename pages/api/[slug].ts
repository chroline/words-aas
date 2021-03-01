import { NextApiRequest, NextApiResponse } from "next";
import { phraseResolver } from "./index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query as { slug: string };
  const phrase = await phraseResolver(slug.split(","));
  res.json(phrase);
};
