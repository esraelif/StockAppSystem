import { ThemeProvider, createTheme } from "@mui/material"
import AppRouter from "./router/AppRouter"
import { Provider } from "react-redux";
import store from "./app/store";




function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#194a7a'
      },
      secondary: {
        main: '#a3b7ca',
        secons: '#d1dbe4'
      },
    },
  });


  return (
    <>

      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>

      </ThemeProvider>

    </>
  )
}

export default App
