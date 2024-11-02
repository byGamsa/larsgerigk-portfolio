import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

export const BackgroundGrid = () => {
    const [scope, animate] = useAnimate();
    const [size, setSize] = useState({ columns: 0, rows: 0 });
    const [gridHeight, setGridHeight] = useState(0);

    useEffect(() => {
        // Initial grid generation
        generateGrid();

        // Event listener for grid generation on window resize
        window.addEventListener("resize", generateGrid);
        return () => window.removeEventListener("resize", generateGrid);
    }, []);

    const generateGrid = () => {
        // Calculate the full scrollable height of the document
        const fullHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
        );

        const columns = Math.floor(window.innerWidth / 75);
        const rows = Math.floor(fullHeight / 75);

        setSize({
            columns,
            rows,
        });

        // Set grid height to full document height
        setGridHeight(fullHeight);
    };

    const handleMouseLeave = (e) => {
        const id = `#${e.target.id}`;
        animate(id, { background: "rgba(124, 58, 237, 0)" }, { duration: 1.5 });
    };

    const handleMouseEnter = (e) => {
        const id = `#${e.target.id}`;
        animate(id, { background: "#7C3AED" }, { duration: 0.15 });
    };

    return (
        <div
            ref={scope}
            className="absolute grid w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))] z-0 pointer-events-auto"
            style={{ height: `${gridHeight}px` }}
        >
            {[...Array(size.rows * size.columns)].map((_, i) => (
                <div
                    key={i}
                    id={`square-${i}`}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    className="h-full w-full border-[1px] border-neutral-900"
                />
            ))}
        </div>
    );
};
