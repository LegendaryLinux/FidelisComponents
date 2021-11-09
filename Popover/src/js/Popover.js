import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPopper } from '@popperjs/core';
import '../styles/Popover.scss';

/**
 * Provides a render container for popups. The popups should be styled
 * as a rectangular box with a triangular pointer on the upside.
 *
 * Props content Anything passed in on this prop will be rendered in a contentId Div
 */
class Popover extends Component {
  constructor(props) {
    super(props);
    this.triggerRef = React.createRef();
    this.contentRef = React.createRef();
    this.popperInstance = null;
    this.state = {
      popoverVisible: false,
    };
  }

  componentDidMount() {
    const trigger = this.triggerRef.current;
    const content = this.contentRef.current;
    this.popperInstance = createPopper(trigger, content, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        }
      ],
    });

    trigger.addEventListener('click', (evt) => {
      this.state.popoverVisible ? this.hidePopover() : this.showPopover();

      // Prevent event from bubbling to document body, thus preventing the popover from closing immediately
      // after it opens, which to the user looks like the popover never opened
      evt.stopPropagation();
    });

    // Prevent click events from bubbling up to the document body. This prevents the popover from closing if
    // the user clicks within its boundaries
    content.addEventListener('click', (evt) => evt.stopPropagation());
  }

  // Show popover, update position
  showPopover = () => {
    this.setState({ popoverVisible: true }, () => {
      window.addEventListener('click', this.hidePopover);
      this.contentRef.current.setAttribute('data-show', '');
      this.popperInstance.update();
    });
  };

  // Hide popover
  hidePopover = () => {
    this.setState({ popoverVisible: false }, () => {
      window.removeEventListener('click', this.hidePopover);
      this.contentRef.current.removeAttribute('data-show');
    });
  }

  render() {
    return (
      <>
        <div ref={this.triggerRef} className="popover-trigger">{this.props.trigger}</div>
        <div ref={this.contentRef} className="popover-content" data-popper-placement={this.props.position}>
          {this.props.content}
          <div className="popover-arrow" data-popper-arrow />
        </div>
      </>
    );
  }
}

Popover.propTypes = {
  trigger: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  position: PropTypes.string,
};

Popover.defaultProps = {
  position: 'left',
};

export default Popover;
