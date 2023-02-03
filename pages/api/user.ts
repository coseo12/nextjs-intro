import { NextApiRequest, NextApiResponse } from "next";
import { getLoginSession } from "@/lib/passport/auth";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await getLoginSession(req);
  console.log(user);

  return res.status(200).json({ name: `${req.method}` });
}
