// app/api/blogs/[slug]/route.js

import { db } from "../../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params; // The slug comes from the URL
  console.log("Slug parameter received:", slug); // Log the slug

  try {
    const blogsCollection = collection(db, "blogs");
    const q = query(blogsCollection, where("slug", "==", slug)); // Query for documents where the slug matches
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No document found for slug:", slug); // Log if document not found
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Assuming only one document matches the slug
    const blogDoc = querySnapshot.docs[0];
    return NextResponse.json(
      { id: blogDoc.id, ...blogDoc.data() },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blog:", error); // Log the error for more context
    return NextResponse.json(
      { error: error.message || "Error fetching blog" },
      { status: 500 }
    );
  }
}
