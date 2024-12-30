// package
import { RouterProvider } from 'react-router-dom';
// slice
import './global.css';
import { Router } from './router/Router';
// layer
import { PrivateChannelProvider } from '@/shared/context/privateChannelContext';
import { ModalProvider } from '@/shared/context/modalContext';

function App() {
   return (
      <ModalProvider>
         <PrivateChannelProvider>
            <RouterProvider router={Router} />
         </PrivateChannelProvider>
      </ModalProvider>
   );
}

export default App;
