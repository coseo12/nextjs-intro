import { serialize, parse } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const TOKEN_NAME = `textscope-authorization`;

export const MAX_AGE = 60 * 60 * 24 * 1000;

export function setTokenCookie(res: NextApiResponse, token: string) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
  res.setHeader("Set-Cookie", cookie);
}

export function removeTokenCookie(res: NextApiResponse) {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
    sameSite: "lax",
  });
  res.setHeader("Set-Cookie", cookie);
}

export function parseCookies(req: NextApiRequest) {
  if (req.cookies) {
    return req.cookies;
  }
  const cookie = req.headers.cookie;
  return parse(cookie || "");
}

export function getTokenCookie(req: NextApiRequest) {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
}
