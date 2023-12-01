import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import { Fragment } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Menuitem({ data, onClick }) {
    let Layout = Fragment;
    if (data.component === undefined) {
        Layout = Fragment;
    } else {
        Layout = Checkbox;
    }
    const classes = cx('option', { separate: data.separate });
    return (
        <Button className={classes} to={data.to} LeftIcon={data.icon} RighIcon={<Layout />} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default Menuitem;
