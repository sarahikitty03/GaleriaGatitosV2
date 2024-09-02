import { StyleSheet, Text, View, Image } from 'react-native';

export default function Gatito(props){
    return(
        <View>
            <Image style={styles.gato} source={props.imagen}/>  
            <Text style={styles.tituloimagen}>{props.titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    gato:{
      marginTop:10,
      borderRadius: 5,
      width:300,
      height:300,
    },
    tituloimagen: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'blue'
    }
  });
  