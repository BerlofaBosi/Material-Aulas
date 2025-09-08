export default function NewsCardDesktop() {
  return (
    <div className="flex gap-4 p-4 border bg-white rounded-lg shadow">
      <img src="https://placehold.co/600x400" alt="Notícia" className="w-48 h-32 object-cover rounded" />
      <div>
        <h2 className="text-xl font-bold">Título da Notícia</h2>
        <p className="mt-2 text-gray-700">Resumo da notícia...</p>
      </div>
    </div>
  );
}
