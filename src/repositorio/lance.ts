import Lance from '../interfaces/lance';
import apiLeiloes from '../servicos/apiLeiloes';

export async function obtemLancesDoLeilao(id: number) {
  try {
    const resposta = await apiLeiloes.get(`/lances?leilaoId=${id}&_sort=valor&_order=desc`);
    return resposta.data;
  } catch (erro) {
    return [];
  }
}

export async function adicionaLance(lance: Lance) {
  try {
    await apiLeiloes.post(`/lances`, lance);
    return true;
  } catch (erro) {
    return false;
  }
}