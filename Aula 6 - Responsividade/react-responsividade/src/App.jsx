import HeaderResponsivo from "./components/HeaderResponsivo";
import GridResponsivo from "./components/GridResponsivo";
import SidebarLayout from "./components/SidebarLayout";
import NewsCard from "./components/NewsCard";
import ContainerCard from "./components/ContainerCard";
import ClampText from "./components/ClampText";
import GridAuto from "./components/GridAuto";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 space-y-12">
      {/* Header */}
      <HeaderResponsivo />

      {/* Grid Airbnb-style */}
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4"> Grid de Acomodações</h2>
        <GridResponsivo />
      </section>

      {/* Sidebar Layout */}
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Layout com Sidebar</h2>
        <SidebarLayout />
      </section>

      {/* Card de notícia */}
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Card de Notícia</h2>
        <NewsCard />
      </section>

      {/* Container Query */}
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Container Query</h2>
        <ContainerCard />
      </section>

      {/* Clamp Text */}
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Texto Responsivo com Clamp</h2>
        <ClampText />
      </section>

      {/* Grid Auto: auto-fit vs auto-fill */}
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Grid Auto-fit e Auto-fill</h2>
        <GridAuto />
      </section>
    </div>
  );
}

export default App;
