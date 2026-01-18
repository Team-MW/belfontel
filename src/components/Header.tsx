import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer le menu si on change de route (au cas où le Link onClick ne suffirait pas)
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-metallic-900/95 backdrop-blur-lg shadow-lg shadow-primary/10' : 'bg-transparent'
                }`}
        >
            <nav className="container-custom py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Premium */}
                    <Link to="/" className="text-2xl font-black relative z-[60] tracking-tighter flex items-center">
                        <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-sm">BEL</span>
                        <span className="text-primary drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] mx-[1px]">PHONE</span>
                        <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-sm">TEL</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <a href="tel:0532595906" className="btn-primary text-sm py-2 px-6 flex items-center gap-2">
                            <span>📞</span> Nous Contacter
                        </a>
                    </div>

                    {/* Mobile Menu Button - Z-Index très élevé pour rester au dessus du fullscreen overlay */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
                        aria-label="Menu"
                    >
                        <div className="flex flex-col justify-center items-center w-6 h-6 relative">
                            <motion.span
                                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className={`w-full h-0.5 mb-1.5 transition-all duration-300 ${isMenuOpen ? 'bg-white' : 'bg-primary'}`}
                            />
                            <motion.span
                                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-full h-0.5 bg-primary mb-1.5 transition-all duration-300"
                            />
                            <motion.span
                                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'bg-white' : 'bg-primary'}`}
                            />
                        </div>
                    </button>
                </div>

                {/* Scroll Lock Effect */}
                {isMenuOpen && (
                    <style>{`body { overflow: hidden; }`}</style>
                )}

                {/* Mobile Menu Overlay Fullscreen */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <div className="fixed inset-0 z-40 md:hidden">
                            {/* Backdrop Blur & Dim */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-metallic-950/95 backdrop-blur-xl"
                            />

                            {/* Menu Content */}
                            <motion.div
                                initial={{ y: '10%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '10%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="relative z-50 h-full flex flex-col justify-center items-center p-8"
                            >
                                <ul className="space-y-8 text-center">
                                    {navLinks.map((link, index) => (
                                        <motion.li
                                            key={link.path}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + index * 0.1 }}
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`text-4xl font-black uppercase tracking-tight transition-colors duration-300 ${location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary outline-text'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-16 w-full max-w-xs"
                                >
                                    <a
                                        href="tel:0532595906"
                                        className="btn-primary block w-full text-center py-4 text-lg shadow-2xl shadow-primary/30 flex justify-center items-center gap-3"
                                    >
                                        <span>📞</span> Appeler l'atelier
                                    </a>
                                </motion.div>

                                {/* Infos Rapides Bas de page */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="absolute bottom-12 left-0 right-0 text-center text-gray-500 text-sm"
                                >
                                    <p className="uppercase tracking-widest text-xs mb-2">BELPHONETEL Toulouse</p>
                                    <div className="flex justify-center flex-col items-center gap-2">
                                        <p className="font-bold text-white text-xl">05 32 59 59 06</p>
                                        <div className="flex gap-4 opacity-50">
                                            <span>📍</span>
                                            <span>📧</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Header;
