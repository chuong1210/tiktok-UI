import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    to,
    href, //ctrl + alt +->,ctrl+shif+ ^
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    children,
    type,
    rounded = false,
    LeftIcon,
    RighIcon,

    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    // console.log({ ...passProps });
    const props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof [key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline: outline,
        small: small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,

        // [type]: true,
    });

    return (
        <Comp className={classes} {...props}>
            {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {RighIcon && <span className={cx('icon')}>{RighIcon}</span>}
        </Comp>
    );
}

Button.propTyoes = {
    to: PropTypes.string, //ctril ở cuối bấm đầu r tab
    href: PropTypes.string, //ctrl alt -> = end
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,

    disabled: PropTypes.bool,

    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    LeftIcon: PropTypes.node,
    RighIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
