import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Cria um elemento raiz usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do elemento raiz
root.render(
  // O modo restrito (StrictMode) envolve o componente App para ativar verificações adicionais e avisos no modo de desenvolvimento
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
