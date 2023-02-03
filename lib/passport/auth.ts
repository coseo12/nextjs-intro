import Iron from "@hapi/iron";
import { NextApiRequest, NextApiResponse } from "next";
import { MAX_AGE, setTokenCookie, getTokenCookie } from "./auth-cookie";
import { LoginInfo } from "./local";

type SessionInfo = LoginInfo & {
  createAt: number;
  maxAge: number;
};

const TOKEN_SECRET = process.env.TOKEN_SECRET as string;

export async function setLoginSession(
  res: NextApiResponse,
  loginInfo: LoginInfo
) {
  const createAt = Date.now();
  const obj = { ...loginInfo, createAt, maxAge: MAX_AGE };
  const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults);

  setTokenCookie(res, token);
}

export async function getLoginSession(req: NextApiRequest) {
  const token = getTokenCookie(req);
  if (!token) {
    return;
  }

  const session: SessionInfo = await Iron.unseal(
    token,
    TOKEN_SECRET,
    Iron.defaults
  );
  const expiresAt = session.createAt + session.maxAge;

  if (Date.now() > expiresAt) {
    throw new Error("Session expired");
  }

  return session;
}
