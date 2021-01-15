import React from 'react';

const styles = {
    popover: {
        position: 'absolute',
        width: 200,
        transform: 'translate(-100px, -100%)',
    },
};

const Tooltip = ({ children, coords }) => (
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

export default Tooltip;
