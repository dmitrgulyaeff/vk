import { useList, useUnit } from 'effector-react';
import styles from './App.module.css';
import { $data, pageMounted } from './model';
import { useEffect } from 'react';
import { Group } from '../components/Group/Group';
import { $avatarFilter, $friendsFilter, $privetFilter } from '../components/HeaderFilter/model';
import HeaderFilter from '../components/HeaderFilter/HeaderFilter';

export function App() {
  const data = useUnit($data);
  const privetFilter = useUnit($privetFilter);
  const avatarFilter = useUnit($avatarFilter);
  const friendsFilter = useUnit($friendsFilter)
  useEffect(() => {
    pageMounted();
  }, []);

  return (
    <div className={styles.App}>
      <HeaderFilter/>
      <div className={styles.groups}>
        {data.map(
          (group) =>
          (privetFilter === "" || privetFilter === '' + group.closed)
          && (avatarFilter === "" || avatarFilter === "" + group?.avatar_color) 
          && (friendsFilter === "" || Boolean(+friendsFilter) === Boolean(group.friends?.length)) 
          && <Group key={group.id} group={group} />
        )}
      </div>
    </div>
  );
}
