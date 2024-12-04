// package
import { RouterProvider } from 'react-router-dom';
// slice
import './global.css';
import { Router } from './router/Router';


function App() {
   return (
      <>
         <RouterProvider router={Router} />
      </>
   );
}

export default App;
