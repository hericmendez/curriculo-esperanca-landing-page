import DevList from "@/components/DevList";

const Mentorados = () => {
  return (
    <div className="px-6 py-12  mx-auto">
      <header className="text-center mb-12">
        <h2 className="text-3xl font-bold text-center text-pink-500 dark:text-purple-500 mb-10">
          Banco de Talentos 💼🚀
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"></p>
      </header>

      <DevList />
      <div className="text-center mt-16">
        <a
          href="https://wa.me/5511976013656"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white dark:bg-purple-500 dark:text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 dark:hover:bg-purple-600 transition"
        >
          Fale comigo no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Mentorados;
