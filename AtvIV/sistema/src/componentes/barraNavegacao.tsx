import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./paginas.css"; 

type Props = {
    tema: string;
    botoes: string[];
    seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const BarraNavegacao: React.FC<Props> = ({ tema, botoes, seletorView }) => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: "#3e82ca" }}>
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand mb-0 h1">
                    <img src="../imagens/atlantis_logo.png" alt="atlantis logo" className="custom-logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                    style={{ borderColor: "#fff" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${menuAberto ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        {botoes.map((valor) => (
                            <li key={valor} className="nav-item custom-nav-item">
                                <Link
                                    to={valor === 'Home' ? '/home' : `/${valor.toLowerCase()}`}
                                    className="nav-link custom-nav-link"
                                    onClick={(e) => {
                                        seletorView(valor, e);
                                        toggleMenu();
                                    }}
                                >
                                    {valor}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ml-auto custom-deslogar">
                    <Link to="/login" className="navbar-brand">
                        <p className="m-0 text-center custom-deslogar-text">deslogar</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default BarraNavegacao;
