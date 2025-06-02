import { useEffect, useState } from "react";
import Banner from "@/components/Banner";

const services = [
  { title: "Carta de apresentação", icon: "✉️" },
  { title: "Otimização de plataformas (Gupy, LinkedIn)", icon: "🔧" },
  { title: "Mentoria e diagnóstico de carreira", icon: "🧭" },
  { title: "Currículo otimizado", icon: "📄" },
  { title: "Simulação de entrevista", icon: "🎤" },
  { title: "E muito mais", icon: "✨" },
];

const testimonialsData = [
  {
    name: "Thiago Abranches",
    feedback:
      "Conquistou um cargo de Farmacêutico Clínico em Oncologia no Hospital Israelita Albert Einstein.",
  },

  {
    name: "Gabriela Fernanda Gonçalves",
    feedback:
      "Foi contratada como Técnica Ambiental pela SDPM - Associação Paulista Para o Desenvolvimento da Medicina.",
  },
  {
    name: "Rodrigo Cavalheiro de Moraes",
    feedback:
      "Conquistou um cargo de Analista de Mídias Sociais/Filmmaker Mobile na SP Invisível.",
  },
  {
    name: "Daniel Lopes",
    feedback:
      "Foi efetivado como Engenheiro de Dados na Blueshift Brasil após ter o perfil do linkedin otimizado.",
  },
  {
    name: "Jennifer",
    feedback:
      "Foi mentorada em 2023 e foi contratada no mesmo ano, e seus dois filhos Lucas e Denner conseguiram emprego nos anos seguintes, graças à mentoria.",
  },
];

const stats = [
  { label: "Histórias Transformadas", value: "8.000+" },
  { label: "Mentorias Concluídas", value: "1.200+" },
  { label: "Horas de Mentoria", value: "5.000+" },
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // 1) Efeito que roda o timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // altera a cada 5000ms (5 segundos)

    // limpeza ao desmontar o componente
    return () => clearInterval(interval);
  }, []); // dependência vazia: monta uma vez só

  // 2) Funções de navegação manual (se ainda quiser manter)
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <>
      <section>
        <Banner />
      </section>

      <section className="max-w-3xl mx-auto my-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-500 dark:text-purple-600s mb-4">
          Quem Sou Eu?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
          Com mais de 8.000 histórias transformadas, eu sou especialista em
          ajudar profissionais a otimizar seus currículos, perfis no LinkedIn e
          se prepararem para entrevistas. Meu trabalho é te ajudar a encontrar o
          seu diferencial no mercado, para que recrutadores vejam o{" "}
          <strong className="text-pink-500 dark:text-purple-600s">
            seu verdadeiro valor
          </strong>
          .
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-pink-500 dark:text-purple-600s text-center mb-8">
          O Que Você Vai Conquistar?
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { emoji: "📄", text: "Currículo otimizado e compatível com ATS" },
            {
              emoji: "🔎",
              text: "Perfil LinkedIn irresistível para recrutadores",
            },
            { emoji: "🎤", text: "Simulações de entrevistas e networking" },
            { emoji: "🚀", text: "Preparação total pra vaga dos sonhos" },
          ].map(({ emoji, text }) => (
            <li
              key={text}
              className="bg-pink-50 dark:bg-gray-800 text-black dark:text-white rounded-xl p-6 font-semibold shadow-sm"
            >
              <span className="text-3xl mb-2 block">{emoji}</span>
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* New Services Section */}
      <section className="max-w-5xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-pink-500 dark:text-purple-600s text-center mb-8">
          E o que tenho a oferecer
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title }) => (
            <li
              key={title}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200  rounded-xl p-6 shadow hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-semibold text-lg">{title}</h3>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Carousel */}
      <section className="max-w-3xl mx-auto px-6 my-16 text-center">
        <h2 className="text-3xl font-bold text-pink-500 dark:text-purple-600s mb-8">
          Meus mentorados que já alcançaram o sucesso:
        </h2>
        <div className="relative">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-500 dark:bg-purple-500s  text-white p-2 rounded-full hover:bg-pink-600  hover:dark:bg-purple-300s"
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="px-12">
            <p className="text-lg italic text-gray-700 dark:text-gray-200 mb-4">
              <span className="font-semibold">
                {testimonialsData[currentTestimonial].name}{" "}
              </span>{" "}
              <span className="font-light">
                {" "}
                {testimonialsData[currentTestimonial].feedback}
              </span>
            </p>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-500 dark:bg-purple-500s  text-white p-2 rounded-full hover:bg-pink-600  hover:dark:bg-purple-300s"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </section>
      {/* Panel of Successful Mentorships */}
      <section className="max-w-5xl mx-auto px-6 my-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-pink-50 dark:bg-gray-800 rounded-xl p-6 shadow"
            >
              <span className="text-4xl font-bold text-pink-500 dark:text-purple-400s block mb-2">
                {value}
              </span>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-pink-500 dark:text-purple-400s mb-4">
            Pronto pra ser o próximo?
          </h2>
          <a
            href="https://wa.me/5511976013656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white dark:bg-purple-500s dark:text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 dark:hover:bg-purple-600 transition"
          >
            Fale comigo no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
