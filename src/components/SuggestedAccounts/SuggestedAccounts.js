import React from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const SuggestedAccounts = ({ label, data = [], onViewChange = () => {}, isSeeAll = false }) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((rs) => (
                <AccountItem key={rs.id} data={rs} />
            ))}

            <p className={cx('more-btn')} onClick={() => onViewChange(!isSeeAll)}>
                {isSeeAll ? 'See Less' : 'See All'}
            </p>
        </div>
    );
};

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default SuggestedAccounts;
