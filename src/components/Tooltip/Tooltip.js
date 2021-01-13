import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

// FIXME: import styles from './Tooltip.module.css';
const styles = {
    popover: {
        position: 'absolute',
        width: 200,
        transform: 'translate(-100px, -100%)',
    },
};

const Tooltip = ({ children }) => {
    const [coords, setCoords] = useState({}); // takes current button coordinates

    useEffect(() => {
        const updateTooltipCoords = button => {
            const rect = button.getBoundingClientRect();
            setCoords({
                left: rect.x + rect.width / 2, // add half the width of the button for centering
                top: rect.y + window.scrollY, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
            });
        };

        // TODO: move this logic to container
        const updateCoords = debounce(updateTooltipCoords, 100);
        // TODO: move this to top level component
        window.addEventListener('resize', updateCoords);
        return () => window.removeEventListener('resize', updateCoords);
    }, []);

    // FIXME: styles here
    return (
    // TODO: wrap this style in cx
        <div
            className='placement-top'
            style={{ ...styles.popover, ...coords }}
        >
            <div className='content'>
                <div className='arrow' />
                <div className='inner' role='tooltip'>
                    <div>
                        <div className='inner-content'>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
