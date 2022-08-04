import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuSidebar({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

MenuSidebar.propTypes = {
    children: propTypes.node.isRequired,
};

export default MenuSidebar;
