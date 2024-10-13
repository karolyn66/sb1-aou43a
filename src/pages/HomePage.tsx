import React from 'react';
import MapComponent from '../components/MapComponent';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Weltkarte</h1>
      <div className="mb-8">
        <MapComponent />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Regionen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/europa" className="bg-blue-100 p-4 rounded-md hover:bg-blue-200">Europa</a>
          <a href="/afrika" className="bg-blue-100 p-4 rounded-md hover:bg-blue-200">Afrika</a>
          <a href="/asien" className="bg-blue-100 p-4 rounded-md hover:bg-blue-200">Asien</a>
          <a href="/sudamerika" className="bg-blue-100 p-4 rounded-md hover:bg-blue-200">Südamerika</a>
          <a href="/nordamerika" className="bg-blue-100 p-4 rounded-md hover:bg-blue-200">Nordamerika</a>
          <a href="/antarktis" className="bg-blue-100 p-4 rounded-md hover:bg-blue-200">Antarktis</a>
          <a href="/ozeanien" className="bg-blue-100 p-4 rounded-md hover:bg-blue-200">Ozeanien</a>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Über die Weltkarte</h2>
        <p className="mb-4">Die Weltkarte ist eine faszinierende Darstellung unseres Planeten Erde. Sie zeigt die Verteilung von Land und Wasser, die Grenzen zwischen Ländern und die vielfältigen geografischen Merkmale, die unsere Welt ausmachen.</p>
        <p>Entdecken Sie die verschiedenen Kontinente, Ozeane und Länder, und erfahren Sie mehr über die Geografie unserer Erde.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beliebte Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add article previews here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;