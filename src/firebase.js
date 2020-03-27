import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyBg3lZpmN0_P4FI4Rw_gROIRGnOO4SXHXA",
    authDomain: "converter-fea31.firebaseapp.com",
    databaseURL: "https://converter-fea31.firebaseio.com",
    projectId: "converter-fea31",
    storageBucket: "converter-fea31.appspot.com",
    messagingSenderId: "608125182288",
    appId: "1:608125182288:web:990fa8cc5326839fad4c55",
    measurementId: "G-VLDD5351RT"
  };

  const devConfig = {
    apiKey: "AIzaSyBg3lZpmN0_P4FI4Rw_gROIRGnOO4SXHXA",
    authDomain: "converter-fea31.firebaseapp.com",
    databaseURL: "https://converter-fea31.firebaseio.com",
    projectId: "converter-fea31",
    storageBucket: "converter-fea31.appspot.com",
    messagingSenderId: "608125182288",
    appId: "1:608125182288:web:990fa8cc5326839fad4c55",
    measurementId: "G-VLDD5351RT"
  };

  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

  
export const fnirebaseImpl = firebase.initializeApp(config);