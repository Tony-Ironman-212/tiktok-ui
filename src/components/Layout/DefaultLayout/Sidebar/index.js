import styles from './Sidebar.module.scss';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sidebar</h2>
    </aside>
  );
}

export default Sidebar;
