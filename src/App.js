import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import RandomPages from "./pages/RandomPages";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { setCurrentUser } from "./redux/user/userActions";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const updateCurrentUser = (user) => dispatch(setCurrentUser(user));
    var unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          updateCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      updateCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route
          exact
          path="/sign-in-and-sign-up"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
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
