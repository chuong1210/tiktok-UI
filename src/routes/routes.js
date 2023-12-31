//Page
import Home from '~/page/Homes';
import Following from '~/page/Following';
import Profile from '~/page/Profiles';
import Upload from '~/page/Upload';
import Search from '~/page/search';
import Explore from '~/page/Explore';
import Live from '~/page/Live';
//Layout
import { HeaderOnly } from '~/layouts';

import Config from '~/config';
import routes from '~/config/routes';
export const publicRouter = [
    {
        path: Config.routes.home,
        component: Home,
    },
    {
        path: Config.routes.following,
        component: Following,
    },
    {
        path: Config.routes.explore,
        component: Explore,
    },
    {
        path: Config.routes.profile,
        component: Profile,
    },
    {
        path: Config.routes.live,
        component: Live,
    },
    {
        path: Config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: Config.routes.search,
        component: Search,
        layout: null,
    },
];
export const privateRouter = {};
