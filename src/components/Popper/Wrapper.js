import styles from './Popper.module.scss';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
};

export default Wrapper;
