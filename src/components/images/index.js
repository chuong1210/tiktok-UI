import { React, forwardRef, useState } from 'react';
import images from '~/assests/image';
import styles from './Images.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ src, alt, className, fallback: customfallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customfallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
