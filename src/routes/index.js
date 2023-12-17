//Page
import Home from '~/page/Homes';
import Following from '~/page/Following';
import Profile from '~/page/Profiles';
import Upload from '~/page/Upload';
import Search from '~/page/search';
//Layout
import { HeaderOnly } from '~/components/Layout';
export const publicRouter = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/:nickname',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];
export const privateRouter = {};
