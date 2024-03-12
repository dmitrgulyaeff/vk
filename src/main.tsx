import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import './index.css';
import { enableMocking } from './mocks/enableMocking';

const container = document.querySelector('#root') as HTMLElement;

const root = ReactDOM.createRoot(container);

enableMocking().then(() => {
  root.render(<App />);
});
