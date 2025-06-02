import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const Blog = () => {
  const [posts, setPosts] = useState([] as any[]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const getBlogPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://localhost:3000/api/posts?owner=hericmendez"
      );
      console.log("response ==> ", response?.data?.posts);
      setPosts(response?.data?.posts);
    } catch (error) {
      console.log("error ==> ", error);
      setError("Erro ao carregar os posts do blog.");
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError("Erro desconhecido ao carregar os posts do blog.");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 flex flex-col justify-center items-center">
      {" "}
      <h1 className="text-4xl font-bold text-center text-pink-600 dark:text-purple-400 mb-12">
        Blog: Carreira & Tecnologia <br />
      </h1>
      {error && (
        <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-6 max-w-xl min-w-[300px] text-center">
          <strong className="font-bold">Erro:</strong> {error}
        </div>
      )}
      {loading && posts.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <ClipLoader size={50} color="#ec4899" />
        </div>
      )}
      {!loading ? (
        <>
          {" "}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts &&
              posts?.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
                >
                  <div className="p-6">
                    <span className="text-sm uppercase font-medium text-pink-500 dark:text-purple-300">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-semibold mt-2 text-gray-800 dark:text-gray-100">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {post.excerpt}
                    </p>
                    <button className="mt-4 text-pink-600 dark:text-purple-300 font-semibold hover:underline">
                      Ler mais →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-bold text-center text-pink-600 dark:text-purple-400 mb-12">
          Carregando... <br />
        </h1>
      )}
    </main>
  );
};

export default Blog;
