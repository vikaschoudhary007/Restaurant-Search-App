import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShwScreen';

const navigator = createStackNavigator({
  search:SearchScreen,
  result:ResultShowScreen,

},{
  initialRouteName:'search',
  defaultNavigationOptions: {
    title:'BhookMitao'
  }
});

export default createAppContainer(navigator);