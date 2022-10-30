import {useEffect, useRef} from 'react';

const useInterval = (
    callback,
    delay,
    fnCondition,
) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let id;

        const tick = async () => {
            let response;
            try {
                response = typeof savedCallback.current === 'function' && (await savedCallback.current());
            } catch (e) {
                console.error(e);
            } finally {
                if (!fnCondition || fnCondition(response)) {
                    id = setTimeout(tick, delay);
                } else {
                    clearTimeout(id);
                }
            }
        };
        tick();
        return () => id && clearTimeout(id);
    }, [delay]);
};

export default useInterval;