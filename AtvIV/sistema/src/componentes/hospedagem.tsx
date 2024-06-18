import React from "react";
import '../componentes/paginas.css';

const QuartoOcupado: React.FC<{ quarto: string }> = ({ quarto }) => (
    <div className="card mb-3">
        <div className="card-body">
            <p className="card-text">Quarto: {quarto}</p>
        </div>
    </div>
);

const QuartoVago: React.FC<{ quarto: string; disponiveis: number }> = ({ quarto, disponiveis }) => (
    <div className="card mb-3">
        <div className="card-body">
            <p className="card-text">Quarto: {quarto}</p>
            <p className="card-text">Disponíveis: {disponiveis}</p>
        </div>
    </div>
);

const TelaHospedagem: React.FC = () => {
    const quartosOcupados: { estilo: string; numero: number }[] = [
        { estilo: "Solteiro Simples", numero: 1 },
        { estilo: "Casal Simples", numero: 1 },
        { estilo: "Solteiro Mais", numero: 1 },
        { estilo: "Família Super", numero: 1 },
    ];

    const totalQuartos: { estilo: string; total: number }[] = [
        { estilo: "Solteiro Simples", total: 5 },
        { estilo: "Casal Simples", total: 3 },
        { estilo: "Solteiro Mais", total: 4 },
        { estilo: "Família Super", total: 2 },
        { estilo: "Solteiro Luxo", total: 3 },
        { estilo: "Casal Luxo", total: 3 },
        { estilo: "Solteiro Premium", total: 2 },
        { estilo: "Família Premium", total: 1 },
    ];

    const quartosVagos = totalQuartos.map(quarto => {
        const ocupados = quartosOcupados.filter(q => q.estilo === quarto.estilo).reduce((acc, curr) => acc + curr.numero, 0);
        return { estilo: quarto.estilo, disponiveis: quarto.total - ocupados };
    });

    return (
        <div className="container text-center">
            <h1 className="mb-4 ">Status dos Quartos</h1>
            <div className="row mb-4">
                <div className="col-md-6 text-center">
                    <h2>Quartos Ocupados</h2>
                    {quartosOcupados.map((quarto, index) => (
                        <QuartoOcupado key={index} quarto={`${quarto.estilo} (${quarto.numero} ocupados)`} />
                    ))}
                </div>
                <div className="col-md-6 text-center">
                    <h2>Quartos Disponíveis</h2>
                    {quartosVagos.map((quarto, index) => (
                        <QuartoVago key={index} quarto={quarto.estilo} disponiveis={quarto.disponiveis} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TelaHospedagem;
