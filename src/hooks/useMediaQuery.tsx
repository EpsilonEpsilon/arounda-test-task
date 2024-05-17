import {useEffect, useState} from "react";

export function useMediaQuery(query: string) {
    if(typeof window === 'undefined') return;

    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => window.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;