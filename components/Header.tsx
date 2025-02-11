"use client";
import useHeaderScroll from "@/hooks/useHeaderScroll";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
interface MenuItem {
    number: string;
    text: string;
    path: string;
    className: string;
    image: string;
}

const Header = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState<boolean>(false);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const headerRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();
    useHeaderScroll(headerRef);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsHeaderOpen(false);
            }
        };

        if (isHeaderOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isHeaderOpen]);

    const toggleHeader = () => {
        setIsHeaderOpen(!isHeaderOpen);
    };

    const menuItems: MenuItem[] = [
        { number: "01", text: "HOME", path: "#home", className: "translate-x-0", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop" },
        { number: "02", text: "ABOUT US", path: "#about", className: "translate-x-12", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop" },
        { number: "03", text: "SERVICES", path: "#services", className: "translate-x-0", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1920&auto=format&fit=crop" },
        { number: "04", text: "CONTACT", path: "#contact", className: "translate-x-12", image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920&auto=format&fit=crop" },
    ];

    const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
        const item = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - item.left;
        const y = e.clientY - item.top;

        setMousePosition({ x, y });
        setHoveredItem(index);
    };


    const handleMenuClick = (path: string) => {
        setIsHeaderOpen(false);

        requestAnimationFrame(() => {
            const targetElement = document.querySelector(path) as HTMLElement | null;
            if (targetElement && lenis) {
                lenis.scrollTo(targetElement, {
                    offset: 0,
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            }
        });
    };




    return (
        <>
            <header ref={headerRef} className="fixed w-full flex font-secondaryFont justify-between items-center px-6 md:px-12 py-6 z-30">
                <button className="uppercase text-xs md:text-sm tracking-wide">Get in Touch</button>
                <picture className="uppercase font-medium text-base md:text-lg">SealCo</picture>
                <button
                    className={`uppercase text-xs md:text-sm ${isHeaderOpen ? "text-white" : "text-black"} cursor-pointer tracking-wide z-50`}
                    onClick={toggleHeader}
                >
                    {isHeaderOpen ? "Close" : "Menu"}
                </button>
            </header>

            <div className={`fixed inset-0 z-40 w-full h-full transition-transform duration-500 ease-in-out ${isHeaderOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="absolute inset-0 backdrop-blur-[2px]" />

                <div ref={sidebarRef} className="absolute right-0 w-full flex items-center justify-center md:w-1/2 h-full bg-[#1f1f1f] p-8 md:p-16">
                    <button
                        className="absolute top-8 right-8 uppercase text-xs md:text-sm text-white cursor-pointer tracking-wide"
                        onClick={toggleHeader}
                    >
                        close
                    </button>

                    <nav className="flex flex-col w-full justify-center space-y-8">
                        <ul className="space-y-6 md:space-y-12">
                            {menuItems.map((item, index) => (
                                <li
                                    key={item.number}
                                    className={`${item.className} relative group`}
                                    onMouseEnter={() => setHoveredItem(index)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                >
                                    <Link
                                        href={item.path} scroll={false} onClick={() => handleMenuClick(item.path)}
                                        className={`flex cursor-pointer flex-col text-white hover:text-gray-300 transition-all duration-300 ${index % 2 === 0 ? "items-start" : "items-center"} w-full`}
                                    >
                                        <div className="flex flex-col">
                                            <div className="flex items-center">
                                                <span className="text-sm md:text-lg opacity-60 w-12">{item.number}</span>
                                                <span className="text-3xl md:text-6xl font-light tracking-wider">{item.text}</span>
                                            </div>
                                            <div className="h-0.5 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full origin-left transform scale-x-0 group-hover:scale-x-100" />
                                        </div>
                                    </Link>
                                    {hoveredItem === index && (
                                        <motion.div
                                            className="absolute w-32 h-36 pointer-events-none mix-blend-multiply"
                                            style={{
                                                left: mousePosition.x - 50,
                                                top: mousePosition.y - 50,
                                            }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
                                            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                                        >
                                            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
                                                <motion.div
                                                    className="absolute inset-0 transition-transform duration-500 ease-out"
                                                    style={{
                                                        backgroundImage: `url(${menuItems[hoveredItem].image})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                    }}
                                                    animate={{ scale: 1.1 }}
                                                    whileHover={{ scale: 1.2 }}
                                                />
                                                <div className="absolute inset-0 bg-black/30" />
                                            </div>
                                        </motion.div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="absolute bottom-8 right-8 md:right-16 text-xs md:text-sm text-white/60 transition-opacity duration-500">
                        <div className="flex justify-between items-center gap-4 md:gap-24">
                            <span>©2021</span>
                            <span>SPRUCE GROVE | LEDUC</span>
                            <span>ALL RIGHTS RESERVED</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;