import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const items = [
        {
            type: 'Vente',
            title: 'iPhone 15 Pro Max',
            desc: 'Titane Naturel - 256 Go',
            status: 'En Stock',
            imageGradient: 'from-gray-700 to-gray-900',
            icon: '📱',
            tags: ['Neuf', 'Garantie 2 ans']
        },
        {
            type: 'Réparation',
            title: 'Sauvetage Données',
            desc: 'Récupération photo famille sur iPhone oxydé',
            status: 'Succès 100%',
            imageGradient: 'from-green-900 to-black',
            icon: '💾',
            tags: ['Complexe', 'Micro-soudure']
        },
        {
            type: 'Custom',
            title: 'Samsung S24 Ultra',
            desc: 'Installation protection Hydrogel Intégrale',
            status: 'Terminé',
            imageGradient: 'from-blue-900 to-black',
            icon: '🛡️',
            tags: ['Protection', 'Accessoire']
        },
        {
            type: 'Vente',
            title: 'MacBook Air M2',
            desc: 'Gris Sidéral - Parfait état',
            status: 'Vendu',
            imageGradient: 'from-purple-900 to-black',
            icon: '💻',
            tags: ['Occasion Premium', 'Apple']
        },
        {
            type: 'Réparation',
            title: 'PS5 HDMI',
            desc: 'Port HDMI arraché remplacé',
            status: 'Atelier',
            imageGradient: 'from-indigo-900 to-black',
            icon: '🎮',
            tags: ['Console', 'Soudure']
        },
        {
            type: 'Vente',
            title: 'AirPods Pro 2',
            desc: 'Neufs sous scellé',
            status: 'En Stock',
            imageGradient: 'from-white/10 to-black',
            icon: '🎧',
            tags: ['Audio', 'Accessoire']
        }
    ];

    return (
        <div className="min-h-screen pt-24">
            <SEO
                title="Portfolio & Shop"
                description="Nos dernières réalisations et produits disponibles. Smartphones reconditionnés, réparations complexes et accessoires."
            />

            {/* Hero Section */}
            <section className="section-dark py-20 grid-pattern relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter"
                    >
                        Show<span className="text-primary">room</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Un aperçu de notre stock actuel et des défis techniques relevés par notre atelier.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section-light py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                            >
                                {/* Background Image Simulation */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.imageGradient} opacity-60 group-hover:scale-110 transition-transform duration-700`}></div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between items-start">
                                    <div className="w-full flex justify-between items-start">
                                        <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${item.type === 'Vente' ? 'bg-primary text-white' : 'bg-white text-black'}`}>
                                            {item.type}
                                        </span>
                                        <span className="text-white/50 text-xs font-mono border border-white/20 px-2 py-1 rounded">
                                            {item.status}
                                        </span>
                                    </div>

                                    <div className="self-center">
                                        <div className="text-8xl drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] transform group-hover:-translate-y-4 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div className="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{item.title}</h3>
                                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.desc}</p>

                                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {item.tags.map((tag, t) => (
                                                <span key={t} className="text-[10px] uppercase font-bold text-white/70 bg-white/10 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Border Effect */}
                                <div className="absolute inset-0 border-2 border-white/5 rounded-2xl group-hover:border-primary/50 transition-colors duration-300 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest border-b border-transparent hover:border-primary pb-1">
                            Voir tout le stock en boutique
                            <span className="text-primary">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* NOUVEAU: SECTION STATS */}
            <section className="bg-metallic-900 border-y border-white/5 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
                        <div className="p-4">
                            <div className="text-4xl font-black text-white mb-2">15k+</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Clients</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-white mb-2">4.9/5</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Avis Google</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-white mb-2">30min</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Temps Moyen</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-white mb-2">12M</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">Garantie</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl font-black text-white uppercase mb-8">Un modèle spécifique ?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Nous pouvons commander n'importe quel modèle ou pièce spécifique pour vous. Contactez-nous pour une recherche personnalisée.</p>
                    <Link to="/contact" className="btn-primary">Faire une demande</Link>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
