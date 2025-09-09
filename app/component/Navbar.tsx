import { Link } from 'react-router';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMenuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isMenuOpen]);
    return (
        <div className="bg-white/10 dark:bg-black/10 p-2 rounded-[8px] flex flex-row justify-between items-center">
            <div className="">
                <p className="text-2xl font-bold p-2">Dexoron</p>
            </div>
            <div className="hidden md:flex flex-row gap-2">
                <Link
                    to="/"
                    className="py-2 px-4 rounded-[8px] bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20"
                >
                    О мне
                </Link>
                <Link
                    to="/skill"
                    className="py-2 px-4 rounded-[8px] bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20"
                >
                    Навыки
                </Link>
                <Link
                    to="/work"
                    className="py-2 px-4 rounded-[8px] bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20"
                >
                    Проекты
                </Link>
            </div>
            <div className="md:hidden flex items-center justify-center p-2 bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 rounded-[8px]">
                <button
                    className="w-8 h-8"
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                    aria-label="Открыть меню"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg
                        className="dark:text-black text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                    >
                        <path
                            fill="currentColor"
                            d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
                        />
                    </svg>
                </button>
            </div>
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                className={`dark:bg-white bg-black fixed inset-0 z-50 p-2 gap-2 flex flex-col ${isMenuOpen ? '' : 'hidden'}`}
            >
                <div className="bg-white/10 dark:bg-black/10 p-2 rounded-[8px] flex flex-row justify-between items-center">
                    <div className="">
                        <p className="text-2xl font-bold p-2">Dexoron</p>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 rounded-[8px]">
                        <button
                            className="w-8 h-8"
                            aria-label="Закрыть меню"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg
                                className="dark:text-black text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                            >
                                <path
                                    fill="currentColor"
                                    d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className=" flex flex-col gap-2 w-full">
                    <Link
                        to="/"
                        className="p-4 rounded-[8px] bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        О мне
                    </Link>
                    <Link
                        to="/skill"
                        className="p-4 rounded-[8px] bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Навыки
                    </Link>
                    <Link
                        to="/work"
                        className="p-4 rounded-[8px] bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Проекты
                    </Link>
                </div>
            </div>
        </div>
    );
}
