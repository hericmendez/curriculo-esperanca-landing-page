const Sobre = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-pink-500 dark:text-purple-400 mb-4">
          Sobre Mim
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Minha missão é transformar carreiras com estratégias personalizadas, empatia e resultados reais.
        </p>
      </header>

      <section className="bg-pink-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-pink-500 dark:text-purple-300 mb-4 text-center">
          🌟 Currículo Esperança
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
          <p>
            O <strong>Currículo Esperança</strong> nasceu da necessidade de tornar o mercado de trabalho mais acessível. 
            Vi muitos profissionais talentosos sendo ignorados pelos recrutadores simplesmente porque não sabiam 
            como se apresentar de forma estratégica.
          </p>
          <p>
            Meu objetivo sempre foi claro: oferecer <strong>currículos otimizados e acessíveis</strong>, ajudando 
            pessoas a saírem da invisibilidade profissional. Desde o início do projeto, já impactei mais de 
            <strong> 10.000 candidatos</strong>, que conseguiram entrevistas, recolocações e até mesmo promoções com 
            um currículo bem estruturado.
          </p>
          <p>
            Além disso, mantenho promoções e ofertas especiais, garantindo que mais pessoas tenham acesso a esse 
            suporte essencial. Se você sente que seu currículo não está trazendo resultados, 
            <strong> podemos aumentar essa chance juntos</strong>.
          </p>

          <div className="text-center mt-6">
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
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl font-bold text-pink-500 dark:text-purple-400 mb-4">Vamos transformar sua história?</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Se você sente que merece mais reconhecimento, eu posso te ajudar a conquistar isso.
          <br />Bora conversar?
        </p>
      </section>
    </div>
  );
};

export default Sobre;
