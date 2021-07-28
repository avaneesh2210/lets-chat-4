var firebaseConfig = {
    apiKey: "AIzaSyBmhrlX6W1cH8jFkEwx8IxyqKSFPGB9LuE",
    authDomain: "lets-chat-f0699.firebaseapp.com",
    databaseURL: "https://lets-chat-f0699-default-rtdb.firebaseio.com",
    projectId: "lets-chat-f0699",
    storageBucket: "lets-chat-f0699.appspot.com",
    messagingSenderId: "110087400479",
    appId: "1:110087400479:web:16a21ad927872b6d42f92a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}