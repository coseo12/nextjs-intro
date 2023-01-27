import { NextApiRequest, NextApiResponse } from "next";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.cookies);

  return res.status(200).json({ name: `${req.method}` });
}
