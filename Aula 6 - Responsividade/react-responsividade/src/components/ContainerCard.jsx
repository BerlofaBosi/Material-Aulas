export default function ContainerCard() {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow rounded p-4 flex items-center gap-6">
        <img src="https://placehold.co/150" alt="Imagem" className="rounded" />
        <div>
          <h2 className="text-xl font-bold">Título do Card</h2>
          <p className="text-gray-600">Descrição breve do conteúdo exibido no card.</p>
        </div>
      </div>
    </div>
  );
}
