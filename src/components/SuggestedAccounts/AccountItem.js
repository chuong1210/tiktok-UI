import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[500, 0]} placement={'bottom'} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('user-avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c25d927ed1533ee737cfb1f829c3e96a.jpeg?lk3s=a5d48078&amp;x-expires=1703851200&amp;x-signature=Ey%2Bfnuql4JhNppLfstRf8I08gJs%3D"
                        alt="hihi"
                    />

                    <div className={cx('item-info')}>
                        <span className={cx('nickname')}>
                            <strong>UserName</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </span>
                        <span className={cx('name', 'bold')}>Name</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
