// app/api/blogs/all/route.js

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogsCollection = collection(db, "blogs");
    const blogSnapshot = await getDocs(blogsCollection);
    const blogs = blogSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }
}
