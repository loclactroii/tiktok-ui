import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import React from 'react';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faPlus,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as TippyWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItems';
import { Button } from '~/components/Button';
import { Menu } from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const CONTENT_DETAILS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        content: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        content: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        content: 'Keybroad shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

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
                    <Button outline thin leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>

                    <Menu items={CONTENT_DETAILS}>
                        <button className={cx('icon-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
