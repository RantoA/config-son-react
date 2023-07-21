import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap';

export default function Navigations() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="navigation">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink to="/accueil">
                        | Accueil |
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login">
                       GLogin |
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/gestionson">
                         Gestion Son |
                    </NavLink>
                </li>
                
            </ul>

        </div>
    );
};

