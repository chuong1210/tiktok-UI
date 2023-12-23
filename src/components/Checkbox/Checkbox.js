import { useEffect, useState } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const root = document.documentElement;

        root.style.setProperty('--white', isChecked ? '#191818' : '#fff');
        root.style.setProperty('--black', isChecked ? '#fff' : '#191818');
    }, [isChecked]);

    const onColor = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className={cx('wrapper')}>
            <label className={cx('theme-switch')} for="checkbox">
                <input type="checkbox" id="checkbox" checked={isChecked} onChange={onColor} />
                <div className={cx('slider', 'round')}></div>
            </label>
        </div>
    );
}

export default Checkbox;
