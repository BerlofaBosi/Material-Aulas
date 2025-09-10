export default function NewsCardDesktop() {
  return (
    <div className="flex flex-col gap-4 p-4 border bg-white rounded-lg shadow w-50 mx-auto text-center md:mx-0 md:text-left md:flex-row md:w-auto">
      <img src="https://placehold.co/600x400" alt="Notícia" className="w-48 h-32 object-cover rounded" />
      <div>
        <h2 className="text-xl font-bold">Título da Notícia</h2>
        <p className="mt-2 text-gray-700">Resumo da notícia...</p>
      </div>
    </div>
  );
}
