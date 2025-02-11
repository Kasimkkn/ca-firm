import { useEffect, useRef, RefObject } from 'react';

const useHeaderScroll = (headerRef: RefObject<HTMLDivElement | null>) => {
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                headerRef.current?.classList.add("hidden");
            }
            else if (currentScrollY < lastScrollY.current) {
                headerRef.current?.classList.remove("hidden");
            }

            lastScrollY.current = currentScrollY;

            scrollTimeout.current = setTimeout(() => {
                headerRef.current?.classList.remove("hidden");
            }, 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, []);
};

export default useHeaderScroll;