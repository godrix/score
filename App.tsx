import React from 'react';
import {StatusBar} from 'expo-status-bar'
import { Home } from './src/Home';
import { useKeepAwake } from 'expo-keep-awake';


export default function App() {
  useKeepAwake();
  return (
    <>
      <StatusBar style="light"/>
      <Home/>
    </>
  );
}
