// app/api/blogs/[slug]/update/route.js

import { db } from "../../../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {

  const { slug } = params; // Get slug from the URL
  const { title, description, content, featuredImage, images, category, tags } =
    await request.json(); // Expect updated blog data in the request body

  try {
    const blogsCollection = collection(db, "blogs");
    const q = query(blogsCollection, where("slug", "==", slug)); // Query for the document where slug matches
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    // Assuming only one document matches the slug
    const docRef = querySnapshot.docs[0].ref; // Get a reference to the document

    // Update the document with new data
    await updateDoc(docRef, {
      title,
      description,
      content,
      featuredImage,
      images,
      category,
      tags,
    });

    return NextResponse.json(
      { message: "Blog updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error); // Log the error
    return NextResponse.json({ error: "Error updating blog" }, { status: 500 });
  }
}
