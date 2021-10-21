importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// new change on 22-10-2021

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

firebase.initializeApp({
    apiKey: "AIzaSyA0jcIfBeY58fXPCiD6NRccp0N2dmBeqtc",
  authDomain: "sk-web-e14b2.firebaseapp.com",
  projectId: "sk-web-e14b2",
  storageBucket: "sk-web-e14b2.appspot.com",
  messagingSenderId: "255843477465",
  appId: "1:255843477465:web:eee64a50a32fd9b8869bc8",
  measurementId: "G-N2TB24J4PP"
});
const messaging = firebase.messaging();
const app = initializeApp(firebase);
const analytics = getAnalytics(app);
