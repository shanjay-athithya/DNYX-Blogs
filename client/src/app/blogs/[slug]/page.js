import { fetchBlogs } from "../../../components/blog/fetchBlogs";
import Image from 'next/image';
import RenderBlog from "../../../components/blog/RenderBlog";

export default async function BlogPage({ params }) {
    // Fetch all blogs
    const blogs = await fetchBlogs();
    // Find the specific blog based on the slug from params
    const blog = blogs.find((blog) => blog.id === params.slug);

    // Check if the blog exists
    if (!blog) {
        return (
            <div className="text-center mt-10">
                <h1 className="text-2xl font-bold">Blog not found</h1>
                <p>We couldn't find the blog you were looking for.</p>
            </div>
        );
    }

    // Convert `publishedAt` to a serializable date format
    const blogWithSerializablePublishedAt = {
        ...blog,
        publishedAt: blog.publishedAt ? new Date(blog.publishedAt.seconds * 1000).toISOString() : null,
    };

    return (
        <article>
            <div className="mb-8 text-center relative w-full h-[60vh] bg-dark">
                <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6 border-2 border-black rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 hover:scale-[97%] transition-all transform translate duration-300 hover:cursor-pointer">
                        {blogWithSerializablePublishedAt.title}
                    </h1>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
                <Image
                    src={blogWithSerializablePublishedAt?.image || '/path/to/default-image.jpg'}
                    alt={blogWithSerializablePublishedAt.title}
                    className="rounded-3xl p-2 h-full w-full object-cover border-2 border-black dark:border-white transition transform duration-500"
                />
            </div>
            <div className="grid mt-8 mb-5 px-5">
                <RenderBlog blog={blogWithSerializablePublishedAt} />
            </div>
        </article>
    );
}
