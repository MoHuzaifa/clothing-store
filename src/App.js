import { Route, Switch, Redirect } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { shopData } from "./pages/shop/ShopData";

import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";

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

  /*RAN ONLY ONCE TO ADD STORE DATA TO FIREBASE, IN ORDER TO AVOID MANUAL INPUT ON FIREBASE CONSOLE*/
  // useEffect(() => {
  //   addCollectionAndDocuments(
  //     "collections",
  //     shopData.map(({ title, items }) => ({ title, items }))
  //   );
  // }, []);

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
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}
export default App;
