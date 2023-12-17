import * as request from '~/utils/http';
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
