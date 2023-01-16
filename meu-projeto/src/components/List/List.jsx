import Item from "../Item/Item";

function List(){
    return(
        <>
          <h1>Minha lista</h1>
          <ul>
            <Item marca='Ferrari'/>
            <Item marca='Fiat'/>
            <Item marca='Honda'/>
          </ul>  
        </>

    )
}

export default List;