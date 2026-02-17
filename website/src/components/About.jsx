import React from 'react';
import SEO from './SEO';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <SEO
                title="Chi Sono - Infermiera Indipendente Ticino"
                description="Natasha Maslarova, infermiera indipendente qualificata attiva nel Canton Ticino. Esperienza, professionalità e un approccio umano alle cure domiciliari."
                keywords="chi sono infermiera, profilo professionale, Natasha Maslarova, infermiera Ticino, esperienza infermieristica"
                canonical="https://cureacasa.ch/about"
            />
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-200 rounded-2xl transform rotate-3"></div>
                            <img
                                src="/natasha-maslarova.png"
                                alt="Natasha Maslarova"
                                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Chi Sono
                        </h2>
                        <div className="bg-primary-50 border-l-4 border-secondary-500 p-4 mb-6">
                            <p className="text-primary-800 font-medium">
                                "La cura non è solo un atto medico, ma un gesto di profonda umanità."
                            </p>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Mi chiamo Natasha Maslarova e sono un'infermiera indipendente attiva nel Canton Ticino.
                            Con anni di esperienza nel settore sanitario, ho deciso di dedicarmi all'assistenza domiciliare
                            per poter seguire i miei pazienti con maggiore attenzione e dedizione.
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Credo fermamente in un approccio olistico alla cura, dove non si tratta solo la patologia,
                            ma si prende in carico la persona nella sua interezza. La mia missione è fornire supporto
                            professionale mantenendo sempre al centro la dignità e il comfort del paziente.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
