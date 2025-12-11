import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-gray-900 font-semibold mb-4">Stéphane DAVID</h4>
            <p className="text-sm text-gray-500 max-w-sm">
              Entretien espaces verts, nettoyage et services à la personne. L'excellence et la proximité au cœur des Vosges.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-medium text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-gray-900 transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-gray-900 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-gray-900 transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-gray-900 font-medium text-sm mb-4">Légal</h4>
             <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Stéphane DAVID. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400">
            Conçu avec soin.
          </p>
        </div>
      </div>
    </footer>
  );
};