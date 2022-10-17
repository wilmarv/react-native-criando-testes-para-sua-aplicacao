import Lance from "../../interfaces/lance";
import Leilao from "../../interfaces/leilao";
import {
  VALIDO,
  INVALIDO,
  MENOR_QUE_VALOR_INICIAL,
  MENOR_OU_IGUAL_AOS_LANCES
} from "../constantes/estadosLance";

export function validaFormatoNumericoDoLance(valorEmTexto: string) {
  if (valorEmTexto.match(/^[1-9]+[0-9]*(\,[0-9]{1,2})?$/)) {
    return VALIDO;
  }

  return INVALIDO;
}

export function validaLance(valor: number, { lances, valorInicial }: Leilao) {
  const lanceMaiorOuIgualAoInicial = validaLanceMaiorOuIgualAoInicial(valor, valorInicial);
  const lanceMaiorQueLances = validaLanceMaiorQueLances(valor, lances);

  if (lanceMaiorQueLances !== VALIDO) {
    return lanceMaiorQueLances;
  }

  if (lanceMaiorOuIgualAoInicial !== VALIDO) {
    return lanceMaiorOuIgualAoInicial;
  }

  return lanceMaiorQueLances;
}

function validaLanceMaiorOuIgualAoInicial(valor: number, valorInicial: number) {
  if (valor >= valorInicial) {
    return VALIDO;
  }

  return MENOR_QUE_VALOR_INICIAL;
}

function validaLanceMaiorQueLances(valor: number, lances: Array<Lance>) {
  const lanceMaiorQueValor = lances.find(lance => lance.valor >= valor);
  if (!lanceMaiorQueValor) {
    return VALIDO;
  }

  return MENOR_OU_IGUAL_AOS_LANCES;
}
