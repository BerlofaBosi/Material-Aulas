import GlobalExample from "./components/GlobalExample/GlobalExample";
import InlineExample from "./components/InlineExample/InlineExample";
import ModulesExample from "./components/ModulesExample/ModulesExample";
import StyledExample from "./components/StyledExample/StyledExample";
import TailwindExample from "./components/TailwindExample/TailwindExample";

function App() {
  return (
    <div>
      <h1>Tipos de CSS no React</h1>
      <GlobalExample />
      <InlineExample />
      <ModulesExample />
      <StyledExample />
      <TailwindExample />
    </div>
  );
}

export default App;
