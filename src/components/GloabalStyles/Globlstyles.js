import './Globalstyles.scss';
import PropTypes from 'prop-types';

import React from 'react';
function GlobaStyles({ children }) {
    // return React.Children.only(children); chỉ có 1 con duy nhất

    return children;
}
GlobaStyles.propTypes = { children: PropTypes.node.isRequired };
export default GlobaStyles;
