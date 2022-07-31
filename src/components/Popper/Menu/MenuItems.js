import { Button } from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('item')} onClick={onClick}>
            <span>{data.title}</span>
        </Button>
    );
}

export default MenuItem;
