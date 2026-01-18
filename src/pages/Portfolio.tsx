import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: 'iPhone 15 Pro Max',
            category: 'Vente Neuf & Occasion',
            description: 'Disponible en Titane Naturel, Bleu, Blanc et Noir. Stock immédiat.',
            image: '📱',
            tech: ['Apple Intelligence', 'A17 Pro', 'Titane'],
        },
        {
            title: 'Remplacement Écran OLED',
            category: 'Réparation',
            description: 'Réparation Samsung S24 Ultra avec pièces d\'origine certifiées.',
            image: '🔧',
            tech: ['Pièce Origine', 'Garantie 1 an', 'Etanchéité'],
        },
        {
            title: 'Protection Hydrogel',
            category: 'Accessoire',
            description: 'Découpe sur mesure pour tous modèles. Incassable et autoréparant.',
            image: '🛡️',
            tech: ['Anti-Espion', 'Mat', 'Brillant'],
        },
        {
            title: 'Micro-Soudure',
            category: 'Expertise',
            description: 'Réparation carte mère, connecteur de charge et récupération de données.',
            image: '🔬',
            tech: ['Carte Mère', 'Face ID', 'Données'],
        },
    ];

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="section-dark py-20 grid-pattern">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-black mb-6 neon-text uppercase tracking-tight">Nos Produits</h1>
                        <p className="text-xl text-gray-400 font-light">
                            Découvrez notre sélection de smartphones et nos meilleures interventions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-light py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card group cursor-pointer overflow-hidden border border-white/5 hover:border-primary/50"
                            >
                                <div className="text-8xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_20px_rgba(255,31,31,0.2)]">
                                    {project.image}
                                </div>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-black bg-primary px-3 py-1 rounded-sm uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 font-light">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-metallic-600/50 border border-white/10 text-gray-300 px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
