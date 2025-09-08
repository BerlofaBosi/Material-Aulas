export default function GridAuto() {
  const items = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <div className="grid grid-cols-6 gap-4">
      {items.map(i => <div key={i} className="bg-blue-200 p-4 text-center rounded">Item {i}</div>)}
    </div>
  );
}
