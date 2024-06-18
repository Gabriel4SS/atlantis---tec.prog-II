import React, { useState } from "react";
import '../componentes/paginas.css';

const TelaCheckOut: React.FC = () => {
    const clientesCheckOut: { cliente: string; quarto: string }[] = [
        { cliente: "Fernando Costa", quarto: "Solteiro Mais" },
        { cliente: "Juliana Souza", quarto: "Família Mais" },
    ];

    const [busca, setBusca] = useState<string>("");

    const filtrarClientes = (cliente: { cliente: string; quarto: string }) => {
        return cliente.cliente.toLowerCase().includes(busca.toLowerCase());
    };

    return (
        <div className="container">
            <h1 className="mb-4">Lista de Clientes para Check-out</h1>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend"></div>
                        <input 
                            type="text" 
                            className="form-control search-input" 
                            placeholder="Buscar cliente..." 
                            value={busca} 
                            onChange={(e) => setBusca(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <h2>Realizar Check-out</h2>
                    {clientesCheckOut
                        .filter(filtrarClientes)
                        .map((cliente, index) => (
                            <div key={index} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{cliente.cliente}</h5>
                                    <p className="card-text">Quarto: {cliente.quarto}</p>
                                    <button type="submit" className="btn btn-primary">Confirmar Check-out</button>

                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TelaCheckOut;
