import React, { useState } from 'react';
import Portal from '../Portal/Portal';
import Tooltip from './Tooltip.js';

const TooltipContainer = ({
    children,
    content,
}) => {
    const [isShow] = useState(false);

    return (
        <>
            {/* Target: */}
            {children}

            {/* Tooltip: */}
            {isShow && (
                <Portal>
                    <Tooltip>
                        {content}
                    </Tooltip>
                </Portal>
            )}
        </>
    );
};

export default TooltipContainer;
