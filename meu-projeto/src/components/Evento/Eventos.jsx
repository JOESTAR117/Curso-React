import Button from "./Button";

function Eventos() {
  function meuEvento() {
    console.log(`Ativando primeiro evento`);
  }

  function segundoEvento() {
    console.log("Ativando o segundo evento");
  }

  return (
    <>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </>
  );
}
export default Eventos;
