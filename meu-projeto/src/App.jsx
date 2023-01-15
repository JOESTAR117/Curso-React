import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyName";

function App() {
  const nome = "Jolyne";
  return (
    <section>
      <SayMyName nome="Jackson" />
      <SayMyName nome="Johnny" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Jackson"
        idade="19"
        profissao="Programador"
        foto="http://lorempixel.com.br/500/400/?2"
      />
    </section>
  );
}

export default App;
