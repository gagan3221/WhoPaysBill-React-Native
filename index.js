/**
 * @format
 */

import React from 'react';
import {MyProvider} from './src/context'

const provider  = ()=>(
    <MyProvider>
        <App/>
    </MyProvider>
)

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => provider);
