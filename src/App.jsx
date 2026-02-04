import React from "react";
import TodoList from "./pages/TodoList";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <TodoList />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
