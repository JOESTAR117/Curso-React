function Pessoa({nome, idade , profissao, foto}){
    return(
        <>
            <img src={foto}/>
            <h2>Nome: {nome}</h2>
            <p>Idade : {idade}</p>
            <p>Profissão: {profissao}</p>
        </>
    )
}

export default Pessoa;