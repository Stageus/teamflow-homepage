import { RouterProvider } from "react-router-dom";
import './global.css';
import { Router } from "./Router";
import { DarkThemeProvider } from "@shared/store/darkTheme";

function App() {

  return (
    <>
    <DarkThemeProvider>
      <RouterProvider router={Router}/>
    </DarkThemeProvider>
    </>
  )
}

export default App
