import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        device: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulation d'envoi
        alert('Message envoyé au technicien ! Nous vous rappelons rapidement.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen pt-24">
            <SEO
                title="Contact & Rendez-vous"
                description="Boutique Belfontel : 65 All. de Bellefontaine, 31100 Toulouse. Ouvert du Lundi au Samedi. Appelez-nous au 05 32 59 59 06 pour un devis urgent. Nous sommes à votre écoute."
            />

            {/* Hero Simple */}
            <section className="section-dark py-16 grid-pattern border-b border-white/5">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-4 text-white uppercase"
                    >
                        Besoin d'un <span className="text-primary">Diagnostic ?</span>
                    </motion.h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Passez nous voir en boutique sans rendez-vous ou envoyez-nous un message pour réserver votre créneau.
                    </p>
                </div>
            </section>

            <section className="section-light py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Zone Informations (Gauche) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Carte Info Principale */}
                            <div className="glass-card p-8 border-l-4 border-l-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl select-none pointer-events-none">📍</div>
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    L'Atelier
                                </h3>

                                <div className="space-y-6 text-gray-300">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded bg-metallic-800 flex items-center justify-center text-2xl flex-shrink-0 border border-white/10">
                                            🏢
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">BELFONTEL Toulouse</p>
                                            <p>65 All. de Bellefontaine</p>
                                            <p>31100 Toulouse, France</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded bg-metallic-800 flex items-center justify-center text-2xl flex-shrink-0 border border-white/10">
                                            📞
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">05 61 00 00 00</p>
                                            <div className="text-sm text-gray-500 mt-1 space-y-1">
                                                <p>Lundi - Jeudi : 10h00–13h00 / 14h30–20h00</p>
                                                <p className="text-primary font-bold">Vendredi : 10h00–12h00 / 15h00–20h00</p>
                                                <p>Samedi : 10h00–13h00 / 14h30–20h00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded bg-metallic-800 flex items-center justify-center text-2xl flex-shrink-0 border border-white/10">
                                            📧
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">contact@belfontel.com</p>
                                            <p className="text-sm text-gray-500">Réponse sous 24h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Horaires */}
                            <div className="bg-metallic-800 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4 uppercase">Horaires d'ouverture</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-300 border-b border-white/5 pb-2">
                                        <span>Lundi - Vendredi</span>
                                        <span className="font-bold text-white">09:30 - 19:00</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300 border-b border-white/5 pb-2">
                                        <span>Samedi</span>
                                        <span className="font-bold text-white">10:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Dimanche</span>
                                        <span>Fermé</span>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                        {/* Formulaire (Droite) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="glass-card p-8 md:p-10 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                                <h3 className="text-2xl font-bold text-white mb-2 uppercase">Envoyer un message</h3>
                                <p className="text-gray-400 mb-8 text-sm">Remplissez ce formulaire pour une demande de devis ou d'information.</p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nom</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-metallic-900 border border-metallic-700 focus:border-primary rounded px-4 py-3 text-white outline-none transition-colors"
                                                placeholder="Votre Nom"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Tél</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-metallic-900 border border-metallic-700 focus:border-primary rounded px-4 py-3 text-white outline-none transition-colors"
                                                placeholder="06 00 00 00 00"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-metallic-900 border border-metallic-700 focus:border-primary rounded px-4 py-3 text-white outline-none transition-colors"
                                            placeholder="votre@email.com"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Appareil Concerné</label>
                                        <select
                                            name="device"
                                            value={formData.device}
                                            onChange={handleChange}
                                            className="w-full bg-metallic-900 border border-metallic-700 focus:border-primary rounded px-4 py-3 text-white outline-none transition-colors appearance-none"
                                        >
                                            <option value="">Sélectionnez un motif...</option>
                                            <option value="iphone">Réparation iPhone</option>
                                            <option value="samsung">Réparation Samsung</option>
                                            <option value="achat">Achat / Vente</option>
                                            <option value="autre">Autre demande</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full bg-metallic-900 border border-metallic-700 focus:border-primary rounded px-4 py-3 text-white outline-none transition-colors resize-none"
                                            placeholder="Détaillez votre problème..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary w-full py-4 text-center">
                                        Envoyer ma demande
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                    </div>

                    {/* Carte Interactive Stylisée */}
                    <div className="mt-20 lg:w-full w-full h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
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
            </section>

            {/* INFO PRATIQUES */}
            <section className="py-20 bg-metallic-900 border-t border-white/5">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-3xl mb-4">🅿️</div>
                            <h4 className="text-white font-bold mb-2">Parking</h4>
                            <p className="text-gray-400 text-sm">Parking Esquirol ou Indigo Carmes à 2 minutes à pied.</p>
                        </div>
                        <div className="p-6 border-x border-white/5">
                            <div className="text-3xl mb-4">💳</div>
                            <h4 className="text-white font-bold mb-2">Paiement</h4>
                            <p className="text-gray-400 text-sm">CB, Espèces, Apple Pay et Paiement en 3x ou 4x sans frais.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl mb-4">🚇</div>
                            <h4 className="text-white font-bold mb-2">Métro</h4>
                            <p className="text-gray-400 text-sm">Ligne A station Esquirol ou Ligne B station Carmes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
