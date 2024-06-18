import React, { useState } from "react";
import { Link } from "react-router-dom";

type Dependente = {
    nome: string;
    cpf: string;
    rg: string;
};

type Cliente = {
    nome: string;
    cpf: string;
    rg: string;
    telefone: string;
    endereco: string;
    dependentes: Dependente[];
};

type Props = {
    tema: string;
    seletorView: (novaTela: string, evento: Event) => void;
};

const ListaCliente: React.FC<Props> = ({ tema, seletorView }) => {
    const [clienteSelecionadoIndex, setClienteSelecionadoIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setClienteSelecionadoIndex(clienteSelecionadoIndex === index ? null : index);
    };

    const handleCadastroCliente = () => {
        seletorView('Cadastro', new Event('click'));
    };

    const handleExcluirCliente = (index: number) => {
        console.log(`Excluir cliente ${index}`);
    };

    const handleAtualizarCliente = (index: number) => {
        console.log(`Atualizar cliente ${index}`);
    };

    const handleExcluirDependente = (clienteIndex: number, dependenteIndex: number) => {
        console.log(`Excluir dependente ${dependenteIndex} do cliente ${clienteIndex}`);
    };

    const handleAtualizarDependente = (clienteIndex: number, dependenteIndex: number) => {
        console.log(`Atualizar dependente ${dependenteIndex} do cliente ${clienteIndex}`);
    };

    const clientes: Cliente[] = [
        {
            nome: "Leonardo Pereira",
            cpf: "789.456.123-00",
            rg: "4567891-0",
            telefone: "(11) 9876-5432",
            endereco: "Rua das Flores, 123",
            dependentes: [
                { nome: "Bianca Pereira", cpf: "987.654.321-11", rg: "9876543-2" },
                { nome: "Gustavo Pereira", cpf: "123.456.789-22", rg: "1234567-8" }
            ]
        },
        {
            nome: "Camila Rodrigues",
            cpf: "123.789.456-33",
            rg: "7891234-5",
            telefone: "(21) 8765-4321",
            endereco: "Avenida Central, 456",
            dependentes: [
                { nome: "Rafael Rodrigues", cpf: "321.654.987-44", rg: "3216549-0" }
            ]
        },
        {
            nome: "Marcos Silva",
            cpf: "456.123.789-55",
            rg: "1237894-6",
            telefone: "(31) 7654-3210",
            endereco: "Travessa das Palmeiras, 789",
            dependentes: [
                { nome: "Carolina Silva", cpf: "654.321.987-66", rg: "6543219-1" }
            ]
        },
        {
            nome: "Beatriz Ferreira",
            cpf: "789.456.123-77",
            rg: "4561237-8",
            telefone: "(41) 6543-2109",
            endereco: "Rua dos Girassóis, 987",
            dependentes: [
                { nome: "Matheus Ferreira", cpf: "987.654.321-88", rg: "9876543-2" }
            ]
        },
        {
            nome: "Fernando Costa",
            cpf: "987.123.654-99",
            rg: "1236547-9",
            telefone: "(51) 5432-1098",
            endereco: "Alameda dos Pássaros, 654",
            dependentes: [
                { nome: "Alice Costa", cpf: "123.987.654-00", rg: "1239876-5" }
            ]
        },
        {
            nome: "Juliana Souza",
            cpf: "654.321.987-11",
            rg: "3219876-7",
            telefone: "(61) 4321-0987",
            endereco: "Praça das Oliveiras, 321",
            dependentes: [
                { nome: "Bruno Souza", cpf: "321.987.654-22", rg: "3219876-8" },
                { nome: "Clara Souza", cpf: "987.123.456-33", rg: "9871234-5" }
            ]
        },
        {
            nome: "Rodrigo Almeida",
            cpf: "321.654.987-44",
            rg: "6543217-8",
            telefone: "(71) 3210-9876",
            endereco: "Viela das Hortênsias, 876",
            dependentes: [
                { nome: "Daniel Almeida", cpf: "456.789.123-55", rg: "4567891-0" },
                { nome: "Helena Almeida", cpf: "789.123.456-66", rg: "7891234-5" }
            ]
        },
        {
            nome: "Gabriela Santos",
            cpf: "987.654.321-77",
            rg: "9876543-2",
            telefone: "(81) 2109-8765",
            endereco: "Avenida dos Lírios, 543",
            dependentes: [
                { nome: "Lucas Santos", cpf: "123.456.789-88", rg: "1234567-8" },
                { nome: "Mariana Santos", cpf: "456.123.789-99", rg: "4561237-8" }
            ]
        },
        {
            nome: "Henrique Lima",
            cpf: "654.987.321-00",
            rg: "3216547-8",
            telefone: "(91) 1098-7654",
            endereco: "Rua das Amendoeiras, 210",
            dependentes: [
                { nome: "Sofia Lima", cpf: "789.654.123-11", rg: "7896541-2" },
                { nome: "Thiago Lima", cpf: "456.987.123-22", rg: "4569871-0" }
            ]
        },
        {
            nome: "Patrícia Carvalho",
            cpf: "123.456.789-33",
            rg: "7891234-5",
            telefone: "(11) 9876-5432",
            endereco: "Largo das Acácias, 321",
            dependentes: [
                { nome: "Victor Carvalho", cpf: "654.321.987-44", rg: "6543219-1" },
                { nome: "Lívia Carvalho", cpf: "321.654.987-55", rg: "3216549-0" }
            ]
        }
    ];

    return (
        <div className="container-fluid">
            <div className="my-4">
                <h2 className="text-center">Clientes</h2>
                {clientes.map((cliente, clienteIndex) => (
                    <div key={clienteIndex}>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            onClick={() => handleClick(clienteIndex)}
                        >
                            {cliente.nome}
                        </a>
                        {clienteSelecionadoIndex === clienteIndex && (
                            <div className="card mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">{cliente.nome}</h5>
                                    <p className="card-text">CPF: {cliente.cpf}</p>
                                    <p className="card-text">RG: {cliente.rg}</p>
                                    <p className="card-text">Endereço: {cliente.endereco}</p>
                                    <p className="card-text">Telefone: {cliente.telefone}</p>
                                    <p className="card-text">Dependentes:</p>
                                    <ul className="list-group">
                                        {cliente.dependentes.map((dependente, dependenteIndex) => (
                                            <li key={dependenteIndex} className="list-group-item d-flex justify-content-between align-items-center">
                                                {dependente.nome} - CPF: {dependente.cpf}, RG: {dependente.rg}
                                                <div>
                                                    <button className="btn btn-danger btn-sm ml-2" onClick={() => handleExcluirDependente(clienteIndex, dependenteIndex)}>Excluir</button>
                                                    <button className="btn btn-primary btn-sm ml-2" onClick={() => handleAtualizarDependente(clienteIndex, dependenteIndex)}>Atualizar</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <button className="btn btn-danger btn-sm mr-2" onClick={() => handleExcluirCliente(clienteIndex)}>Excluir Cliente</button>
                                        <button className="btn btn-primary btn-sm" onClick={() => handleAtualizarCliente(clienteIndex)}>Atualizar Cliente</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className="d-flex justify-content-start mb-3">
                    <Link to="/cadastro" className="btn btn-primary my-4" onClick={handleCadastroCliente}>Cadastrar novo cliente</Link>
                </div>
            </div>
        </div>
    );
};

export default ListaCliente;
