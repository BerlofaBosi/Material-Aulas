import Ex1Navbar from "./components/Ex1Navbar";
import Ex2GridCards from "./components/Ex2GridCards";
import Ex3GridColSpan from "./components/Ex3GridColSpan";
import Ex4Gallery from "./components/Ex4Gallery";
import Ex5CardsFlexGrow from "./components/Ex5CardsFlexGrow";
import Ex6ButtonAnimation from "./components/Ex6ButtonAnimation";
import Ex7Footer from "./components/Ex7Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Ex1Navbar />
      <main className="flex-grow p-6 space-y-12">
        <Ex2GridCards />
        <Ex3GridColSpan />
        <Ex4Gallery />
        <Ex5CardsFlexGrow />
        <Ex6ButtonAnimation />
      </main>
      <Ex7Footer />
    </div>
  );
}
