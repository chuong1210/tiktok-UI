import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    alt=""
                    src="https://img62.pixhost.to/images/160/242511251_stars-247_uncensored_leaked-mp4_snapshot_01-51-17-671.jpg"
                />

                <Button className={cx('follow-btn')} primary>
                    Đăng kí
                </Button>
            </div>{' '}
            <div className={cx('body')}>
                <p className={cx('nickname', 'bold')}>
                    <strong>UserName</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name', 'bold')}>Name</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>2.7M </strong>
                    <span className={cx('label')}>Follower </span>
                    <strong className={cx('value')}>120.1M</strong>
                    <span className={cx('label')}> Like</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
