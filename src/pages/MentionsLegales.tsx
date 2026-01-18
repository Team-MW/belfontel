import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const MentionsLegales = () => {
    return (
        <div className="min-h-screen pt-24">
            <SEO
                title="Mentions Légales"
                description="Mentions légales de BELFONTEL : informations juridiques, éditeur du site, hébergement et propriété intellectuelle."
            />

            <section className="section-dark py-20 grid-pattern">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-black mb-12 neon-text uppercase">Mentions Légales</h1>

                        <div className="space-y-12">
                            {/* Identité */}
                            <div className="glass-card">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-primary">01.</span> Éditeur du site
                                </h2>
                                <div className="space-y-4 text-gray-300 font-light">
                                    <p>Le site <strong>BELFONTEL</strong> est édité par :</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Dénomination sociale :</strong> [Nom de votre Société]</li>
                                        <li><strong>Forme juridique :</strong> [SASU / SAS / SARL / Auto-entreprise]</li>
                                        <li><strong>Adresse du siège social :</strong> [Votre Adresse Complète]</li>
                                        <li><strong>Numéro SIRET :</strong> [Votre SIRET]</li>
                                        <li><strong>RCS :</strong> [Ville] B [Numéro]</li>
                                        <li><strong>Numéro TVA Intracommunautaire :</strong> [FR XX XXXXXXXX]</li>
                                        <li><strong>Directeur de la publication :</strong> [Votre Nom]</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="glass-card">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-primary">02.</span> Contact
                                </h2>
                                <div className="space-y-4 text-gray-300 font-light">
                                    <p>Pour toute question ou demande d'information, vous pouvez nous contacter :</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Par email :</strong> contact@belfontel.om</li>
                                        <li><strong>Par téléphone :</strong> +33 0 00 00 00 00</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Hébergement */}
                            <div className="glass-card">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-primary">03.</span> Hébergement
                                </h2>
                                <div className="space-y-4 text-gray-300 font-light">
                                    <p>Le site est hébergé par :</p>
                                    <p><strong>[Nom de l'hébergeur]</strong> (ex: Vercel Inc.)<br />
                                        [Adresse de l'hébergeur]<br />
                                        [Site web de l'hébergeur]</p>
                                </div>
                            </div>

                            {/* Propriété intellectuelle */}
                            <div className="glass-card">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-primary">04.</span> Propriété Intellectuelle
                                </h2>
                                <div className="space-y-4 text-gray-300 font-light text-justify">
                                    <p>
                                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                    </p>
                                    <p>
                                        La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
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

export default MentionsLegales;
