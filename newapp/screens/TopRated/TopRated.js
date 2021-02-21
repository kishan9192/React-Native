import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList, ActivityIndicator, } from 'react-native';
import Details from '../../components/details'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#223343'
  },
  results: {
    flex: 1,
  },
  result: {
    flex: 1,
    width: '100%',
    marginBottom: 50
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    padding: 20,
    backgroundColor: '#445565',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
  },
  body: {
    backgroundColor: '#223343'
  },
  topview: {
    fontSize: 30,
    alignContent: 'center',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#8C001A',
    color: 'white',
    marginBottom: 20
  }
});



class TopRated extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      clicked: false,
      clickeddata: null
    }
  }

  baseuri = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

  async getData() {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4cfbaf275e7c796eded0b452dbc74644&language=en-US&page=1');
    const resJson = await res.json();
    this.setState({ data: resJson.results });
  }


  componentDidMount() {
    this.getData();
  }

  showdetails(item) {
    console.log(item);
    this.setState({ clicked: true });
    this.setState({ clickeddata: item });
  }

  changeclicked() {
    this.setState({ clicked: false });
    this.setState({ clickeddata: null });
  }

  render() {
    //console.log("Inside popular", this.state.data);
    if (this.state.clicked) {
      return (
        <Details changeclicked={this.changeclicked.bind(this)} clickeddata={this.state.clickeddata} />
      )
    }
    return (
      <View style={styles.body}>
        <Text style={styles.topview}> Some TopRated Movies </Text>

        <ScrollView styles={styles.results}>
          {this.state.data.map(item => (
            <TouchableOpacity onPress={() => this.showdetails(item)}>
              <View key={item.id} style={styles.result}>
                <Image
                  source={{ uri: this.baseuri + item.poster_path }}
                  style={{
                    width: 300,
                    height: 300,
                    marginLeft: 50,
                    marginRight: 20,
                    marginBottom: 20
                  }}
                  resizeMode="cover"
                />
                <Text style={styles.heading}> {item.title} </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </View>
    )
  };


}

export default TopRated;






