import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import { CardProvider } from './context/CardContext';
import AnimatedRoutes from './components/AnimatedRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <CardProvider>
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
    </CardProvider>
  </React.StrictMode>
);


