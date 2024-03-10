import { useUnit } from 'effector-react';
import viteLogo from '/vite.svg';
import reactLogo from '../assets/react.svg';
import effectorLogo from '../assets/effector.png';
import './App.css';
import { $counter, buttonClicked, $data, pageMounted } from './model';
import { useEffect } from 'react';

export function App() {
  // Используем useStore для подписки на изменения в хранилище $counter
  const counter = useUnit($counter);
  // Используем useStore для подписки на изменения в хранилище $data
  const data = useUnit($data);

  useEffect(() => {
    pageMounted();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{data}</h1>
        <a href="https://effector.dev" target="_blank">
          <img
            src={effectorLogo}
            className="logo effector"
            alt="Effector logo"
          />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Effector + Vite + React</h1>
      <div className="card">
        <button onClick={() => buttonClicked()}>count is {counter}</button>
        <p>
          Edit <code>src/application.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Effector, Vite, and React logos to learn more
      </p>
    </div>
  );
}
