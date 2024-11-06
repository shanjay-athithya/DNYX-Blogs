// app/api/blogs/create/route.js

import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {

  const {
    title,
    description,
    content,
    slug,
    featuredImage,
    images,
    category,
    tags,
  } = await request.json();

  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title,
      description,
      content,
      slug,
      featuredImage,
      images,
      category,
      tags,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { id: docRef.id, message: "Blog created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error creating blog" }, { status: 500 });
  }
}
