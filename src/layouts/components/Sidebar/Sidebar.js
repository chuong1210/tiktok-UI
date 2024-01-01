import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import { useState, useEffect } from 'react';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    ExploreIcon,
    LiveIcon,
    UserIcon,
    HomeActiveIcon,
    UserActiveIcon,
    ExploreActiveIcon,
    LiveActiveIcon,
} from '~/components/icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { followingServices, userServices } from '~/Services/service';
import { debounce } from 'lodash';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUser, SetSuggestedUser] = useState([]);
    const [followingUser, SetFollowingUser] = useState([]);

    const [page, SetPage] = useState(INIT_PAGE);
    const [isSeeAll, SetSeeAll] = useState(false);

    const prevUser = [];
    const debouncedHandleSeeAll = debounce(() => {
        SetPage((prevPage) => prevPage + 1);
    }, 300); // Adjust the debounce delay as needed
    const [flag, setFlag] = useState(0);

    useEffect(() => {
        userServices({ page, perPage: PER_PAGE })
            .then((data) => {
                if (flag > 0) {
                    const newData = data.filter(
                        (newItem) => !suggestedUser.some((prevItem) => prevItem.id === newItem.id),
                    );
                    console.log(newData);
                    SetSuggestedUser((prevUser) => [...prevUser, ...newData]);
                } else if (flag === 0) {
                    SetSuggestedUser(data);
                    setFlag(flag + 1);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    useEffect(() => {
        followingServices({ page, perPage: PER_PAGE })
            .then((data) => {
                if (flag > 0) {
                    const newData = data.filter(
                        (newItem) => !followingUser.some((prevItem) => prevItem.id === newItem.id),
                    );
                    console.log(newData);
                    SetFollowingUser((prevUser) => [...prevUser, ...newData]);
                } else if (flag === 0) {
                    SetFollowingUser(data);
                    setFlag(flag + 1);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);
    const handleViewChange = () => {
        SetSeeAll((prevState) => !prevState);
        if (isSeeAll) {
            SetPage(page + 1);
        } else {
        }
        // debouncedHandleSeeAll();
    };
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserIcon />}
                    activeIcon={<UserActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />

                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    src="https://www.hdwallpaper.nu/wp-content/uploads/2017/04/koe_no_katachi-3.jpg"
                />
            </Menu>
            <SuggestedAccounts
                label="Suggested Icon"
                isSeeAll={isSeeAll}
                data={suggestedUser}
                onViewChange={handleViewChange}
            />
            <SuggestedAccounts label="Following Icon" data={followingUser} onViewChange={handleViewChange} />{' '}
        </aside>
    );
}

export default Sidebar;
