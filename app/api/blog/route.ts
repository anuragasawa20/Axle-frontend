import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";



export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}



export async function POST(request: Request) {
  
  const body = await request.json();
  const { title, description, image, slug,tags,summary } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const blog = await prisma.blog.create({
    data: {
      slug,
      title,
      summary,
      description,
      image,
      tags
    },
  });

  return NextResponse.json(blog);
}


