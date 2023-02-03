import { NextApiRequest, NextApiResponse } from "next";
import { removeTokenCookie } from "@/lib/passport/auth-cookie";
type ResponseData = {
  name: string;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await removeTokenCookie(res);
  return res.status(200).json({ name: `${req.method}` });
}
