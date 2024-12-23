// package
import { RouterProvider } from 'react-router-dom';
// slice
import './global.css';
import { Router } from './router/Router';
// layer
import { PrivateChannelProvider } from '@/shared/context/privateChannelContext';


function App() {
   return (
      <PrivateChannelProvider>
         <RouterProvider router={Router} />
      </PrivateChannelProvider>
   );
}

export default App;
