import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
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
const cx = classNames.bind(styles);
function Sidebar() {
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
            <SuggestedAccounts label="Suggested Icon" />
            <SuggestedAccounts label="Following Icon" />{' '}
        </aside>
    );
}

export default Sidebar;
