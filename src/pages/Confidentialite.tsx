import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Confidentialite = () => {
    return (
        <div className="min-h-screen pt-24">
            <SEO
                title="Politique de Confidentialité"
                description="Politique de confidentialité de BELFONTEL : traitement des données personnelles, cookies et droits RGPD."
            />

            <section className="section-dark py-20 grid-pattern">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-black mb-12 neon-text uppercase">Politique de Confidentialité</h1>

                        <div className="space-y-12">

                            <div className="glass-card">
                                <p className="text-gray-300 font-light text-lg mb-6">
                                    Chez <strong>BELFONTEL</strong>, nous accordons une importance majeure à la confidentialité de vos données.
                                    Cette politique vise à vous informer de manière transparente sur la façon dont nous traitons vos informations personnelles.
                                </p>
                            </div>

                            {/* Collecte des données */}
                            <div className="glass-card">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-primary">01.</span> Données collectées
                                </h2>
                                <div className="space-y-4 text-gray-300 font-light">
                                    <p>Nous collectons uniquement les données strictement nécessaires au traitement de vos demandes :</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Formulaire de contact :</strong> Nom, Email, Numéro de téléphone, Message.</li>
                                        <li><strong>Cookies :</strong> Données de navigation anonymes à des fins statistiques (si acceptés).</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Utilisation */}
                            <div className="glass-card">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-primary">02.</span> Utilisation des données
                                </h2>
                                <div className="space-y-4 text-gray-300 font-light">
                                    <p>Vos données sont utilisées pour :</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Répondre à vos demandes de devis ou d'information.</li>
                                        <li>La gestion de la relation client.</li>
                                        <li>Améliorer votre expérience sur notre site.</li>
                                    </ul>
                                    <p className="mt-4 text-primary font-medium">Nous ne vendons ni ne louons jamais vos données personnelles à des tiers.</p>
                                </div>
                            </div>

                            {/* Droits */}
                            <div className="glass-card">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-primary">03.</span> Vos droits (RGPD)
                                </h2>
                                <div className="space-y-4 text-gray-300 font-light">
                                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Droit d'accès à vos données.</li>
                                        <li>Droit de rectification ou d'effacement.</li>
                                        <li>Droit à la limitation du traitement.</li>
                                        <li>Droit d'opposition.</li>
                                    </ul>
                                    <p className="mt-4">
                                        Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@belfontel.com" className="text-primary hover:underline">contact@belfontel.com</a>
                                    </p>
                                </div>
                            </div>

                            {/* Cookies */}
                            <div className="glass-card">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-primary">04.</span> Cookies
                                </h2>
                                <div className="space-y-4 text-gray-300 font-light text-justify">
                                    <p>
                                        Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous avez la possibilité de configurer votre navigateur pour refuser les cookies.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Confidentialite;
