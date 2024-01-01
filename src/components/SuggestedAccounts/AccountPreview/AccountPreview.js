import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Image from '~/components/images/images';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} alt={data.nickname} src={data.avatar} />

                <Button className={cx('follow-btn')} primary>
                    Đăng kí
                </Button>
            </div>{' '}
            <div className={cx('body')}>
                <p className={cx('nickname', 'bold')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}{' '}
                </p>
                <p className={cx('name', 'bold')}>{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count} </strong>
                    <span className={cx('label')}>Follower </span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}> Like</span>
                </p>
            </div>
        </div>
    );
}
AccountPreview.propTypes = { data: PropTypes.object.isRequired };
export default AccountPreview;
