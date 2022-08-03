import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    thin,
    primary,
    outline,
    rounded,
    disabled,
    large,
    small,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Temp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Temp = Link;
    } else if (href) {
        props.href = href;
        Temp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        large,
        small,
        rounded,
        disabled,
        thin,
    });

    return (
        <Temp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Temp>
    );
}

Button.propTypes = {
    to: propTypes.string,
    href: propTypes.string,
    onClick: propTypes.func,
    children: propTypes.node,
    thin: propTypes.bool,
    primary: propTypes.bool,
    outline: propTypes.bool,
    rounded: propTypes.bool,
    disabled: propTypes.bool,
    large: propTypes.bool,
    small: propTypes.bool,
    className: propTypes.string,
    leftIcon: propTypes.element,
    rightIcon: propTypes.element,
};

export default Button;
