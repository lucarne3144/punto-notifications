importScripts(
  "https://www.gstatic.com/firebasejs/12.1.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging-compat.js"
);


firebase.initializeApp({

  apiKey: "AIzaSyBBns9DypiTjuP4HUGzsxQlXcDZT4_IeeA",

  authDomain: "punto-156fa.firebaseapp.com",

  projectId: "punto-156fa",

  storageBucket: "punto-156fa.firebasestorage.app",

  messagingSenderId: "186145579226",

  appId: "1:186145579226:web:ef61540d0d477fc03905e3"

});


const messaging =
  firebase.messaging();


messaging.onBackgroundMessage(
  function(payload) {

    console.log(
      "Notification reçue :",
      payload
    );


    const notificationTitle =
      payload.notification?.title ||
      "PUNTO";


    const notificationOptions = {

      body:
        payload.notification?.body ||
        "C'est à toi de jouer !"

    };


    self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );

  }
);
