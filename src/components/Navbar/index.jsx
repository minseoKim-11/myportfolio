import { Link } from "react-router-dom";
import * as N from './styles';

const Navbar = () => {
    return (
        <N.NavContanier>
            <N.LogoContainer>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <N.MyIcon>MyPortfolio</N.MyIcon>
                </Link>

            </N.LogoContainer>
            <N.MenuContainer>
                <Link to="about" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <N.MyMenu>About Me</N.MyMenu>
                </Link>
            </N.MenuContainer>
        </N.NavContanier>
    );
};

export default Navbar;
