import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { name: 'Accueil', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Contact', path: '/contact' },
        ],
        social: [
            { name: 'Facebook', url: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            { name: 'Twitter', url: '#', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
            { name: 'LinkedIn', url: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { name: 'TikTok', url: 'https://www.tiktok.com/@belphonetel', icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' },
        ],
    };

    return (
        <footer className="bg-metallic-900 border-t border-metallic-700 mt-32">
            <div className="container-custom pt-32 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Colonne 1: Logo et description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-black mb-4 tracking-tighter flex items-center">
                            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-sm">BEL</span>
                            <span className="text-primary drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] mx-[1px]">PHONE</span>
                            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-sm">TEL</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            L'expert toulousain de la réparation smartphone, vente et rachat.
                            Qualité premium et service express garanti.
                        </p>
                        <div className="text-gray-400 text-sm space-y-2">
                            <p className="flex items-center gap-2"><span className="text-primary">📍</span> 65 All. de Bellefontaine, 31100 Toulouse</p>
                            <p className="flex items-center gap-2"><span className="text-primary">📞</span> 05 32 59 59 06</p>
                        </div>
                    </motion.div>

                    {/* Colonne 2: Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold text-primary mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Colonne 3: Contact et Newsletter */}
                    {/* Colonne 3: Réseaux Sociaux */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-start"
                    >
                        <h4 className="text-lg font-black text-white uppercase tracking-wider mb-6 relative inline-block">
                            Suivez-nous
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                        </h4>

                        <div className="flex flex-wrap gap-4">
                            {footerLinks.social.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <svg
                                        className="w-6 h-6 fill-gray-400 group-hover:fill-primary transition-colors"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-gray-500 font-light max-w-xs">
                            Rejoignez la communauté BELPHONETEL pour des offres exclusives et des conseils tech.
                        </p>
                    </motion.div>
                </div>

                {/* Barre de copyright */}
                <div className="border-t border-metallic-700 mt-20 pt-10 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-1 text-sm text-gray-500">
                        <p>© {currentYear} BELPHONETEL. Tous droits réservés.</p>
                        <span className="hidden md:block mx-2">|</span>
                        <p>
                            Réalisé par <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">Microdidact</a>
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <Link to="/mentions-legales" className="text-gray-500 hover:text-primary transition-colors">
                            Mentions légales
                        </Link>
                        <Link to="/confidentialite" className="text-gray-500 hover:text-primary transition-colors">
                            Confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
