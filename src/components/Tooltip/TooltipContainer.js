import React, { useState, useEffect } from 'react';
import Portal from '../Portal';
import Tooltip from './Tooltip';
import {
    useCoords,
    useHover,
    useResize,
    useScroll,
    usePrevious,
} from '../../hooks';

const TooltipContainer = ({
    children,
    content,
}) => {
    const [coords, coordsRef] = useCoords();
    const [isHovered, hoverRef] = useHover();
    const [width] = useResize();
    const [isScroll, setIsScroll] = useScroll();
    const [isShow, setIsShow] = useState(false);

    // Disable tooltip on scroll
    useEffect(() => {
        setIsShow(false);
    }, [isScroll, setIsShow]);

    // Reset state after scrolling is finished
    useEffect(() => {
        if (isHovered) {
            setIsShow(true);
            setIsScroll(false);
        } else {
            setIsShow(false);
        }
    }, [isHovered, setIsScroll]);

    const prevWidth = usePrevious(width) || false;

    useEffect(() => {
        // Hide tooltip if window is resized:
        (prevWidth !== width) && setIsShow(false);
        // TODO: reset coords here
    }, [prevWidth, width]);

    return (
        <>
            {/* Target: */}
            <div ref={hoverRef}>
                <div ref={coordsRef}>
                    {children}
                </div>
            </div>

            {/* Tooltip: */}
            {isShow && (
                <Portal>
                    <Tooltip coords={coords}>
                        {content}
                    </Tooltip>
                </Portal>
            )}
        </>
    );
};

export default TooltipContainer;
