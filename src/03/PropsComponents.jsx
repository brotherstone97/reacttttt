import React, {Component} from 'react';
import PropTypes from "prop-types";

class PropsComponents extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

PropsComponents.propTypes = {
    name: PropTypes.any,
};
export default PropsComponents;