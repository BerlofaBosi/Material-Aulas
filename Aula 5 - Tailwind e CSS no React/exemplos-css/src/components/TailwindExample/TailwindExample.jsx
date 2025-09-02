export default function TailwindExample() {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Exercício com Tailwind
      </h2>

      <p className="text-gray-600 mb-6">
        Abaixo estão alguns desafios para você praticar <b>Tailwind CSS</b>.
        Edite este componente e aplique as regras pedidas.
      </p>

      {/* Grid base */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-blue-100 p-4 rounded text-center">Box 1</div>
        <div className="bg-blue-200 p-4 rounded text-center">Box 2</div>
        <div className="bg-blue-300 p-4 rounded text-center">Box 3</div>
      </div>

      {/* Lista de desafios */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Desafios:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            Transforme a grade para <b>3 colunas</b> no desktop.
          </li>
          <li>
            Adicione <b>espaçamento entre os itens</b> de 1.5rem.
          </li>
          <li>
            Aplique <b>cores diferentes</b> de fundo em cada box (exemplo:
            vermelho, verde, amarelo).
          </li>
          <li>
            Coloque um <b>efeito de hover</b> que mude a cor de fundo de cada
            box.
          </li>
          <li>
            Deixe o texto dos boxes em <b>negrito e centralizado</b>.
          </li>
          <li>
            Torne o layout <b>responsivo</b>: 1 coluna no celular, 2 colunas no
            tablet e 3 colunas no desktop.
          </li>
          <li>
            Adicione uma <b>borda arredondada</b> e <b>sombra</b> nos boxes.
          </li>
          <li>
            Teste classes de <b>padding e margin</b> para ajustar o
            espaçamento.
          </li>
        </ol>
      </div>
    </div>
  );
}
