// import state v.v... từ thư viện React
import React, { useState } from 'react';

// import thư viện classnames
import classNames from 'classnames/bind';

// import liên quan đến fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from '@fortawesome//free-solid-svg-icons';

// import của thư viện tippy
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

// import file tĩnh, component của mình
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  setTimeout(() => {
    setSearchResults([]);
  }, 0);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='Tiktok' />
        </div>
        <Tippy
          interactive={true}
          visible={searchResults.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder='Search accounts and videos'
              spellCheck={false}
            />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
