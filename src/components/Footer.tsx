const Footer = () => {
  return (
    <footer className="bg-pink-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-evenly items-center gap-8">
        {/* Mensagem */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-pink-600 dark:text-purple-400 mb-2">
            Vamos transformar sua carreira juntos?
          </h3>
          <p className="text-sm">
            Entre em contato e dê o primeiro passo rumo ao seu futuro!
          </p>
        </div>

        {/* Contatos */}
        <div className="text-center">
          <p className="mb-1">
            📞 <a href="https://wa.me/5511976013656" target="_blank" rel="noreferrer" className="underline hover:text-pink-500 dark:hover:text-purple-400">WhatsApp: (11) 97601-3656</a>
          </p>
          <p className="mb-1">
            📧 <a href="mailto:geovanna@curriculoesperanca.com" className="underline hover:text-pink-500 dark:hover:text-purple-400">geovanna@curriculoesperanca.com</a>
          </p>
        </div>


      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Currículo Esperança · Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
