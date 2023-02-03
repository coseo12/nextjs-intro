import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import { localStrategy, LoginInfo } from "@/lib/passport/local";
import { setLoginSession } from "@/lib/passport/auth";

function tmp(res: NextApiResponse) {
  const token = "asdfsdfadsfefefSDFADFEsasdf";
  const expires = new Date(
    Date.now() + 60 * 60 * 24 * 1000 * 1 //3일
  ).toUTCString();
  const httpOnly = `HttpOnly`;

  res.setHeader(
    "Set-Cookie",
    `token=${token}; Expires=${expires}; Path=/; Secure; ${httpOnly}`
  );
}
const authenticate = (
  method: "local",
  req: NextApiRequest,
  res: NextApiResponse
): Promise<LoginInfo> =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    })(req, res);
  });

passport.use(localStrategy);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  const user = await authenticate("local", req, res);

  await setLoginSession(res, { ...user });

  return res.status(200).json({ name: `${req.method}` });
}
