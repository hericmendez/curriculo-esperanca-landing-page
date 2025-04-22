import { Link } from "react-router-dom";

const Banner = () => (
    <div className="transform skew-y-6 bg-gradient-to-br from-pink-800 to-slate-200 dark:from-purple-800 dark:to-indigo-600 " >
      <div className="transform -skew-y-6 py-32 px-6 text-center text-white ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-5">
          Chega de enviar currículos sem resposta!
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto z-">
          Eu sou a Geovanna, e vou ajudar você a se destacar no mercado de trabalho.
          Vamos construir a sua história profissional e conquistar a vaga dos seus sonhos!
        </p>
        <Link
          to="/contato"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Vamos Conversar?
        </Link>
      </div>
    </div>
  );

  export default Banner;