import React from 'react';
import { Button } from './ui/Button.tsx';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Nous contacter</h2>
          <p className="text-xl text-gray-500">
            Une question ? Un devis ? Stéphane et son équipe sont là pour vous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Coordonnées</h3>
              
              <div className="space-y-6">
                <a href="tel:0640199275" className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="text-lg font-medium">06 40 19 92 75</span>
                </a>

                <a href="mailto:s.david037@laposte.net" className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors group">
                   <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-lg font-medium">s.david037@laposte.net</span>
                </a>

                <div className="flex items-start gap-4 text-gray-600">
                   <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-lg font-medium block text-gray-900">Stéphane DAVID</span>
                    <span className="block">5 rue Jules Ferry - Entrée B</span>
                    <span className="block">88190 Golbey</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
              <div className="flex items-center gap-4 mb-2">
                <Clock className="text-emerald-700" size={20} />
                <h3 className="text-lg font-semibold text-emerald-900">Horaires</h3>
              </div>
              <p className="text-emerald-800/80">
                Lundi - Vendredi : 8h00 - 18h00<br/>
                Samedi : Sur rendez-vous
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm font-medium text-gray-700">Prénom</label>
                <input 
                  type="text" 
                  id="firstname" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 transition-all outline-none"
                  placeholder="Jean"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastname" className="text-sm font-medium text-gray-700">Nom</label>
                <input 
                  type="text" 
                  id="lastname" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 transition-all outline-none"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 transition-all outline-none"
                placeholder="jean.dupont@exemple.fr"
              />
            </div>

             <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 transition-all outline-none resize-none"
                placeholder="Bonjour, je souhaiterais un devis pour..."
              />
            </div>

            <Button size="lg" className="w-full">
              Envoyer le message
            </Button>
            <p className="text-xs text-center text-gray-400 mt-4">
              En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
};