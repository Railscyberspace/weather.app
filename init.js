if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyC4ni11wIa5io41XuiXGWfjwFwNc6ABm7M",
  "appId": "1:689189433792:web:350652d749383f4ba8d825",
  "authDomain": "weather-app-c0e2a.firebaseapp.com",
  "databaseURL": "https://weather-app-c0e2a.firebaseio.com",
  "measurementId": "G-RYSZCH75CS",
  "messagingSenderId": "689189433792",
  "projectId": "weather-app-c0e2a",
  "storageBucket": "weather-app-c0e2a.appspot.com"
});