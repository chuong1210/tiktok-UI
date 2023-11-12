import styles from './Header.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function Header() {
    console.log(cx);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
