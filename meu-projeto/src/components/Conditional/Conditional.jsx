import { useState } from "react";

function Conditional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <>
      <h2>Cadastre seu e-mail</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar
        </button>
        {userEmail && (
          <div>
            <p>o email do usuario é : {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </>
  );
}
export default Conditional;
