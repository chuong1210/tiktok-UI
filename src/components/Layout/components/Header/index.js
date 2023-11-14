/* eslint-disable jsx-a11y/alt-text */
import styles from './Header.module.scss';
import classnames from 'classnames/bind';
import images from '~/assests/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);
function Header() {
    console.log(images);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} />
                <div className={cx('search')}>
                    <input type="text" placeholder="Search account and videos" spellCheck={true} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
