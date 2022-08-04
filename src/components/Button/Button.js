import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link, NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    navLink,
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
    leftActiveIcon,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to && navLink) {
        props.to = to;
        Comp = NavLink;
    } else if (href) {
        props.href = href;
        Comp = NavLink;
    } else if (to) {
        props.to = to;
        Comp = Link;
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

    const defaultCom = () => (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );

    const navLinkCom = () => (
        <Comp className={(nav) => cx(classes, { active: nav.isActive })} {...props}>
            <span className={cx('icon')}>{leftIcon}</span>
            <span className={cx('icon-active')}>{leftActiveIcon}</span>
            <span>{children}</span>
        </Comp>
    );

    return Comp === NavLink ? navLinkCom() : defaultCom();
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
    leftIcon: propTypes.node,
    rightIcon: propTypes.node,
    rightActiveIcon: propTypes.node,
};

export default Button;
