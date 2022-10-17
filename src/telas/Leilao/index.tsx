import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import useLeilao from '../../hooks/useLeilao';

import { FlatList, View, StyleSheet } from 'react-native';
import Topo from './componentes/Topo';
import Lance from './componentes/Lance';
import EnviaLance from './componentes/EnviaLance';
import { VALIDO } from '../../negocio/constantes/estadosLance';

export default function Leilao() {
  const route = useRoute();
  const [carregando, setCarregando] = useState(false);

  const id: number = route.params.id;
  const [leilao, obtemLeilao, enviaLance] = useLeilao(id);

  const novoLance = async (valor: string) => {
    const estadoLance = await enviaLance(valor);
    if (estadoLance.valido)
      await atualizaLeilao();

    return estadoLance;
  }

  const atualizaLeilao = async () => {
    setCarregando(true);
    await obtemLeilao();
    setCarregando(false);
  };

  if (!leilao.nome) {
    return <View />
  }

  return <>
    <FlatList
      data={leilao.lances}
      keyExtractor={(leilao) => leilao.id.toString()}
      renderItem={({ item }) => <Lance {...item} cor={leilao.cor} />}
      ListHeaderComponent={() => <Topo {...leilao} />}
      onRefresh={atualizaLeilao}
      refreshing={carregando}
      contentContainerStyle={estilos.lista}
    />
    <EnviaLance cor={leilao.cor} enviaLance={novoLance} />
  </>
}

const estilos = StyleSheet.create({
  lista: {
    /* Padding para evitar que o último item da lista
    fique por baixo do formulário de envio de lance */
    paddingBottom: 110,
  },
});
