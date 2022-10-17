import { useState, useEffect } from 'react';
import Leilao from '../interfaces/leilao';
import { obtemLeiloes } from '../repositorio/leilao';

export default function useListaLeiloes():[Array<Leilao>,() => Promise<void>] {
  const [leiloes, setLeiloes] = useState<Array<Leilao>>([]);

  const atualizaLeiloes = async () => {
    const leiloesAtualizados = await obtemLeiloes();
    setLeiloes(leiloesAtualizados);
  };

  useEffect(() => {
    atualizaLeiloes();
  }, []);

  return [leiloes, atualizaLeiloes];
}