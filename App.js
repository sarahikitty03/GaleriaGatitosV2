import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Gatito from './COMPONENTES/gatito';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galeria de Gatitos</Text>
      <ScrollView>
        <Gatito 
          imagen={require('./IMAGENES/1.jpg')} 
          titulo="Gatito cargando"/>

        <Gatito
          imagen={require('./IMAGENES/2.jpg')} 
          titulo="Gatito fino"/>

        <Gatito
          imagen={require('./IMAGENES/3.jpg')} 
          titulo="Gatito fresco"/>

        <Gatito
          imagen={require('./IMAGENES/4.jpg')} 
          titulo="Gatito yowaimo"/>

        <Gatito
          imagen={require('./IMAGENES/5.jpg')} 
          titulo="Gatito banano"/>

        <Gatito
          imagen={require('./IMAGENES/6.jpg')} 
          titulo="Gatito spidercat"/>

        <Gatito
          imagen={require('./IMAGENES/7.jpg')} 
          titulo="Gatito tell me"/>

        <Gatito
          imagen={require('./IMAGENES/8.jpg')} 
          titulo="Gatito triste"/>

        <Gatito
          imagen={require('./IMAGENES/9.jpg')} 
          titulo="Gatito fino 2"/>

        <Gatito
          imagen={require('./IMAGENES/10.jpg')} 
          titulo="Gatito Juzgon"/>
      <StatusBar style="auto" />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});
