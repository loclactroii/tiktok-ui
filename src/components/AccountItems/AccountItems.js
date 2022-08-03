import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../image';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wraper')}>
            <div className={cx('infomation')}>
                <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
                <div className={cx('details')}>
                    <h4>
                        {data.full_name}
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />}
                    </h4>
                    <p>{data.nickname}</p>
                </div>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: propTypes.object.isRequired,
};

export default AccountItem;
