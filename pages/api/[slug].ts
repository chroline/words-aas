import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { phraseResolver } from "../../util/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { slug } = req.query as { slug: string };
  try {
    const phrase = await phraseResolver(slug);
    res.json({ phrase });
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};
