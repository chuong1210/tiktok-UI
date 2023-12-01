import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Menuitem from './Menuitem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

const Menu = ({ children, items = [], onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    // console.log(history);

    const current = history[history.length - 1];

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
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[16, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Ngôn ngữ"
                                onBack={() => {
                                    setHistory((prev) => {
                                        console.log([prev[0]]);
                                        console.log(prev);

                                        return prev.slice(0, prev.length - 1);
                                        // return [prev[prev.length - 2]];
                                    });
                                }}
                            />
                        )}{' '}
                        {renderItems()}{' '}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => {
                    return prev.slice(0, 1);
                });
            }}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
