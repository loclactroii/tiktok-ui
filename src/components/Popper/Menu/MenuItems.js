import { Button } from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, className }) {
    const classes = cx('item', {
        border_top: data.border_top,
        className: className,
    });
    return (
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: propTypes.object.isRequired,
    onClick: propTypes.func,
    className: propTypes.string,
};

export default MenuItem;
