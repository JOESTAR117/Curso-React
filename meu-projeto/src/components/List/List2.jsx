function List2({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => (
        <p key={index}>{item}</p>
      ))) : (
        <p>Não a itens na lista</p>
      )} 
    </>
  );
}

export default List2;
