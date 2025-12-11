import React from 'react';
import { Shovel, Sparkles, Home, Palette, ShoppingBag, Droplets } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Nos Domaines d'Expertise.</h2>
          <p className="text-xl text-gray-500 font-normal">
            De l'entretien de votre jardin au nettoyage de vos locaux, nous apportons le même soin à chaque détail.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card 1: Espaces Verts (Large) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-gray-100 aspect-[16/9] md:aspect-auto">
            <div className="absolute inset-0">
              <img src="https://picsum.photos/id/10/1200/800" alt="Espaces verts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white shadow-lg">
                <Shovel size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Espaces Verts</h3>
              <p className="text-gray-200 text-sm max-w-md">Entretien complet de vos jardins, tonte, taille de haies et création paysagère. Pour un extérieur qui respire.</p>
            </div>
          </div>

          {/* Card 2: Nettoyage (Tall) */}
          <div className="md:row-span-2 relative group overflow-hidden rounded-3xl bg-gray-100">
             <div className="absolute inset-0">
              <img src="https://picsum.photos/id/175/600/1000" alt="Nettoyage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
               <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-lg">
                <Sparkles size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Nettoyage &<br/>Propreté</h3>
              <p className="text-gray-200 text-sm">
                Pour professionnels et particuliers. Lavage de vitres, entretien des sols, ménage courant.
              </p>
            </div>
          </div>

          {/* Card 3: Aide à domicile */}
          <div className="relative group overflow-hidden rounded-3xl bg-gray-50 p-8 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4 text-gray-900">
              <Home size={32} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Aide à domicile</h3>
              <p className="text-gray-500 text-sm">Assistance au quotidien pour les particuliers. Une présence humaine et bienveillante.</p>
            </div>
          </div>

          {/* Card 4: Services de proximité */}
          <div className="relative group overflow-hidden rounded-3xl bg-gray-50 p-8 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4 text-gray-900">
              <ShoppingBag size={32} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Courses & Pharmacie</h3>
              <p className="text-gray-500 text-sm">Un service de proximité pour vos courses et le retrait de médicaments.</p>
            </div>
          </div>

          {/* Card 5: Petits travaux (Wide) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-gray-900 p-8 flex flex-col md:flex-row items-start md:items-center justify-between text-white">
            <div className="max-w-md">
               <div className="mb-4 flex gap-3">
                 <Palette className="text-orange-400" />
                 <Droplets className="text-blue-400" />
               </div>
              <h3 className="text-2xl font-bold mb-2">Petits Travaux & Bricolage</h3>
              <p className="text-gray-400 text-sm">Peinture, pose d'étagères, installation de tringles... Ces petits détails qui changent tout.</p>
            </div>
            <div className="mt-6 md:mt-0">
               <span className="inline-block px-4 py-2 rounded-full border border-white/20 text-xs font-medium hover:bg-white/10 transition-colors cursor-default">
                 Service sur-mesure
               </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};