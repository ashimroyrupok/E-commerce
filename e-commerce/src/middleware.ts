/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

const authRoutes = ["/auth"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(pathname, "pathname");

  //pathname , acessToken

  //pathname = admin-dashboard -> accessToken = admin -> admin-dashboard &&
  //pathname = admin-dashboard -> accessToken = user -> home page

  const accessToken = (await cookies()).get("refreshToken")?.value;
  console.log(accessToken,"accessToken")

  if (!accessToken) {
    //Protecting hybrid routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      //   return NextResponse.redirect(new URL("/login", request.url));
      return NextResponse.redirect(
        new URL(
          pathname ? `/auth?redirect=${pathname}` : "/auth",
          request.url
        )
      );
    }
  }

  //Role based authorization

  let decodedToken = null;

  decodedToken = verifyToken(accessToken) as any;

  console.log(decodedToken, "decodedToken");

  const role = decodedToken?.role;

  console.log(role, "role");
  console.log(pathname, "pathname");

  // /admin-dashboard - ok
  // /admin-dashboard/car-management - ok
  if (role === "admin" && pathname.match(/^\/admin-dashboard/)) {
    return NextResponse.next();
  }


  // /dashboard , /dashboard/my-requested-rides , /profile
  if (role === "user" && pathname.match(/^\/dashboard/)) {
    return NextResponse.next();
  }
  if (role === "user" && pathname === "/profile") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));

  //decodedToken.role
}

export const config = {
  matcher: [
    "/auth",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
 
  ],
};
