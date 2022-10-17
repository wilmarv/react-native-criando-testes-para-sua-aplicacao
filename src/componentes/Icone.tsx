import { View, StyleSheet, ViewStyle } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Icone({ nome, cor, style }: IIcone) {
  const estilos = funcaoEstilos(cor);

  return <View style={[estilos.fundo, style]}>
    <FontAwesome5 name={nome || "question"} size={48} color='#ffffff' />
  </View>
}

const funcaoEstilos = (cor: string) => StyleSheet.create({
  fundo: {
    backgroundColor: cor || '#093366',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

interface IIcone {
  nome: string,
  cor: string,
  style: ViewStyle,
}