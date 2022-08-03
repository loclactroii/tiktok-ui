import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import { Button } from '~/components/Button';
import {
    CoinIcon,
    InboxIcon,
    KeybroadIcon,
    LanguageIcon,
    LogOutIcon,
    MessagesIcon,
    QuestIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/image';
import { Menu } from '~/components/Popper/Menu';
import config from '~/config';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const CONTENT_DETAILS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語（日本）',
                },
            ],
        },
    },
    {
        icon: <QuestIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeybroadIcon />,
        title: 'Keybroad shortcuts',
    },
];

const USER_LOGIN_DETAILS = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...CONTENT_DETAILS,
    {
        icon: <LogOutIcon />,
        title: 'Log out',
        to: '/logout',
        border_top: true,
    },
];

function Header() {
    const userLogin = true;

    function handleChange(menuItem) {
        console.log(menuItem);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('innner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tik tok" />
                </Link>
                <Search />
                <div className={cx('btn-section')}>
                    <Button outline thin leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {!userLogin ? (
                        <>
                            <Button primary>Log in</Button>
                            <Menu userLogin items={CONTENT_DETAILS} onChange={handleChange}>
                                <button className={cx('icon-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Tippy content="Message">
                                <button className={cx('icon-login')}>
                                    <MessagesIcon className={cx('messages-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('icon-login')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                            <Menu items={USER_LOGIN_DETAILS}>
                                <Image
                                    className={cx('img')}
                                    src="http://cdn.shopify.com/s/files/1/0529/2641/5045/products/aqualium_top.png?v=1656492696"
                                    alt="Aqua"
                                />
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
