import React from 'react';
import { Users, MapPin, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-emerald-600 font-semibold tracking-wide uppercase text-xs mb-2 block">L'Entreprise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">
              Une équipe humaine, <br />à votre écoute.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Users className="text-gray-900" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Équipe Familiale</h3>
                  <p className="text-gray-600 leading-relaxed mt-1">
                    Une équipe de 5 professionnels dévoués. Notre meilleure référence, ce sont nos clients.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Heart className="text-gray-900" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Approche Humaine</h3>
                  <p className="text-gray-600 leading-relaxed mt-1">
                    Au-delà du service, nous privilégions le contact humain, l'écoute et la bienveillance dans chaque intervention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <MapPin className="text-gray-900" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Zone d'intervention</h3>
                  <p className="text-gray-600 leading-relaxed mt-1">
                    Basés à <span className="font-semibold text-gray-900">Golbey (88)</span>. Nous intervenons dans les Vosges et départements limitrophes : 
                    Meuse (55), Haut-Rhin (68), Bas-Rhin (67), Meurthe-et-Moselle (54), Haute-Saône (70), Moselle (57).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
               <img src="https://picsum.photos/id/433/1000/1000" alt="Team at work" className="w-full h-full object-cover" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-3xl font-bold text-gray-900 mb-1">5+</p>
              <p className="text-gray-500 font-medium text-sm">Départements couverts pour mieux vous servir.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};