import Lance from "./lance";

interface Leilao {
    id: number,
    nome: string,
    descricao: string,
    cor: string,
    icone: string,
    lances: Array<Lance>,
    valorInicial: number,
}
export default Leilao;