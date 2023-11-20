/* eslint-disable jsx-a11y/alt-text */
import styles from './Header.module.scss';
import classnames from 'classnames/bind';
import images from '~/assests/image';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountitem from '~/components/Accountitem';
import Button from '~/components/Button';
const cx = classnames.bind(styles);
function Header() {
    const [searchResult, setsearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([]);
        }, 0);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>

                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx('actions')}>
                    <Button LeftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
