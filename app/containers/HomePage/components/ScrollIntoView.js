import React from 'react';
import PropTypes from 'prop-types';

class ScrollIntoView extends React.Component {
  componentDidMount() {
    this.scroll();
  }

  componentDidUpdate() {
    this.scroll();
  }

  scroll() {
    const { id } = this.props;
    if (!id) {
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView();
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollIntoView.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default ScrollIntoView;
