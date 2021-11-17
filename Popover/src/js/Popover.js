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
    this.triggerClass = `popover-${Math.random() * 1000000000}`;
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
      placement: this.props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [this.props.skidding, this.props.distance],
          },
        }
      ],
    });

    trigger.addEventListener('click', (evt) => {
      this.state.popoverVisible ? this.hidePopover() : this.showPopover(evt);
    });

    // Prevent click events from bubbling up to the document body. This prevents the popover from closing if
    // the user clicks within its boundaries
    content.addEventListener('click', (evt) => evt.stopPropagation());
  }

  // Show popover, update position
  showPopover = (evt) => {
    this.setState({ popoverVisible: true }, () => {
      this.contentRef.current.setAttribute('data-show', '');
      this.popperInstance.update().then(() => {
        // Wait 50 milliseconds before adding the close listener. This allows the original event to finish propagating,
        // and prevents the popover from closing immediately after it opens
        setTimeout(() => window.addEventListener('click', this.hidePopover), 50);
      });
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
      <div className="popover-wrapper">
        <div ref={this.triggerRef} className="popover-trigger">{this.props.trigger}</div>
        <div ref={this.contentRef} className="popover-content">
          {this.props.content}
          {
            (this.props.hideArrow || (this.props.distance < 8)) ?
              null :
              <div className="popover-arrow" data-popper-arrow="" />
          }
        </div>
      </div>
    );
  }
}

Popover.propTypes = {
  trigger: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  placement: PropTypes.string,
  hideArrow: PropTypes.bool,
  skidding: PropTypes.number,
  distance: PropTypes.number,
};

Popover.defaultProps = {
  placement: 'bottom',
  hideArrow: false,
  skidding: 0,
  distance: 8,
};

export default Popover;
