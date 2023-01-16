import { Link } from "react-router-dom";
import { Nav } from "./NavbarStyled";

function List3() {
  return (
      <Nav>
        <li className="li">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </Nav>
  );
}
export default List3;
