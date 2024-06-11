import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { secret } = req.query;

  if (secret === process.env.SECRET_KEY) {
    res.status(200).json({ status: "OK", secret: true, source: process.env.VIDEO_PATH });
  } else {
    res.status(403).json({ status: "NO" });
  }
};
