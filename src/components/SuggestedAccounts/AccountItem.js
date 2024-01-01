import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/';
import Image from '../images/images';

const cx = classNames.bind(styles);
function AccountItem({ data = {} }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[500, 0]} placement={'bottom'} render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('user-avatar')} src={data.avatar} alt={data.nickname} />

                    <div className={cx('item-info')}>
                        <span className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}{' '}
                        </span>
                        <span className={cx('name', 'bold')}>{`${data.first_name} ${data.last_name}`}</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = { data: PropTypes.object.isRequired };
export default AccountItem;
