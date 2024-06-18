import React from "react";
import { Link } from "react-router-dom";
import './paginas.css';

type Props = {
    tema: string;
};

const Home: React.FC<Props> = ({ tema }) => {
    return (
        <div className="container my-5">
            <div className="text-center my-5">
                <h1 style={{marginTop: "150px"}}>Bem-vindo ao Atlantis Water Park!</h1>
                <p className="mb-4 font-weight-bold">
                    Descubra um mundo de diversão e aventura no Atlantis Water Park, o destino perfeito para suas férias! 
                    Relaxe nas nossas acomodações de luxo, saboreie refeições deliciosas e aproveite as melhores piscinas e brinquedos aquáticos.
                    Venha viver momentos inesquecíveis com sua família e amigos!
                </p>
            </div>
            <div className="row justify-content-center">
                {[
                    {
                        title: "Hospedagem",
                        text: "Gerencie os clientes hospedados e suas acomodações.",
                        link: "/hospedagem",
                        linkText: "Ver Hospedagem"
                    },
                    {
                        title: "Check-in",
                        text: "Realize o check-in dos clientes nas acomodações disponíveis.",
                        link: "/check-in",
                        linkText: "Realizar Check-in"
                    }
                ].map((card, index) => (
                    <div key={index} className="col-md-4 d-flex mb-4 text-center" >
                        <div className="card h-100 w-100 custom-card">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text flex-grow-1">{card.text}</p>
                                <Link to={card.link} className="btn btn-primary mt-auto">{card.linkText}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
