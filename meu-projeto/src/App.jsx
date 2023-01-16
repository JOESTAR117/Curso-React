import { useState } from "react";
import Saudacao from "./components/Saudacao/Saudacao";
import SeuNome from "./components/SeuNome/SeuNome";



function App() {

  const [nome,setNome] = useState('')

  return (
    <div>
      <h1>State lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome = {nome} />
    </div>
  );
}

export default App;
