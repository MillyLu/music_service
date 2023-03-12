/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { render, cleanup } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  ThemeContext,
} from "./ThemeProvider";
import { favoritesApi} from './services/favorites';
import { trackApi} from './services/track';



// eslint-disable-next-line react/function-component-definition
const AllProviders = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light');
      return;
    }

    setCurrentTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



 // Обертка, предоставляющая store дочерним компонентам
 
export function withStoreProvider(store) {
  return function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  };
}

/**
 * Функция для мока api
 
 */
/* export const setupApiStore = (api, extraReducers, withoutListeners) => {
  const getStore = () =>
    configureStore({
      reducer: { [api.reducerPath]: api.reducer, ...extraReducers },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(
          api.middleware
        ),
    });
  
  const initialStore = getStore();
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore),
  };

  let cleanupListeners;

  beforeEach(() => {
    const store = getStore();
    refObj.store = store;
    refObj.wrapper = withStoreProvider(store);

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch);
    }
  });

  afterEach(() => {
    cleanup();

    if (!withoutListeners) {
      cleanupListeners();
    }

    refObj.store.dispatch(api.util.resetApiState());
  });

  return refObj;
}; */

export const setupApiStoreTwo = (api, extraReducers, withoutListeners) => {
  const getStore = () =>
    configureStore({
      reducer: { [trackApi.reducerPath]: trackApi.reducer,
        [favoritesApi.reducerPath]: favoritesApi.reducer,
         ...extraReducers },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(
          trackApi.middleware
        ).concat(favoritesApi.middleware),
    });
    const initialStore = getStore();
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore),
  };

  let cleanupListeners;

  beforeEach(() => {
    const store = getStore();
    refObj.store = store;
    refObj.wrapper = withStoreProvider(store);

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch);
    }
  });

  afterEach(() => {
    cleanup();

    if (!withoutListeners) {
      cleanupListeners();
    }

    refObj.store.dispatch(trackApi.util.resetApiState());
  });

  return refObj;
};



export const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });