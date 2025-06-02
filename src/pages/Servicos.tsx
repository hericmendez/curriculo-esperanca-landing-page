
import { FaFileAlt, FaLinkedin, FaComments, FaClipboardCheck, FaUserTie, FaEllipsisH } from "react-icons/fa";

const servicos = [
  {
    icon: <FaFileAlt className="text-4xl text-pink-500 dark:text-purple-400" />,
    title: "Carta de Apresentação",
    desc: "Criação de carta personalizada para destacar sua candidatura.",
    price: "R$ 200",
  },
  {
    icon: <FaLinkedin className="text-4xl text-pink-500 dark:text-purple-400" />,
    title: "Otimização de Plataformas",
    desc: "Gupy, LinkedIn e outras plataformas ajustadas ao seu perfil.",
    price: "R$ 300",
  },
  {
    icon: <FaComments className="text-4xl text-pink-500 dark:text-purple-400" />,
    title: "Mentoria e Diagnóstico",
    desc: "Análise de carreira com direcionamento personalizado.",
    price: "R$ 400",
  },
  {
    icon: <FaClipboardCheck className="text-4xl text-pink-500 dark:text-purple-400" />,
    title: "Currículo Otimizado",
    desc: "Criação ou reformulação com foco em ATS.",
    price: "R$ 250",
  },
  {
    icon: <FaUserTie className="text-4xl text-pink-500 dark:text-purple-400" />,
    title: "Simulação de Entrevista",
    desc: "Treinamento com feedback estratégico e orientação.",
    price: "R$ 350",
  },
  {
    icon: <FaEllipsisH className="text-4xl text-pink-500 dark:text-purple-400" />,
    title: "E Muito Mais!",
    desc: "Serviços adicionais sob medida pra você.",
    price: "Sob consulta",
  },
];

export default function Servicos() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-pink-500 dark:text-purple-400 mb-4">
          Descubra Nossos Serviços
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Cada serviço foi pensado para te ajudar a se destacar com
          autenticidade e confiança no mercado de trabalho.
        </p>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicos.map((servico) => (
          <div
            key={servico.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 flex justify-center">{servico.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {servico.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {servico.desc}
            </p>
            <span className="inline-block bg-pink-100 text-pink-600 dark:bg-purple-900s dark:text-purple-200 px-4 py-1 rounded-full font-medium">
              {servico.price}
            </span>
          </div>
        ))}
      </section>

      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-pink-500 dark:text-purple-400 mb-4">
          Pronto para transformar sua carreira?
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
    </div>
  );
}
