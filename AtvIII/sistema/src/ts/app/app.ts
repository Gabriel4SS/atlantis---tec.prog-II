import Processo from "../abstracoes/processo";
import CadastroAcomodacoes from "../processos/cadastroAcomodacoes";
import Principal from "../processos/submenus/principal";

console.clear()
console.log(`Bem-vindo(a) ao sistema do parque aquatico Atlantis! `);

let processo: Processo
let execucao: Boolean = true

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}