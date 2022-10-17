export function formataDecimalParaReal(valor: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

export function formataBrasileiroParaDecimal(valor: string) {
  const pontuacaoAjustada = valor.replace('.', '').replace(',', '.');
  return parseFloat(pontuacaoAjustada);
}