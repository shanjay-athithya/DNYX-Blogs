import { collection, addDoc } from "firebase/firestore";
import { db } from "../../app/firebase"; // Adjust the path to your Firebase setup

// JSON data to be added to Firestore
const blogData = {
  title: "The Future of Technology 2",
  sections: [
    {
      type: "heading",
      level: 1,
      content: "The Future of Technology"
    },
    {
      type: "heading",
      level: 2,
      content: "Introduction"
    },
    {
      type: "paragraph",
      content: "The world of technology is evolving faster than ever before. From artificial intelligence to quantum computing, new innovations are reshaping our world in unprecedented ways."
    },
    {
      type: "heading",
      level: 2,
      content: "The Rise of AI"
    },
    {
      type: "paragraph",
      content: "Artificial Intelligence is transforming industries across the board. Here are some key areas where AI is making a significant impact:"
    },
    {
      type: "list",
      items: [
        "Healthcare",
        "Finance",
        "Transportation",
        "Education"
      ]
    },
    {
      type: "code",
      language: "python",
      content: "# A simple Python example to demonstrate AI's potential\ndef ai_greeting(name):\n    return f\"Hello {name}! Welcome to the future of AI.\"\n\nprint(ai_greeting(\"World\"))"
    }
  ],
  publishedAt: new Date() // Adding a timestamp for ordering
};

// Function to add blog post to Firestore
export const addBlogPost = async () => {
  try {
    const blogCollection = collection(db, "blogs"); // Reference to the 'blogs' collection
    await addDoc(blogCollection, blogData); // Add the blog data as a new document
    console.log("Blog post added successfully!");
  } catch (error) {
    console.error("Error adding blog post: ", error);
  }
};

// Call the function to add the blog post
//addBlogPost();
