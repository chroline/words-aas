import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { phraseResolver } from "../../util/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { query } = req.body as { query: string };
  try {
    const phrase = await phraseResolver(query);
    res.json({ phrase });
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};
