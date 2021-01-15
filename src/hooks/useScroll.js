import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import useEventListener from './useEventListener';

const useScroll = () => {
    const [isScroll, setIsScroll] = useState(false);

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    const scrollListener = useCallback(debounce(
        () => setIsScroll(true), 150,
    ), []);

    useEventListener('scroll', scrollListener);

    return [isScroll, setIsScroll];
};

export default useScroll;
