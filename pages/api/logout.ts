import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string;
};

export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.setHeader(
    "Set-Cookie",
    `token=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Path=/; Secure; HttpOnly;`
  );

  return res.status(200).json({ name: `${req.method}` });
}
