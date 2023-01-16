import Item from "../Item/Item";

function List(){
    return(
        <>
          <h1>Minha lista</h1>
          <ul>
            <Item marca='Ferrari' ano_lancamento={1985}/>
            <Item marca='Fiat' ano_lancamento={1964}/>
            <Item marca='Honda' ano_lancamento={1979}/>
            <Item />
          </ul>  
        </>

    )
}

export default List;