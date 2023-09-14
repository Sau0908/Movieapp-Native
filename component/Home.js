import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <View>
        <Text style={styles.heading}>Welcome to Movie App</Text>
      </View>
      <View style={styles.moviebtn}>
        <Button
          color="orange"
          title="Explore Movies"
          onPress={() => navigation.navigate('Movie')}></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    color: 'black',
  },
  moviebtn: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default Home;
