import { NextApiRequest, NextApiResponse } from 'next'
import {phraseResolver} from "./index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {slug} = (req.query) as { slug: string };
  const host = req.headers.host;
  const phrase = await phraseResolver(slug,host);
  res.json(phrase);
}
