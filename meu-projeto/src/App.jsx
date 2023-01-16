import Eventos from "./components/Evento/Eventos";
import Form from "./components/Form/Form";

function App() {
  return (
    <section>
      <h1>Testando Eventos</h1>
      <Eventos numero="1" />
      <Eventos numero="2" />
      <Form/>
    </section>
  );
}

export default App;
