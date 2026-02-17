import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from './SEO';

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-white">
            <SEO
                title="Contatti - Infermiera a Domicilio"
                description="Contatta Natasha Maslarova per cure infermieristiche a domicilio a Locarno e in Ticino. Prenota una visita o richiedi informazioni sui servizi assistenziali."
                keywords="contatti infermiera, prenota visita domicilio, telefono infermiera Locarno, email assistenza domiciliare"
                canonical="https://cureacasa.ch/contact"
            />
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Contattami</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Sono a tua disposizione per qualsiasi informazione, per pianificare una visita o per valutare insieme
                            il piano assistenziale più adatto alle tue esigenze.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Telefono</h4>
                                    <p className="text-slate-600">+41 76 818 03 17</p>
                                    <p className="text-xs text-slate-400 mt-1">Lun - Ven, 08:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Email</h4>
                                    <p className="text-slate-600">natasha@cureacasa.ch</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Zona Operativa</h4>
                                    <p className="text-slate-600">Canton Ticino, Svizzera</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Scrivimi un messaggio</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Il tuo nome"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                        placeholder="+41 ..."
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                    placeholder="tua@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Messaggio</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Come posso aiutarti?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full btn bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                            >
                                Invia Messaggio
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
