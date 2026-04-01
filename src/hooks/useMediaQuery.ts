import { useEffect, useState } from 'react';

function subscribeMediaQuery(
    query: string,
    callback: (matches: boolean) => void
): () => void {
    const media = window.matchMedia(query);
    const onChange = () => callback(media.matches);
    onChange();

    if (media.addEventListener) {
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }
    media.addListener(onChange);
    return () => media.removeListener(onChange);
}

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() =>
        typeof window !== 'undefined' ? window.matchMedia(query).matches : false
    );

    useEffect(() => subscribeMediaQuery(query, setMatches), [query]);

    return matches;
}
