import './GlobalStyles.scss';
import propTypes from 'prop-types';

function GlobalStyle({ children }) {
    return children;
}

GlobalStyle.propTypes = {
    children: propTypes.element.isRequired,
};

export default GlobalStyle;
