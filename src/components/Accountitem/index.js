import classNames from 'classnames/bind';
import styles from './Accountitem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Accountitem({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                // src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c58ce2d54af44e9ddc3a45c084027788.jpeg?x-expires=1700146800&x-signature=98Qj%2BGoZW6AT94d%2Bb0qtEgGdNqI%3D"
                alt={data.bio}
                src={data.avatar}
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}{' '}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default Accountitem;
