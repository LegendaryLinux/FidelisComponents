import React, {useState} from 'react';
import { Popover as TinyPopover, ArrowContainer } from 'react-tiny-popover';
import './Popover.css';

const Popover = ({trigger, content, position='top', hideArrow=false, arrowColor='#000000',
                  arrowSize=6, distance=0}) => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const togglePopover = () => setPopoverVisible(!popoverVisible);

  return (
    <div onClick={togglePopover}>
      <TinyPopover
        isOpen={popoverVisible}
        onClickOutside={togglePopover}
        reposition={true}
        padding={distance}
        positions={[position, 'top', 'bottom', 'left', 'right']}
        content={({position, childRect, popoverRect}) => hideArrow ? content : (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={arrowColor}
            arrowSize={arrowSize}
          >{content}
          </ArrowContainer>
        )}
      >{trigger}
      </TinyPopover>
    </div>
  );
};

export default Popover;
