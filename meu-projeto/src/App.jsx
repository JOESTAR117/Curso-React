import HelloWorld from "./components/HelloWorld/HelloWorld";
import Pessoa from "./components/Pessoa/Pessoa";
import SayMyName from "./components/SayMyName/SayMyName";

function App() {
  const nome = "Jolyne";
  return (
    <section>
      <HelloWorld/>
      <h1>Testando styled components</h1>
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
