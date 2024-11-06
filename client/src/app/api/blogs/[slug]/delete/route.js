// app/api/blogs/[slug]/delete/route.js

import { db } from "../../../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { slug } = params; // Get the slug from the request URL

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

    // Attempt to delete the document
    await deleteDoc(docRef);
    console.log("Document deleted successfully:", slug);

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error); // Log the error
    return NextResponse.json({ error: "Error deleting blog" }, { status: 500 });
  }
}
