import { useState, useEffect } from 'react';
import { obtemLeilao } from '../repositorio/leilao';
import { adicionaLance, obtemLancesDoLeilao } from '../repositorio/lance';
import { validaLance, validaFormatoNumericoDoLance } from '../negocio/validadores/lance';
import { formataBrasileiroParaDecimal } from '../negocio/formatadores/moeda';
import { VALIDO, NAO_ENVIADO, ENVIADO } from '../negocio/constantes/estadosLance';
import Leilao from '../interfaces/leilao';

export default function useLeilao(id: number): [Leilao, () => Promise<void>,(valor: string) => Promise<string>] {
  const [leilao, setLeilao] = useState<Leilao>({});

  const atualizaLeilao = async () => {
    const leilaoAtualizado = await obtemLeilao(id);
    const lancesAtualizados = await obtemLancesDoLeilao(id);
    setLeilao({ ...leilaoAtualizado, lances: lancesAtualizados });
  };

  const enviaLance = async (valor: string) => {
    const estadoFormatoLance = validaFormatoNumericoDoLance(valor);
    if (estadoFormatoLance !== VALIDO) {
      return estadoFormatoLance;
    }

    const valorNumerico = formataBrasileiroParaDecimal(valor);
    const estadoLance = validaLance(valorNumerico, leilao);
    if (estadoLance !== VALIDO) {
      return estadoLance;
    }

    const lanceFormatado = {
      valor: valorNumerico,
      leilaoId: leilao.id
    };

    const adicionado = await adicionaLance(lanceFormatado);
    if (adicionado) {
      await atualizaLeilao();
      return ENVIADO;
    }

    return NAO_ENVIADO;
  };

  useEffect(() => {
    atualizaLeilao();
  }, []);

  return [leilao, atualizaLeilao, enviaLance];
}
