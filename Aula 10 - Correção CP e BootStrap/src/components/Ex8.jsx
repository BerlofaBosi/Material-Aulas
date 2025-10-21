// Ex8 — Card de produto com hover e ícone animado (2 pontos)

// Implemente os efeitos solicitados no card abaixo:

// - Ao passar o mouse sobre o card, ele deve levantar levemente e aumentar a sombra.

// - O ícone no topo deve ter uma animação contínua de balanço usando @keyframes.

import { FaShoppingCart } from "react-icons/fa";

export default function Ex8() {

  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Ex8 - Card de Produto</h1>
    <section className="flex justify-center items-center mb-12">
      <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
        <div className="text-4xl text-blue-600 mb-4 flex justify-center">
          <FaShoppingCart />
        </div>
        <h3 className="text-lg font-semibold mb-2">Produto em Promoção</h3>
        <p className="text-gray-600 mb-4">Aproveite 20% de desconto!</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Comprar
        </button>
      </div>
    </section>
    </>
  );
}
