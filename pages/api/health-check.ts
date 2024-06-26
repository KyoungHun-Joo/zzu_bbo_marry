import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { secret } = req.query;

  //if (secret === process.env.SECRET_KEY) {
  if (secret === "secret") {
    res.status(200).json({ status: "OK", secret: true });
  } else {
    res.status(200).json({ status: "OK" });
  }
};
