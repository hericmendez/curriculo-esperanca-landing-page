import { FC } from "react";
import Print01 from '@/assets/testimonials/01.png'
import Print02 from '@/assets/testimonials/02.png'
import Print03 from '@/assets/testimonials/03.png'
import Print04 from '@/assets/testimonials/04.png'
import Print05 from '@/assets/testimonials/05.png'
import Print06 from '@/assets/testimonials/06.png'
import Print07 from '@/assets/testimonials/07.png'
const feedbacks = [
  {
    img: Print01,
    quote: "Obrigado Mentora, graças à toda a sua ajuda meu perfil melhorou muito, e tive muitas oportunidades",
    author: "Daniel Lopes",
    role: "Engenheiro de Dados na Blueshift",
  },
  {
    img: Print02,
    quote: "Meu LinkedIn explodiu de conexões depois da otimização!",
    author: "Juliana R.",
    role: "",
  },
  {
    img: Print03,
    quote:
      "Achei que nunca sairia do desemprego, mas agora estou empregado e confiante.",
    author: "Rodrigo M.",
    role: "",
  },
  {
    img: Print04,
    quote: "Com a mentoria, consegui uma vaga dos sonhos em apenas 2 semanas!",
    author: "Gabriel S.",
    role: "",
  },
  {
    img: Print05,
    quote: "Meu LinkedIn explodiu de conexões depois da otimização!",
    author: "Juliana R.",
    role: "",
  },
  {
    img: Print06,
    quote:
      "Achei que nunca sairia do desemprego, mas agora estou empregado e confiante.",
    author: "Rodrigo M.",
    role: "",
  },
  {
    img: Print07,
    quote:
      "Achei que nunca sairia do desemprego, mas agora estou empregado e confiante.",
    author: "Rodrigo M.",
    role: "",
  },
];

const MixedTestimonialGallery: FC = () => (
  <section className="max-w-7xl mx-auto px-6 py-4">

    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
      {feedbacks.map(({ img }, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow hover:transition-transform hover:duration-300 transform hover:scale-125 peer"
        >
          <img
            src={img}
            alt={`Depoimento ${idx + 1}`}
            className="w-full h-auto"
          />
   
        </div>
      ))}
    </div>
  </section>
);

export default MixedTestimonialGallery;
