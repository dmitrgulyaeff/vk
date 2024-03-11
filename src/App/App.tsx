import { useList, useUnit } from 'effector-react';
import styles from './App.module.css';
import { $data, $displayedData, pageMounted } from './model';
import { useEffect } from 'react';
import { Group } from '../components/Group/Group';
import HeaderFilter from '../components/HeaderFilter/HeaderFilter';

export function App() {
  useEffect(() => {
    pageMounted();
  }, []);

  return (
    <div className={styles.App}>
      <HeaderFilter />
      <div className={styles.groups}>
        {useList($displayedData, (group) => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
