import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
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

export default Button;
