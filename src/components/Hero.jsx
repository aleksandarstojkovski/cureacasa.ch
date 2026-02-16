import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Stethoscope, MessageCircle, Phone } from 'lucide-react';
import SEO from './SEO';

const Hero = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-[#ecf5fa] overflow-hidden">
            <SEO
                title="Infermiera a Domicilio Locarno e Ticino"
                description="Servizi infermieristici professionali a domicilio a Locarno e in tutto il Ticino. Cure personalizzate, iniezioni, medicazioni e assistenza sanitaria qualificata direttamente a casa tua."
                keywords="infermiera a domicilio, infermiere Locarno, cure a domicilio Ticino, assistenza domiciliare, sanità a casa, iniezioni a domicilio, medicazioni"
                canonical="https://cureacasa.ch/"
            />
            {/* Background Decorative Elements */}
            <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
                <Stethoscope size={600} className="text-primary-800 -rotate-12" strokeWidth={1.5} />
            </div>

            <div className="absolute right-[10%] top-[20%] opacity-20 pointer-events-none animate-pulse">
                <MessageCircle size={100} className="text-primary-400 fill-primary-100" />
            </div>
            <div className="absolute right-[5%] top-[15%] opacity-10 pointer-events-none">
                <MessageCircle size={60} className="text-primary-400 fill-primary-100" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Column (Spacer for illustration on large screens) */}
                    <div className="hidden lg:block lg:w-1/3">
                        {/* The stethoscope background takes this space visually */}
                    </div>

                    {/* Right Column (Content) */}
                    <div className="w-full lg:w-2/3 lg:pl-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary-600 text-sm font-medium mb-6 shadow-sm border border-primary-100">
                            <Activity className="h-4 w-4" />
                            <span>Infermiere Indipendente in Ticino</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 tracking-tight mb-6">
                            Cura e Assistenza Professionale <br className="hidden lg:block" /> Direttamente a Casa Tua
                        </h1>

                        <p className="text-lg text-primary-700/80 mb-8 leading-relaxed max-w-2xl">
                            Offro servizi infermieristici personalizzati con competenza e umanità.
                            Il mio obiettivo è garantire il benessere e la serenità dei pazienti nel comfort del proprio domicilio.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold shadow-lg shadow-primary-200"
                            >
                                Prenota una Visita
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>

                            <div className="flex items-center gap-3 px-6 py-3">
                                <div className="bg-primary-100 p-2 rounded-full text-primary-600">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-primary-500 font-semibold uppercase tracking-wider">Chiamami ora</p>
                                    <p className="text-lg font-bold text-primary-800">+41 76 818 03 17</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
