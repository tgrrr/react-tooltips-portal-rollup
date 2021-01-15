import { useState, useCallback, useRef } from 'react';

function useHover() {
    const [isHover, setIsHover] = useState(false);

    // Wrap in useCallback so we can use in dependencies below
    const handleMouseEnter = useCallback(() => setIsHover(true), []);
    const handleMouseLeave = useCallback(() => setIsHover(false), []);

    // Keep track of the last node passed to callbackRef
    // so we can remove its event listeners.
    const ref = useRef();

    // Use a callback ref instead of useEffect so that event listeners
    // get changed in the case that the returned ref gets added to
    // a different element later. With useEffect, changes to ref.current
    // wouldn't cause a rerender and thus the effect would run again.
    const callbackRef = useCallback(
        (node) => {
            if (ref.current) {
                ref.current.removeEventListener('mouseenter', handleMouseEnter);
                ref.current.removeEventListener('mouseleave', handleMouseLeave);
            }

            ref.current = node;

            if (ref.current) {
                ref.current.addEventListener('mouseenter', handleMouseEnter);
                ref.current.addEventListener('mouseleave', handleMouseLeave);
            }
        },
        [handleMouseEnter, handleMouseLeave],
    );

    return [isHover, callbackRef];
}

export default useHover;

// USAGE:
// export default function App() {
//   const [ref, isHovered] = useHover();

//   React.useEffect(() => {
//     console.log({ isHovered });
//   }, [isHovered]);

//   return (
//     <>
//       <button ref={ref}>
//         Foo
//       </button>
//     </>
//   );
// }

// Taken from https://gist.github.com/gragland/a32d08580b7e0604ff02cb069826ca2f
// but modified to use `mouseenter` and `mouseleave`
