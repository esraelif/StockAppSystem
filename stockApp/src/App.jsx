import { ThemeProvider, createTheme } from "@mui/material"
import AppRouter from "./router/AppRouter"
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from "react-toastify";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#194a7a'
      },
      secondary: {
        main: '#153448',
        second: '#3C5B6F'
      },
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}

export default App
