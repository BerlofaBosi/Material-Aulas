export default function SidebarLayoutDesktop() {
  return (
    <div className="flex gap-4 h-48">
      <aside className="w-1/4 bg-green-200 p-4 rounded">Sidebar</aside>
      <main className="flex-1 bg-green-100 p-4 rounded">Conteúdo Principal</main>
    </div>
  );
}
