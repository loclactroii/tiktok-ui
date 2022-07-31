import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as TippyWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItems';
import { Button } from '~/components/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    setInterval(() => {
        setSearchResult([]);
    }, 0);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('innner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tik tok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <TippyWrapper>
                                <div className={cx('accounts')}>
                                    <span>Accounts</span>
                                </div>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </TippyWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('btn-section')}>
                    <Button outline thin rightIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
