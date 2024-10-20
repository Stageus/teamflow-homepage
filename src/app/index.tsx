import { RouterProvider } from "react-router-dom";
import './global.css';
import { Router } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
