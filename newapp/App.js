/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Popular from './screens/Popular/Popular';
import TopRated from './screens/TopRated/TopRated';
import UpComing from './screens/Upcoming/UpComing';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//import Navigator from './navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <View style = {{flex:1, ustifyContent:'center', alignItems:'center'}}>
        
        
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// const TabNavigator = createMaterialBottomTabNavigator (
//   {
//     Popular: {
//       screen: Popular,
//     },
//     TopRated: {
//       screen: TopRated,
//     },
//     UpComing: {
//       screen: UpComing
//     },
//   },
//   {
//     initalRouteName: 'Popular',
//     activeColor: '#f0edf6',
//     inactiveColor: '#3e2465',
//     barStyle: {backgroundColor: '#694fad'},
//   }
// );

// const App: () => React$Node = () => {
//   return (
//     <View style = {{flex:1, ustifyContent:'center', alignItems:'center'}}>
//       <Text style = {{fontSize:40, justifyContent:'center', alignItems:'center'}}>Top Rated Movies</Text>
//       <Popular/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

//export default createAppContainer(TabNavigator);
export default App