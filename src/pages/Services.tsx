import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Réparation Mobile',
            description: 'Réparation express de votre smartphone en 30 minutes.',
            features: ['Remplacement Écran', 'Changement Batterie', 'Connecteur de charge', 'Caméra avant/arrière'],
            icon: '🛠️',
        },
        {
            title: 'Vente Smartphones',
            description: 'Large choix de téléphones neufs et reconditionnés garantis.',
            features: ['iPhone (Apple)', 'Samsung Galaxy', 'Xiaomi / Redmi', 'Reprises anciens mobiles'],
            icon: '📱',
        },
        {
            title: 'Accessoires',
            description: 'Protégez et équipez votre mobile avec les meilleurs accessoires.',
            features: ['Coques Rhinoshield', 'Verre trempé sur mesure', 'Chargeurs rapides', 'Écouteurs Bluetooth'],
            icon: '🎧',
        },
        {
            title: 'Assistance & Logiciel',
            description: 'Solutions pour tous vos problèmes logiciels.',
            features: ['Désoxydation', 'Transfert de données', 'Mise à jour système', 'Configuration initiale'],
            icon: '💾',
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
                        <h1 className="text-5xl md:text-6xl font-black mb-6 neon-text uppercase tracking-tight">NOS EXPERTISES</h1>
                        <p className="text-xl text-gray-400 font-light">
                            Un savoir-faire technique unique pour prendre soin de votre technologie.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-light py-20 relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card group hover:bg-white/5"
                            >
                                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors uppercase">{service.title}</h3>
                                <p className="text-gray-400 mb-8 font-light text-lg">{service.description}</p>
                                <ul className="space-y-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-4 shadow-[0_0_10px_var(--color-primary)]"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
