import React from 'react';
import { Button } from './ui/Button.tsx';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-50 pt-16">
      
      {/* Background Image with Blur Overlay for depth */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://picsum.photos/id/114/2560/1440" 
            alt="Paysage Vosges" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] bg-gradient-to-b from-white/80 via-white/20 to-white/90"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm animate-fade-in-up">
          <span className="text-xs font-semibold text-gray-800 tracking-wide uppercase">Golbey & Environs</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6 drop-shadow-sm text-balance">
          L'excellence au service <br /> de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">habitat.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-normal text-balance leading-relaxed">
          Entretien d'espaces verts, nettoyage professionnel et services à la personne. Une entreprise familiale à votre écoute.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Demander un devis
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}>
            Découvrir nos services
          </Button>
        </div>
      </div>
    </section>
  );
};