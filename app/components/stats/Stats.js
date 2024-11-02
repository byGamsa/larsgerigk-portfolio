import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
    return (
        <div className="relative inset-0 flex items-center justify-center">
            <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
                <div className="flex flex-col items-center justify-center sm:flex-row">
                    <Stat
                        num={8}
                        suffix="+"
                        subheading="YEARS OF EXPERIENCE"
                    />
                    <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
                    <Stat
                        num={924}
                        suffix=""
                        subheading="DAYS CODE STREAK"
                    />
                    <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
                    <Stat
                        num={50}
                        suffix="+"
                        subheading="SKILLS"
                    />
                </div>
            </div>
        </div>
    );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex w-72 flex-col items-center py-8 sm:py-0">
            <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
                <span ref={ref}></span>
                {suffix}
            </p>
            <p className="max-w-48 text-center text-neutral-600">{subheading}</p>
        </div>
    );
};