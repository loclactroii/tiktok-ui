import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItems';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange }) {
    const [state, setState] = useState([{ data: items }]);
    const finalArray = state[state.length - 1];

    function renderItems() {
        return finalArray.data.map((item, index) => {
            const isChildren = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isChildren) {
                            setState((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    }

    return (
        <Tippy
            hideOnClick={hideOnClick}
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more-details')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('pb-8')}>
                        {state.length > 1 && (
                            <HeaderMenu
                                title="Language"
                                onBack={() => {
                                    setState((prev) => prev.slice(0, state.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
