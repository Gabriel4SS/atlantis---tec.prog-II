import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaClientes"; 
import ListaAcomodacoes from "./listaAcomodações";
import Home from "./Home";
import Login from "./login";
import FormularioAtualizarAcomodacao from "./formularioCadastroAcomodação";
import TelaHospedagem from "./hospedagem";
import TelaCheckIn from "./checkin";
import TelaCheckOut from "./chekout";

const Roteador: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <BarraNavegacao 
          tema="#e3f2fd" 
          botoes={['Home', 'Clientes', 'Acomodacoes', 'Hospedagem', 'Check-in', 'Check-out']} 
          seletorView={(novaTela: string, evento: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {}} 
        />
      )}
      <Routes>
        <Route path="/login" element={<Login tema={""} />} />
        <Route path="/" element={<Home tema={""} />} />
        <Route path="/Home" element={<Home tema={""} />} />
        <Route path="/clientes" element={<ListaCliente tema={""} seletorView={(novaTela: string, evento: Event) => { throw new Error("Function not implemented."); }} />} />
        <Route path="/acomodacoes" element={<ListaAcomodacoes tema={""} seletorView={(novaTela: string, evento: Event) => { throw new Error("Function not implemented."); }} />} />
        <Route path="/cadastro" element={<FormularioCadastroCliente />} />
        <Route path="/cadastro-acomodacao" element={<FormularioAtualizarAcomodacao />} />
        <Route path="/hospedagem" element={<TelaHospedagem />} />
        <Route path="/check-in" element={<TelaCheckIn />} />
        <Route path="/check-out" element={<TelaCheckOut />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <Roteador />
  </Router>
);

export default App
