import List2 from "./components/List/List2";


function App() {


  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <section>
      <h1>Renderização de listas</h1>
      <List2 itens={meusItens} />
      <List2 itens={[]} />
    </section>
  );
}

export default App;
