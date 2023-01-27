import { NextApiRequest, NextApiResponse } from "next";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const token = "asdfsdfadsfefefSDFADFEsasdf";
  const expires = new Date(
    Date.now() + 60 * 60 * 24 * 1000 * 1 //3일
  ).toUTCString();
  const httpOnly = `HttpOnly`;

  res.setHeader(
    "Set-Cookie",
    `token=${token}; Expires=${expires}; Path=/; Secure; ${httpOnly}`
  );

  return res.status(200).json({ name: `${req.method}` });
}
