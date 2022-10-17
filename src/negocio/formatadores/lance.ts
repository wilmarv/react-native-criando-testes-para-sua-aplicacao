import Lance from "../../interfaces/lance";

export function formataMaiorLanceDoLeilao(lances: Array<Lance>, valorInicial: number) {
  const maiorLance = lances.reduce(
    (maior, atual) => atual.valor > maior ? atual.valor : maior,
    valorInicial
  );
  return maiorLance;
}