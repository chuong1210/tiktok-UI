/* eslint-disable jsx-a11y/alt-text */
import styles from './Header.module.scss';
import classnames from 'classnames/bind';
import images from '~/assests/image';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/border.css';
import 'tippy.js/dist/svg-arrow.css';

import 'tippy.js/dist/tippy.css'; // optional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faEarthAfrica,
    faSave,
    faCoins,
    faSignOut,
    faGear,
} from '@fortawesome/free-solid-svg-icons';

import { faKeyboard, faLightbulb, faMoon, faQuestionCircle, faUser } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '~/components/Search';
import Checkbox from '~/components/Checkbox';
import { MessageIcon } from '~/components/icons';
import Image from '~/components/images';
const cx = classnames.bind(styles);

const Menu_Items = [
    {
        icon: <FontAwesomeIcon icon={faEarthAfrica} />,
        title: 'Tiếng việt',
        children: {
            tittle: 'Language',
            data: [
                { code: 'en', title: 'English', type: 'language' },
                { code: 'vi', title: 'Tiếng việt', type: 'language' },
                { code: 'jp', title: 'Japanese', type: 'language' },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faQuestionCircle} />, title: 'Phản hồi và trợ giúp', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Phím tắt trên bàn phím' },
    { icon: <FontAwesomeIcon icon={faLightbulb} />, title: 'Trung tâm nhà sáng tạo live' },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
        action: (flag) => {
            return !flag;
        },
        component: Checkbox,
    },
];
function Header() {
    const currentUser = true;

    const handleMenuChange = (Menuitem) => {
        switch (Menuitem.type) {
        }
        console.log(Menuitem);
    };

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'Xem hồ sơ', to: '/@user', separate: true },
        { icon: <FontAwesomeIcon icon={faSave} />, title: 'Yêu thích', to: '/@favorite' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Nhận xu', to: '/coin' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Cài đặt', to: '/setiing' },

        ...Menu_Items,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper', currentUser ? '' : 'half-width')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo-link')}>
                    <img src={images.logo} />
                </Link>
                {/*Search */} <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button LeftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                                Tải lên
                            </Button>

                            <button className={cx('action-btn')}>
                                {' '}
                                <img src={images.computer} />
                            </button>
                            <Tippy delay={[0, 200]} content="Hộp thư" arrow placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <img src={images.send} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button LeftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                                Tải lên
                            </Button>

                            <Button primary>Đăng nhập </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : Menu_Items} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="COn chó"
                                fallback="https://somoskudasai.com/wp-content/uploads/2020/08/81KuXJUrVFL.jpg"
                                src="https://www.hdwallpaper.nu/wp-content/uploads/2017/04/koe_no_katachi-3.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
