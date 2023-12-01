import styles from './Checkbox.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Checkbox() {
    return (
        <div className={cx('wrapper')}>
            <label className={cx('theme-switch')} for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className={cx('slider', 'round')}></div>
            </label>
        </div>
    );
}

export default Checkbox;
