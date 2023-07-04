import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    //if user dont exist , render the AuthPage
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    //if user exist, render the ChatsPage and pass that data aka {user}
    return <ChatsPage user={user} />;
  }
}

export default App;