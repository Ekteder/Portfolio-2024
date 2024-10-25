import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }
    const post = await res.json();
    console.log(await res.json()); // Add this line to log the fetched post data

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true, // Return a 404 page if the post is not found
    };
  }
};

interface PostProps {
  post: {
    title: string;
    imageUrl: string;
    author: string;
    createdAt: string;
    content: string;
  };
}

export default function Post({ post }: PostProps) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-sm text-gray-500 mb-4">
          By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-400">{post.content}</p>
      </div>
    </div>
  );
}
