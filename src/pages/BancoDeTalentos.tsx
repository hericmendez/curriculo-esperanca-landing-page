import DevList from "@/components/DevList";

const Mentorados = () => {
  return (
    <div
      className="px-6 pb-12 flex
    flex-col justify-center items-center mx-auto"
    >
      <h1 className="text-4xl mt-5 font-bold text-pink-500 dark:text-purple-600 mb-6">
        Banco de Talentos 💼🚀
      </h1>
      <DevList />
      <div className="text-center mt-16">
        <a
          href="https://wa.me/5511976013656"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white dark:bg-purple-500s dark:text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 dark:hover:bg-purple-600 transition"
        >
          Fale comigo no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Mentorados;
