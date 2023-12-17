/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useRef } from 'react';
import Accountitem from '../Accountitem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import axios from 'axios';
import Request from '~/utils/http';
import * as request from '~/utils/http';

import * as searchServices from '~/apiServices/apiservice';

const cx = classNames.bind(styles);

const index = () => {
    const [showResult, setshowResult] = useState(true);

    const [searchValue, setsearchValue] = useState('');

    const [searchResult, setsearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!searchValue.trim()) {
            setsearchResult([]);

            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.searchServices(debounced);
            setsearchResult(result);

            setLoading(false);
        };
        fetchApi();
        // setLoading(true);
        // const fetchApi = async () => {
        //     try {
        //         const res = await request.get(`users/search?`, {
        //             params: {
        //                 q: deboundced,
        //                 type: 'less',
        //             },
        //         });
        //         setLoading(false);
        //         setsearchResult(res.data);
        //     } catch (error) {
        //         setLoading(false);
        //     }
        // };
        // fetchApi();

        // axios
        // Request.
        // request ->cuoi
        //     .get(`users/search?`, {
        //         params: {
        //             q: searchValue,
        //             type: 'less',
        //         },
        //     })
        //     .then((e) => {
        //         setLoading(false);
        //         // setsearchResult(e.data.data);
        //         setsearchResult(e.data);

        //         // e.json().then((res) => setsearchResult(res.data));
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    }, [debounced]);
    //Để khắc phục vấn đề, bạn nên sử dụng useEffect
    // với mảng phụ thuộc chỉ chứa những giá trị thực sự
    // ảnh hưởng đến việc fetch dữ liệu, trong trường hợp này là searchValue.
    // Khi searchValue thay đổi, useEffect sẽ được kích hoạt và thực hiện việc fetch dữ liệu với tham số mới.

    const inputRef = useRef();

    const CancleClick = () => {
        setsearchValue('');
        setsearchResult([]);

        inputRef.current.focus();
    };

    const handleBlur = () => {
        setshowResult(false);
    };
    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>

                            {searchResult.map((rs) => (
                                <Accountitem key={rs.id} data={rs} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleBlur}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search account and videos"
                        spellCheck={true}
                        onChange={(e) => {
                            setsearchValue(e.target.value);
                            // if (e.target.value === ' ') {
                            //     setsearchValue('');
                            // }
                            const inputValue = e.target.value;

                            // Kiểm tra xem nếu dấu cách là ký tự đầu tiên, thì không cập nhật giá trị
                            if (inputValue.trim() === '' && inputValue.length === 1) {
                                setsearchValue('');
                                return;
                            }
                        }}
                        onFocus={(e) => {
                            setshowResult(true);
                        }}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={CancleClick}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default index;
