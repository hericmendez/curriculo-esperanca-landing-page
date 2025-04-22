const mockPosts = [
  {
    id: 1,
    title: "Como destacar seu currículo em meio a tantos?",
    category: "Carreira",
    image: "https://placehold.co/600x400/orange/white",
    excerpt:
      "Dicas práticas para transformar seu currículo em um imã de oportunidades.",
  },
  {
    id: 2,
    title: "As habilidades mais valorizadas por recrutadores em 2025",
    category: "Tecnologia",
    image: "https://placehold.co/600x400/blue/white",
    excerpt:
      "Descubra as tech skills e soft skills que estão em alta no mercado atual.",
  },
  {
    id: 3,
    title: "Entrevistas de emprego: o que realmente importa?",
    category: "Carreira",
    image: "https://placehold.co/600x400/cyan/white",
    excerpt:
      "Saiba o que os recrutadores esperam de você em uma entrevista e como se preparar.",
  },
  {
    id: 4,
    title: "LinkedIn em 2025: o que mudou e como aproveitar?",
    category: "Carreira",
    image: "https://placehold.co/600x400/pink/white",
    excerpt:
      "As melhores práticas para bombar seu LinkedIn e ser notado por recrutadores.",
  },
];

const Blog = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-pink-600 dark:text-purple-400 mb-12">
        Blog: Carreira & Tecnologia <br /> 
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
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
    </main>
  );
};

export default Blog;
