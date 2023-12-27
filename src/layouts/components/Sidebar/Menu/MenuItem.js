import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import Images from '~/components/images';
const cx = classNames.bind(styles);
const MenuItem = ({ title, to, icon, src, activeIcon }) => {
    const hasSrc = src !== undefined && src !== null;

    return (
        <NavLink
            className={(nav) => {
                return cx('menu-item', { active: nav.isActive });
            }}
            to={to}
        >
            {hasSrc && <Images className={cx('user-avatar')} src={src} />}
            {hasSrc || <span className={cx('icon')}>{icon}</span>}
            {hasSrc || <span className={cx('active-icon')}>{activeIcon}</span>}

            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;
