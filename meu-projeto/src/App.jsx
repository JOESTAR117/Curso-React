import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Jackson";

  const newName = name.toUpperCase();

 function sum(a,b) {
  return a + b
 }

 const url = "https://picsum.photos/200/300"

  return (
    <section>
      <h1>Ola React!</h1>
      <p>Isso e somente um teste</p>
      <h2>Ola, {newName}</h2>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Imagem aleatoria" />
      <HelloWorld/>
    </section>
    
  );
}

export default App;
