import HeaderTopo from "../HeaderTopo/HeaderTopo";
import HeaderPrincipal from "../HeaderPrincipal/HeaderPrincipal";
import HeaderNavegacao from "../HeaderNavegacao/HeaderNavegacao";

const Header = () => {
    return (
        <header>
            <HeaderTopo />
            <HeaderPrincipal />
            <HeaderNavegacao />
        </header>
    );
}

export default Header;
