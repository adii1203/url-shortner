import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import createStore from "./app/store.js";
import App from "./App.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

const AppContainer = () => {
  const [store, setStore] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const initStore = async () => {
      try {
        const appStore = await createStore();
        setStore(appStore);
      } catch (error) {
        setIsError(true);
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    initStore();
  }, []);

  if (isLoading || isError) {
    return <div>{isLoading ? null : <h1>Error</h1>}</div>;
  }

  return (
    <SpeedInsights>
      <Provider store={store}>
        <App />
      </Provider>
    </SpeedInsights>
  );
};

export default AppContainer;
