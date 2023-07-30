/**
 * @format
 */

import {AppRegistry} from 'react-native';
AppRegistry.registerHeadlessTask('HeadlessTask', () =>
  require('./HeadlessTask'),
)
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
