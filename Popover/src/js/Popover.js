import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover as TinyPopover, ArrowContainer } from 'react-tiny-popover';
import '../styles/Popover.css';

/**
 * Provides a render container for popups. The popups should be styled
 * as a rectangular box with a triangular pointer on the upside.
 *
 * Props content Anything passed in on this prop will be rendered in a contentId Div
 */
class Popover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false,
    };
  }

  togglePopover = () => this.setState({ popoverVisible: !this.state.popoverVisible });

  render() {
    return (
      <div onClick={this.togglePopover}>
        <TinyPopover
          isOpen={this.state.popoverVisible}
          onClickOutside={this.togglePopover}
          reposition={true}
          padding={this.props.distance}
          positions={[this.props.position, 'top', 'bottom', 'left', 'right']}
          content={({position, childRect, popoverRect}) => this.props.hideArrow ? this.props.content : (
            <ArrowContainer
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor={this.props.arrowColor}
              arrowSize={this.props.arrowSize}
            >{this.props.content}
            </ArrowContainer>
          )}
        >{this.props.trigger}
        </TinyPopover>
      </div>
    );
  }
}

Popover.propTypes = {
  trigger: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  position: PropTypes.string,
  hideArrow: PropTypes.bool,
  arrowColor: PropTypes.string,
  arrowSize: PropTypes.number,
  skidding: PropTypes.number,
  distance: PropTypes.number,
};

Popover.defaultProps = {
  position: 'top',
  hideArrow: false,
  arrowColor: '#000000',
  arrowSize: 6,
  skidding: 0,
  distance: 0,
};

export default Popover;
