import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Menuitem from './Menuitem';
import Header from './Header';

import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

const defaultFn = () => {};

const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    // console.log(history);

    const current = history[history.length - 1];
    // console.log(current);
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <Menuitem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBackPage = () => {
        setHistory((prev) => {
            console.log([prev[0]]);
            console.log(prev);

            return prev.slice(0, prev.length - 1);
            // return [prev[prev.length - 2]];
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.tittle} onBack={handleBackPage} />}{' '}
                <div className={cx('menu-body')}>{renderItems()}</div>{' '}
            </PopperWrapper>
        </div>
    );

    const handleResestMenu = () => {
        setHistory((prev) => {
            return prev.slice(0, 1);
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[16, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResestMenu}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
