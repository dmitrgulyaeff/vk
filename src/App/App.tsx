import { useList } from 'effector-react';
import styles from './App.module.css';
import { $data, pageMounted } from './model';
import { useEffect } from 'react';
import { Group } from '../components/Group/Group';

export function App() {
  useEffect(() => {
    pageMounted();
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.groups}>

      {useList($data, (group) => (
        <Group group={group}/>
        ))}
        </div>
    </div>
  );
}
