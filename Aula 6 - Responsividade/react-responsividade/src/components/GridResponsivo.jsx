export default function GridResponsivo() {
  const images = {
    main: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop",
    thumbs: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=800&auto=format&fit=crop",
    ],
  };

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px]">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
          <img src={images.main} alt="Foto principal do imóvel"
               className="h-full w-full object-cover" />
        </div>

        {images.thumbs.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <img src={src} alt={`Miniatura ${i + 1}`}
                 className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
