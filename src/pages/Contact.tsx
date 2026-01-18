import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Ici vous ajouterez la logique d'envoi du formulaire
        alert('Message envoyé ! Nous vous répondrons bientôt.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text">Contact</h1>
                        <p className="text-xl text-gray-300">
                            Parlons de votre projet et donnons vie à vos idées
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section-light py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formulaire */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-metallic-800 border border-metallic-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Jean Dupont"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-metallic-800 border border-metallic-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="jean@exemple.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-metallic-800 border border-metallic-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Demande de devis"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full bg-metallic-800 border border-metallic-600 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Décrivez votre projet..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    Envoyer le message
                                </button>
                            </form>
                        </motion.div>

                        {/* Informations de contact */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="glass-card">
                                <h3 className="text-2xl font-bold mb-6 text-primary">Informations</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📧</div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Email</h4>
                                            <p className="text-gray-400">contact@belfontel.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📱</div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Téléphone</h4>
                                            <p className="text-gray-400">+33 1 23 45 67 89</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📍</div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Adresse</h4>
                                            <p className="text-gray-400">123 Avenue de l'Innovation<br />75001 Paris, France</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card">
                                <h3 className="text-2xl font-bold mb-4 text-primary">Horaires</h3>
                                <div className="space-y-2 text-gray-400">
                                    <p>Lundi - Vendredi: 9h00 - 18h00</p>
                                    <p>Samedi: 10h00 - 16h00</p>
                                    <p>Dimanche: Fermé</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
