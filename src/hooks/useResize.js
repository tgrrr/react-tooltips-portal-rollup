import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import useEventListener from './useEventListener';

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const useResize = () => {
    const [width, setWidth] = useState(getWidth());

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    const resizeListener = useCallback(debounce(
        () => setWidth(getWidth), 150,
    ), []);

    useEventListener('resize', resizeListener);

    return [width];
};

export default useResize;
