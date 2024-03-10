import { useList } from 'effector-react';
import './App.css';
import { $data, pageMounted } from './model';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    pageMounted();
  }, []);

  return (
    <div className="App">
      {useList($data, group => group.id)}
    </div>
  );
}
