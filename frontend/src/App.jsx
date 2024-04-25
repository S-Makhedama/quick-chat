import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);


//if the user does not exist, render the author page
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
  //if it does exist render chats page and pass the data 
    return <ChatsPage user={user} />;
  }
}

export default App;