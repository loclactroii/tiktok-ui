import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wraper')}>
            <div className={cx('infomation')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~c5_300x300.webp?x-expires=1659366000&x-signature=ywrnMi7k4VCGzS21tDdNOzHXTFA%3D"
                    alt="avatar"
                />
                <div className={cx('details')}>
                    <h4>
                        Loclactroi
                        <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
                    </h4>
                    <p>tanloc</p>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
