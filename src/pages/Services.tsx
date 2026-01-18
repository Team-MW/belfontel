import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: 'Réparation  Écran',
            subtitle: 'iPhone, Samsung, Huawei...',
            description: 'Vitre cassée ou tactile HS ? Remplacement par des écrans qualité origine ou compatible premium.',
            price: 'À partir de 49€',
            time: '30 min',
            features: ['Garantie à vie', 'Calibrage couleurs', 'Protection offerte'],
            icon: '📱',
        },
        {
            title: 'Changement  Batterie',
            subtitle: 'Autonomie retrouvée',
            description: 'Votre téléphone s\'éteint tout seul ou ne tient plus la charge ? Redonnez-lui sa jeunesse.',
            price: 'À partir de 29€',
            time: '20 min',
            features: ['Pièce Certifiée', 'Capacité 100%', 'Test de charge'],
            icon: '🔋',
        },
        {
            title: 'Micro-Soudure',
            subtitle: 'Expertise Technique',
            description: 'Réparation complexe sur carte mère : connecteur arraché, problème audio, FaceID...',
            price: 'Sur devis',
            time: '24h - 72h',
            features: ['Techniciens Spécialisés', 'Microsocope', 'Récupération Données'],
            icon: '🔬',
        },
        {
            title: 'Désoxydation',
            subtitle: 'Sauvetage Eaux',
            description: 'Votre téléphone est tombé dans l\'eau ? Éteignez-le et apportez-le nous d\'urgence.',
            price: 'Forfait 39€',
            time: '2h min',
            features: ['Nettoyage Ultrasons', 'Séchage complet', 'Diagnostic complet'],
            icon: '💧',
        },
    ];

    return (
        <div className="pt-20 min-h-screen">
            <SEO
                title="Tarifs Réparation iPhone, Samsung, Huawei | BELPHONETEL Toulouse"
                description="Services de réparation électronique à Toulouse : Téléphones, Tablettes, Consoles de jeux. Remplacement écran, batterie, soudure carte mère. Devis gratuit chez BELPHONETEL."
            />

            {/* Hero Section */}
            <section className="section-dark py-20 grid-pattern relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Atelier Certifié</span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tight">
                            Réparation <span className="neon-text">Expert</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                            Nous ne nous contentons pas de changer des pièces. Nous diagnostiquons, réparons et testons chaque appareil selon des normes strictes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-light py-24 relative border-t border-white/5">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card group hover:border-primary/50 relative overflow-hidden flex flex-col"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-9xl font-black pointer-events-none select-none text-white">
                                    {index + 1}
                                </div>

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="text-5xl p-4 bg-metallic-800 rounded-2xl border border-white/5 shadow-2xl group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/30">
                                        {service.icon}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-primary font-bold text-xl mb-1">{service.price}</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider flex items-center justify-end gap-1">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            {service.time}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 relative z-10">
                                    <h3 className="text-2xl font-black text-white mb-2 uppercase group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-sm text-primary font-bold uppercase tracking-widest mb-3">{service.subtitle}</p>
                                    <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <div className="w-full h-px bg-white/5 mb-4"></div>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-400">
                                                <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NOUVELLE SECTION: NOS ENGAGEMENTS */}
            <section className="section-dark py-20 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 grid-pattern opacity-50"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Pourquoi nous ?</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-metallic-800/50 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">💎</div>
                            <h3 className="text-xl font-bold text-white mb-3">Pièces Premium</h3>
                            <p className="text-gray-400">Nous utilisons exclusivement des pièces d'origine ou de qualité strictement équivalente (AAA+).</p>
                        </div>
                        <div className="p-8 bg-metallic-800/50 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                            <h3 className="text-xl font-bold text-white mb-3">Garantie Incluse</h3>
                            <p className="text-gray-400">Toutes nos réparations sont garanties pièce et main d'œuvre. Partez l'esprit tranquille.</p>
                        </div>
                        <div className="p-8 bg-metallic-800/50 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                            <h3 className="text-xl font-bold text-white mb-3">Sans Rendez-vous</h3>
                            <p className="text-gray-400">Passez quand vous voulez. 80% des réparations sont effectuées en moins de 30 minutes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NOUVELLE SECTION: FAQ SERVICES */}
            <section className="section-light py-20">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-3xl font-black text-white uppercase mb-12 text-center">Questions Fréquentes</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Est-ce que je perds mes données ?", r: "Non, dans 99% des cas (écran, batterie, connecteur), vos données restent intactes. Pour les pannes logicielles graves, nous vous prévenons avant toute manipulation à risque." },
                            { q: "Combien de temps dure la garantie ?", r: "Nos réparations écrans et batteries sont garanties entre 6 mois et  à vie selon la gamme choisie. La garantie couvre tout défaut de la pièce hors casse ou oxydation." },
                            { q: "Faut-il réinitialiser mon téléphone avant de venir ?", r: "Absolument pas ! Nous avons juste besoin de votre code de déverrouillage pour tester les fonctionnalités avant et après la réparation." },
                            { q: "Rachetez-vous les téléphones cassés ?", r: "Oui ! Apportez votre ancien mobile, même brisé. Nous l'estimons sur place et vous repartirez avec du cash ou un bon d'achat." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-metallic-900 border border-white/5 p-6 rounded-lg hover:border-primary/30 transition-colors">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                                    <span className="text-primary">?</span> {faq.q}
                                </h4>
                                <p className="text-gray-400 pl-6 text-sm leading-relaxed">{faq.r}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/contact" className="btn-primary inline-flex items-center gap-4">
                            <span>Demander un devis gratuit</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
