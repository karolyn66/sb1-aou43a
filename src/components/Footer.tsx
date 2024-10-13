import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Über uns</h3>
            <p className="text-sm">Weltkarte Map bietet interaktive Karten und Informationen über verschiedene Regionen der Welt.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelle Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-blue-300">Startseite</a></li>
              <li><a href="/weltkarte" className="text-sm hover:text-blue-300">Weltkarte</a></li>
              <li><a href="/europa" className="text-sm hover:text-blue-300">Europa</a></li>
              <li><a href="/asien" className="text-sm hover:text-blue-300">Asien</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-sm">Email: info@weltkartemap.de</p>
            <p className="text-sm">Telefon: +49 123 456789</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <Globe className="h-8 w-8 text-blue-500 mr-2" />
              <div>
                <h2 className="text-xl font-bold">weltkartemap.de</h2>
                <p className="text-sm">weltkarte online ansehen</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 weltkartemap.de. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;