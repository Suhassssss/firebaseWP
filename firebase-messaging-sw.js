importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyBZFjAZP8Jaid4Ptpj0ePH1DuYm-6TwXbY",
  authDomain: "webpush-b49d8.firebaseapp.com",
  projectId: "webpush-b49d8",
  messagingSenderId: "31138849707",
  appId: "1:31138849707:web:2ea55b7d412411d1e6a8ee"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message:', payload);

  // Customize the notification behavior and display a notification
  const notificationOptions = {
    body: payload.data.body,
    icon: '/path/to/icon.png'
  };

  return self.registration.showNotification(payload.data.title, notificationOptions);
});
