export default function SidebarLayoutDesktop() {
  return (
    <div className="flex flex-col gap-4 h-48">
      <aside className="w-auto bg-green-200 p-4 rounded order-1">Sidebar</aside>
      <main className="flex-1 bg-green-100 p-4 rounded">Conteúdo Principal</main>
    </div>
  );
}
