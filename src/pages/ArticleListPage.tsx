import React from 'react';

const ArticleListPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Alle Artikel</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Regionen</h2>
          <ul className="space-y-2">
            <li><a href="/weltkarte" className="text-blue-600 hover:underline">Weltkarte</a></li>
            <li><a href="/europa" className="text-blue-600 hover:underline">Europa</a></li>
            <li><a href="/afrika" className="text-blue-600 hover:underline">Afrika</a></li>
            <li><a href="/asien" className="text-blue-600 hover:underline">Asien</a></li>
            <li><a href="/sudamerika" className="text-blue-600 hover:underline">Südamerika</a></li>
            <li><a href="/nordamerika" className="text-blue-600 hover:underline">Nordamerika</a></li>
            <li><a href="/antarktis" className="text-blue-600 hover:underline">Antarktis</a></li>
            <li><a href="/ozeanien" className="text-blue-600 hover:underline">Ozeanien</a></li>
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <div className="space-y-8">
            {/* Sample article items */}
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2"><a href="/article/1" className="text-blue-600 hover:underline">Die Geographie Europas</a></h3>
              <p className="text-gray-600">Entdecken Sie die vielfältige Landschaft und Kultur des europäischen Kontinents.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2"><a href="/article/2" className="text-blue-600 hover:underline">Die Wüsten Afrikas</a></h3>
              <p className="text-gray-600">Erfahren Sie mehr über die faszinierenden Wüstenlandschaften Afrikas und ihre einzigartige Ökologie.</p>
            </div>
            {/* Add more article items here */}
          </div>
          <div className="mt-8">
            {/* Pagination component would go here */}
            <p>Seite 1 von 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListPage;