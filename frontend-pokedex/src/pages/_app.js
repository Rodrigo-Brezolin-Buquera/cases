import { Provider } from "react-redux";
import store from "@/store"
import { getList } from "@/store/reducers/pokemon";
import { useEffect } from "react";
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {

  useEffect(() => {
    store.dispatch(getList()) 
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
