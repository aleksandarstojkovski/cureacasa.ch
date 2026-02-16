import React from 'react';
import { Stethoscope, HeartPulse, Activity, UserCheck, Syringe, ClipboardList } from 'lucide-react';
import SEO from './SEO';

const Services = () => {
    const services = [
        {
            icon: <Stethoscope className="h-8 w-8 text-primary-600" />,
            title: "Cure Infermieristiche di Base",
            description: "Assistenza quotidiana per l'igiene personale, la mobilizzazione e il comfort del paziente."
        },
        {
            icon: <Syringe className="h-8 w-8 text-primary-600" />,
            title: "Terapie e Iniezioni",
            description: "Somministrazione di terapie iniettive (intramuscolari, sottocutanee), prelievi e gestione farmaci."
        },
        {
            icon: <Activity className="h-8 w-8 text-primary-600" />,
            title: "Gestione Ferite",
            description: "Medicazioni semplici e complesse, cura di ulcere e monitoraggio della guarigione."
        },
        {
            icon: <HeartPulse className="h-8 w-8 text-primary-600" />,
            title: "Monitoraggio Parametri",
            description: "Controllo costante di pressione, glicemia e altri parametri vitali essenziali."
        },
        {
            icon: <UserCheck className="h-8 w-8 text-primary-600" />,
            title: "Valutazione e Pianificazione",
            description: "Analisi dei bisogni del paziente e pianificazione interventi assistenziali personalizzati."
        },
        {
            icon: <ClipboardList className="h-8 w-8 text-primary-600" />,
            title: "Consulenza e Supporto",
            description: "Educazione sanitaria al paziente e ai familiari per una gestione autonoma e sicura."
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-slate-50">
            <SEO
                title="Servizi Infermieristici a Domicilio"
                description="Scopri i nostri servizi: cure di base, iniezioni, gestione ferite, monitoraggio parametri e consulenza sanitaria. Assistenza completa a domicilio."
                keywords="servizi infermieristici, iniezioni domicilio, cura ferite, monitoraggio pressione, assistenza anziani casa"
                canonical="https://cureacasa.ch/services"
            />
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">I Miei Servizi</h2>
                    <p className="text-slate-600">
                        Offro una gamma completa di prestazioni infermieristiche, garantendo professionalità,
                        sicurezza e un approccio umano in ogni intervento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
