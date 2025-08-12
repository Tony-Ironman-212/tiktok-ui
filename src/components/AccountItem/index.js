import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7333963233059373077~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=a72b2b12&x-expires=1755118800&x-signature=Ok0R78nk57cUOTPa%2BB7UJ5N%2Bn9I%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my'
        alt='hoa'
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
