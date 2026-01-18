import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useState } from 'react';

// Composant d'animation des nombres
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
    const [count, setCount] = useState(0);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => {
                let start = 0;
                const totalFrames = duration / 16;
                const increment = end / totalFrames;

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        setCount(end);
                        clearInterval(timer);
                    } else {
                        setCount(start);
                    }
                }, 16);
            }}
        >
            {Math.floor(count).toLocaleString('fr-FR')}{suffix}
        </motion.span>
    );
};

const Home = () => {
    // Animation variants pour réutilisation
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const processSteps = [
        { num: '01', title: 'Diagnostic Gratuit', text: 'Analyse complète de votre appareil en boutique pour identifier la panne exacte.' },
        { num: '02', title: 'Devis Immédiat', text: 'Prix transparent et fixe avant toute intervention. Aucune mauvaise surprise.' },
        { num: '03', title: 'Réparation Express', text: 'Intervention par nos techniciens certifiés, souvent en moins de 30 minutes.' },
        { num: '04', title: 'Garantie & Test', text: 'Vérification complète des fonctionnalités et garantie offerte sur la réparation.' },
    ];

    const testimonials = [
        {
            name: 'Sophie L.',
            role: 'iPhone 15 Pro Max',
            content: 'Service incroyable. Mon écran a été remplacé en 20 minutes. Le téléphone est comme neuf !',
            rating: 5,
        },
        {
            name: 'Marc D.',
            role: 'Samsung S24 Ultra',
            content: 'Meilleur prix de reprise du quartier. Équipe super pro et boutique magnifique.',
            rating: 5,
        },
        {
            name: 'Thomas R.',
            role: 'Réparation iPad',
            content: 'Ils ont sauvé mes données alors que Apple me disait que c‘était impossible. Merci !',
            rating: 5,
        },
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title="Réparation iPhone & Samsung Toulouse | BELPHONETEL - N°1 Rapide & Garanti"
                description="BELPHONETEL Toulouse (Bellefontaine) : Expert réparation électronique (Téléphones, Tablettes, Consoles). Vente & Rachat de mobiles. Service rapide, pièces de qualité et garantie."
                keywords="réparation téléphone toulouse, rachat mobile, vente iphone, réparation écran, belfontel, accessoires smartphone"
            />

            {/* HEROS SECTION - Impact Visuel Fort */}
            <section className="section-dark min-h-screen flex items-center relative overflow-hidden grid-pattern pt-20">
                {/* Aura d'ambiance */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container-custom relative z-10 w-full">

                    {/* MARQUEE MOBILE (Collé en haut) */}
                    <div className="md:hidden w-full overflow-hidden mask-linear-fade relative mb-8 -mt-10 opacity-70">
                        <div className="flex gap-8 items-center animate-marquee whitespace-nowrap">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex gap-8 items-center">
                                    <img src="/assets/14415.png" alt="Brand" className="h-6 opacity-80" />
                                    <img src="/assets/samsung-logo-samsung-icon-transparent-free-png.webp" alt="Samsung" className="h-6 opacity-80" />
                                    <img src="/assets/mi-xiaomi-transparent-mi-xiaomi-free-free-png.webp" alt="Xiaomi" className="h-6 opacity-80" />
                                    <img src="/assets/1443.png" alt="Brand" className="h-5 opacity-80" />
                                    <img src="/assets/Nintendo_switch_logo.png" alt="Nintendo" className="h-5 opacity-80" />
                                    <img src="/assets/226770.png" alt="Brand" className="h-6 opacity-80" />
                                    <img src="/assets/747.png" alt="Brand" className="h-6 opacity-80" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Texte Hero (Gauche) */}
                        <motion.div
                            className="lg:w-3/5 text-center lg:text-left"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                                <span className="text-primary font-bold text-sm tracking-mid uppercase">N°1 sur la réparation & la vente</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-none text-white">
                                <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-sm">VOTRE MOBILE</span> <br />
                                <span className="text-primary drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]">ENTRE DE BONNES MAINS</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                                Expert en <strong>réparation express</strong>, vente de <strong>smartphones premium</strong> et accessoires high-tech.
                                Redonnez vie à votre appareil ou passez au niveau supérieur avec BELPHONETEL.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/contact" className="btn-primary text-center">
                                    Prendre Rendez-vous
                                </Link>
                                <Link to="/services" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 hover:border-white/50 transition-all text-center rounded-sm">
                                    Voir nos tarifs
                                </Link>
                            </motion.div>

                            {/* Brand Marquee Infinite (DESKTOP ONLY) */}
                            <motion.div variants={fadeInUp} className="hidden md:block mt-12 w-full overflow-hidden mask-linear-fade relative">
                                <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
                                    {/* Dupliquer les logos pour l'effet infini */}
                                    {[...Array(2)].map((_, i) => (
                                        <div key={i} className="flex gap-12 items-center">
                                            <img src="/assets/14415.png" alt="Brand 1" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
                                            <img src="/assets/samsung-logo-samsung-icon-transparent-free-png.webp" alt="Samsung" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
                                            <img src="/assets/mi-xiaomi-transparent-mi-xiaomi-free-free-png.webp" alt="Xiaomi" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
                                            <img src="/assets/1443.png" alt="Brand 2" className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity" />
                                            <img src="/assets/Nintendo_switch_logo.png" alt="Nintendo" className="h-6 md:h-8 opacity-80 hover:opacity-100 transition-opacity" />
                                            <img src="/assets/226770.png" alt="Brand 3" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
                                            <img src="/assets/747.png" alt="Brand 4" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Visuel Hero (Droite) - Simulation iPhone stylisé */}
                        <motion.div
                            className="lg:w-2/5 relative mt-8 lg:mt-0"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="relative z-10 transform lg:rotate-[-5deg] lg:hover:rotate-0 transition-transform duration-700 scale-100 lg:scale-[1.6] origin-center lg:translate-y-8 lg:translate-x-[-2%]">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0, y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
                                    transition={{
                                        opacity: { duration: 0.8 },
                                        x: { duration: 0.8 },
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="relative z-10 hidden lg:block"
                                >
                                    <img
                                        src="/assets/iphone.png"
                                        alt="iPhone Premium Belfontel"
                                        className="w-full max-w-[900px] h-auto object-contain drop-shadow-[0_0_50px_rgba(255,0,0,0.3)]"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Indicateur Scroll */}
                <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30" animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <div className="w-[1px] h-12 bg-white"></div>
                </motion.div>
            </section>

            {/* BANDEAU MARQUES XXL (Marquee) */}
            <section className="py-6 bg-white/5 border-y border-white/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-metallic-900/80 backdrop-blur-sm"></div>
                <div className="relative z-10 flex gap-12 items-center animate-marquee whitespace-nowrap">
                    {/* Duplication augmentée pour fluidité totale infinie */}
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex gap-12 items-center flex-shrink-0">
                            <img src="/assets/14415.png" alt="Brand" className="h-10 md:h-14 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer" />
                            <img src="/assets/samsung-logo-samsung-icon-transparent-free-png.webp" alt="Samsung" className="h-10 md:h-14 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer" />
                            <img src="/assets/mi-xiaomi-transparent-mi-xiaomi-free-free-png.webp" alt="Xiaomi" className="h-10 md:h-14 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer" />
                            <img src="/assets/1443.png" alt="Brand" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer" />
                            <img src="/assets/Nintendo_switch_logo.png" alt="Nintendo" className="h-8 md:h-10 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer" />
                            <img src="/assets/226770.png" alt="Brand" className="h-10 md:h-14 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Section Snapchat / Réseaux Sociaux */}
            <section className="py-20 section-dark grid-pattern relative overflow-hidden">
                {/* Effets lumineux d'ambiance (Background) */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-bold mb-8 text-white uppercase tracking-widest neon-text"
                    >
                        SUIVEZ NOTRE QUOTIDIEN SUR <span className="text-secondary">SNAPCHAT</span>
                    </motion.h2>

                    {/* Handle Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg"></div>
                        <div className="bg-primary text-white font-black text-2xl md:text-4xl px-12 py-4 rounded-lg transform -skew-x-12 relative z-10 shadow-[0_0_30px_rgba(255,31,31,0.4)] border border-white/20">
                            @belphonetel
                        </div>
                    </motion.div>

                    {/* Snapcode Tech Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer"
                    >
                        {/* Cadre brillant */}
                        {/* Cadre brillant avec vraie image Snapcode */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2.5rem] p-1 shadow-[0_0_50px_rgba(255,31,31,0.2)] group-hover:shadow-[0_0_80px_rgba(255,31,31,0.5)] transition-all duration-500">
                            <img
                                src="/assets/snapshat.jpg"
                                alt="Snapcode Belphonetel"
                                className="w-full h-full object-cover rounded-[2.2rem]"
                            />
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* SECTION: POURQUOI NOUS CHOISIR (Texte Riche) */}
            <section className="section-light py-24 relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">L'Excellence Mobile</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">PLUS QU'UNE <br />SIMPLE BOUTIQUE.</h2>
                            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed text-justify">
                                <p>
                                    Chez <strong>BELPHONETEL</strong>, nous comprenons que votre smartphone est le prolongement de votre vie. Qu'il s'agisse de vos photos, de vos contacts professionnels ou de vos souvenirs, chaque donnée compte.
                                </p>
                                <p>
                                    C'est pourquoi nous ne faisons <strong>aucun compromis sur la qualité</strong>. Là où d'autres utilisent des pièces génériques bas de gamme, nous privilégions les composants d'origine ou de qualité équivalente certifiée. Nos techniciens ne sont pas de simples réparateurs, ce sont des experts passionnés formés aux dernières technologies de micro-soudure.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="border-l-2 border-primary pl-4">
                                    <h4 className="text-white font-black text-2xl mb-1 flex items-center">
                                        <AnimatedCounter end={15000} suffix="+" duration={2500} />
                                    </h4>
                                    <p className="text-sm text-gray-500 uppercase">Clients Satisfaits</p>
                                </div>
                                <div className="border-l-2 border-primary pl-4">
                                    <h4 className="text-white font-black text-2xl mb-1 flex items-center">
                                        <AnimatedCounter end={30} suffix=" min" duration={1500} />
                                    </h4>
                                    <p className="text-sm text-gray-500 uppercase">Temps moyen réparation</p>
                                </div>
                            </div>
                        </div>

                        {/* Services Grid (Détaillé) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Réparation Express", icon: "⚡", desc: "Diagnostic immédiat et réparation sur place." },
                                { title: "Vente & Reprise", icon: "🔄", desc: "Le meilleur prix pour votre ancien mobile." },
                                { title: "Accessoires", icon: "🛡️", desc: "Protection hydrogel et coques renforcées." },
                                { title: "Micro-Soudure", icon: "🔬", desc: "Réparation carte mère complexe." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-metallic-800 p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-all"
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: COMMENT CA MARCHE (Processus) */}
            <section className="section-dark py-24 border-y border-white/5">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Notre Processus</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Une prise en charge simple, transparente et efficace de votre appareil.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="text-6xl font-black text-white/5 absolute -top-4 -left-2 z-0 group-hover:text-primary/10 transition-colors">{step.num}</div>
                                <div className="relative z-10 bg-metallic-800/50 backdrop-blur p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-all h-full">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                                </div>
                                {/* Trait de liaison (sauf dernier) */}
                                {index !== 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10 z-0"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: TÉMOIGNAGES */}
            <section className="py-24 bg-gradient-to-b from-metallic-900 to-metallic-950">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-12 text-center">La parole aux clients</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass-card p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex text-primary mb-4 gap-1">
                                        {[...Array(5)].map((_, star) => <span key={star}>★</span>)}
                                    </div>
                                    <p className="text-gray-300 italic mb-6">"{t.content}"</p>
                                </div>
                                <div className="border-t border-white/10 pt-4 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-tr from-primary to-gray-800 rounded-full flex items-center justify-center font-bold text-white text-xs">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">{t.name}</p>
                                        <p className="text-xs text-primary">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: NOTRE BOUTIQUE (LOCALISATION) */}
            <section className="section-dark py-24 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* Infos Boutique */}
                        <div className="lg:w-1/2 w-full space-y-8">
                            <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-2">
                                Localisation
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
                                <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">L'ATELIER</span> <br />
                                <span className="text-primary drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">TOULOUSAIN</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light max-w-md">
                                Situé à Bellefontaine, notre atelier vous accueille pour toutes vos réparations et achats.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 bg-metallic-800/50 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="text-2xl">📍</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Adresse</h4>
                                        <p className="text-gray-400">65 All. de Bellefontaine</p>
                                        <p className="text-gray-400">31100 Toulouse</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-metallic-800/50 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="text-2xl">🕒</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2">Horaires</h4>
                                        <div className="text-sm text-gray-400 space-y-1">
                                            <div className="flex justify-between gap-8"><span className="w-20">Lun - Jeu</span> <span>10:00–13:00 / 14:30–20:00</span></div>
                                            <div className="flex justify-between gap-8"><span className="w-20 text-white font-bold">Vendredi</span> <span className="text-white font-bold">10:00–12:00 / 15:00–20:00</span></div>
                                            <div className="flex justify-between gap-8"><span className="w-20">Samedi</span> <span>10:00–13:00 / 14:30–20:00</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=65+Allée+de+Bellefontaine+31100+Toulouse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-wider hover:text-primary transition-colors mt-4 group"
                            >
                                <span>Itinéraire vers la boutique</span>
                                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                            </a>
                        </div>

                        {/* Carte Interactive Stylisée (Nettoyée) */}
                        <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.662279146!2d1.4026!3d43.5724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec755555%3A0x0!2s65+All.+de+Bellefontaine%2C+31100+Toulouse!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                className="absolute inset-0 w-full h-full border-0 z-10"
                            ></iframe>

                            {/* Overlay Tech Discret */}
                            <div className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded border border-white/10 flex items-center gap-2 pointer-events-none">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-bold text-white uppercase">En direct de l'atelier</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 grid-pattern"></div>
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">Besoin d'une réparation ?</h2>
                    <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">N'attendez pas que la panne s'aggrave. Passez nous voir en boutique ou contactez-nous pour un diagnostic gratuit.</p>
                    <Link to="/contact" className="inline-block bg-white text-black font-black text-lg px-10 py-4 uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-2xl skew-x-[-10deg]">
                        <span className="skew-x-[10deg] inline-block">Contactez-nous</span>
                    </Link>
                </div>
            </section >
        </div >
    );
};

export default Home;
