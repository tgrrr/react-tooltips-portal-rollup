import { useState, useCallback } from 'react';

const handleSetCoords = (node, setCoords) => {
    const rect = node.getBoundingClientRect();
    const { x, y, width } = rect;

    setCoords({
        left: x + width / 2, // add half the width of the el for centering
        top: y + window.scrollY - 10, // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
};

// TODO: offset count
function useCoords() {
    const [coords, setCoords] = useState({});

    const coordsRef = useCallback(node => {
        if (node !== null) {
            handleSetCoords(node, setCoords);
        }
    }, []);
    return [coords, coordsRef];
}

export default useCoords;
