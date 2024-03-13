import { useList, useUnit } from 'effector-react';
import { useEffect } from 'react';
import { Group } from '../components/Group/Group';
import {HeaderFilter} from '../components/HeaderFilter/HeaderFilter';
import styles from './App.module.css';
import { $displayedGroups, pageMounted } from './model';

export function App() {
  const pageMountedEvent = useUnit(pageMounted)

  useEffect(() => {
    pageMountedEvent();
  }, []);

  return (
    <main className={styles.App}>
      <HeaderFilter />
      <ul className={styles.groups}>
        {useList($displayedGroups, (group) => (
            <Group key={group.id} group={group} />
        ))}
      </ul>
    </main>
  );
}
