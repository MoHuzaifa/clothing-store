import { Route, Switch } from "react-router";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useState, useEffect } from "react";

import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import RandomPages from "./pages/RandomPages";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";

function App() {
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    var unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setcurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setcurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  console.log(currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/sign-in-and-sign-up">
          <SignInAndSignUp />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/hats">
          <RandomPages heading="HATS" />
        </Route>
        <Route path="/jackets">
          <RandomPages heading="JACKETS" />
        </Route>
        <Route path="/sneakers">
          <RandomPages heading="SNEAKERS" />
        </Route>
        <Route path="*">
          <RandomPages heading="WRONG URL" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
