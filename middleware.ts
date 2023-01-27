import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

export const config = {
  matcher: ["/api/:path*"],
};

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("??", req.url);
  // return new Response("Hello, world!");
}
