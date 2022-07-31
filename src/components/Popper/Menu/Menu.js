import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    function renderItems() {
        return items.map((item, index) => <MenuItem data={item} key={index} />);
    }

    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more-details')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('pb-8')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
