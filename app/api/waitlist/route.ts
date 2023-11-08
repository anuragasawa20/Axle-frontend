import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";


export async function POST(
  request: Request, 
) {

  const body = await request.json();
  const { 
    name,
    email
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const waitlist = await prisma.waitlist.create({
    data: {
      name,
      email,
    }
  });

  return NextResponse.json(waitlist);
}
