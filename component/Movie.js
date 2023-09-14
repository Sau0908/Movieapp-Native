import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const Movie = () => {
  const [searchText, setSearchText] = useState('');
  const [movieList, setMovieList] = useState();
  function handleInputChange(text) {
    setSearchText(text);
  }
  async function handleSearchMovie() {
    let res = await fetch(
      `http://www.omdbapi.com/?apikey=81c05b6c&s=${searchText}`,
    );
    let data = await res.json();
    console.log(data.Search);
    setMovieList(data.Search);
  }
  return (
    <View>
      <View>
        <TextInput
          style={styles.heading}
          value={searchText}
          onChangeText={handleInputChange}
          placeholder="Search Movie Here"></TextInput>
      </View>
      <View style={styles.moviebtn}>
        <Button onPress={handleSearchMovie} title="Search Movie"></Button>
      </View>
      <View style={styles.movieFnd}>
        {movieList && (
          <Text style={{textAlign: 'center'}}>
            {movieList.length} Movies Found
          </Text>
        )}
      </View>
      <FlatList
        data={movieList}
        renderItem={({item}) => {
          return (
            <View style={styles.movieContainer}>
              <Image
                style={{height: 300, width: 300}}
                source={{uri: item.Poster}}
              />
              <Text style={styles.movieTitle}>{item.Title}</Text>
              <Text style={{textAlign: 'center'}}>YEAR : {item.Year}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    marginTop: 30,
    color: 'black',
    borderWidth: 1,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 5,
    marginBottom: 15,
  },
  moviebtn: {
    marginLeft: 35,
    marginRight: 35,
  },
  movieContainer: {
    marginLeft: 35,
  },
  movieFnd: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  movieTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default Movie;
