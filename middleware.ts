import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import passport from "passport";

export const config = {
  matcher: ["/api/:path*"],
};

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  passport.initialize();
  console.log("??", req.url);
  // return new Response("Hello, world!");
}
