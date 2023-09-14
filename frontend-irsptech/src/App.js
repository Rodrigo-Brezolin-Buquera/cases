import Router from "./routes/router";
import store from "./store"
import { Provider } from "react-redux";
import { getList } from "./store/reducers/users";
import { useEffect } from "react";

function App() {

  useEffect (() => {
    store.dispatch(getList())
  }, [])

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
