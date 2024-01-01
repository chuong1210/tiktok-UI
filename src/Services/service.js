import * as request from '~/utils/httpRequest';
export const searchServices = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search?`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {}
};

export const userServices = async ({ page, perPage }) => {
    try {
        const res = await request.get(`users/suggested?`, {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {}
};

export const followingServices = async ({ page, perPage }) => {
    try {
        const res = await request.get(`users/followings?`, {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {}
};
