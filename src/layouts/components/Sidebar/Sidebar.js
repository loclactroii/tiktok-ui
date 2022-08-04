import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { MenuSidebar } from './MenuSidebar';
import { Button } from '~/components/Button';
import config from '~/config';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UsersActiveIcon, UsersIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar className={cx('nav')}>
                <Button
                    large
                    navLink
                    leftIcon={<HomeIcon />}
                    leftActiveIcon={<HomeActiveIcon />}
                    className={cx('nav-item')}
                    to={config.routes.home}
                >
                    For You
                </Button>
                <Button
                    large
                    navLink
                    leftIcon={<UsersIcon />}
                    leftActiveIcon={<UsersActiveIcon />}
                    className={cx('nav-item')}
                    to={config.routes.following}
                >
                    Following
                </Button>
                <Button
                    large
                    navLink
                    leftIcon={<LiveIcon />}
                    leftActiveIcon={<LiveActiveIcon />}
                    className={cx('nav-item')}
                    to={config.routes.live}
                >
                    LIVE
                </Button>
            </MenuSidebar>
        </aside>
    );
}

export default Sidebar;
