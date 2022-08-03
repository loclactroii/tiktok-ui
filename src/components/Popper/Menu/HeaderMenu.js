import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '~/components/Button';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function HeaderMenu({ title, onBack }) {
    return (
        <div className={cx('header-menu')}>
            <Button className={cx('back-btn')} onClick={onBack}>
                {<FontAwesomeIcon icon={faAngleLeft} />}
            </Button>
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

HeaderMenu.propTypes = {
    title: propTypes.string,
    onBack: propTypes.func,
};

export default HeaderMenu;
