import ReactDOM from 'react-dom/client';
import App from './App';
import { PredictionProvider } from './context/PredictionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PredictionProvider>
    <App />
  </PredictionProvider>
);