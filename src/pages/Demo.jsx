import React, { useState } from 'react';
import './Demo.css';

const Demo = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos los temas');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Todos los temas',
    'Internacional',
    'Política y Gobierno',
    'Economía y Finanzas',
    'Seguridad y Justicia',
    'Salud y Ciencia',
    'Medio Ambiente',
    'Educación',
    'Tecnología e Innovación',
    'Deportes',
    'Cultura y Entretenimiento',
    'Sociedad',
    'Género'
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Avances en la cumbre climática internacional',
      category: 'Medio Ambiente',
      source: 'ONU Medio Ambiente',
      date: '19/11/2025',
      image: 'https://images.unsplash.com/photo-1569163139394-de44cb54d5ce?w=400',
      excerpt: 'Los líderes mundiales acuerdan nuevas metas para la reducción de emisiones...'
    },
    {
      id: 2,
      title: 'Innovación tecnológica en educación digital',
      category: 'Educación',
      source: 'Ministerio de Educación',
      date: '18/11/2025',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
      excerpt: 'Nuevas plataformas educativas transforman el aprendizaje en instituciones verificadas...'
    },
    {
      id: 3,
      title: 'Avances en investigación médica certificada',
      category: 'Salud y Ciencia',
      source: 'Instituto de Salud Global',
      date: '17/11/2025',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      excerpt: 'Estudio verificado revela nuevos tratamientos para enfermedades crónicas...'
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'Todos los temas' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="demo-container">
      {/* Header */}
      <header className="demo-header">
        <div className="demo-header-content">
          <div className="demo-logo">
            <h1>FidesKey</h1>
            <span>La llave de tu confianza digital</span>
          </div>
          <div className="demo-search">
            <input
              type="text"
              placeholder="Buscar noticias o temas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="demo-layout">
        {/* Sidebar de categorías */}
        <aside className="demo-sidebar">
          <h3>Categorías</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li key={category}>
                <button
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Contenido principal */}
        <main className="demo-main">
          <div className="demo-header-main">
            <h2>Noticias Verificadas</h2>
            <div className="demo-filters">
              <span className="current-category">{selectedCategory}</span>
            </div>
          </div>

          <div className="news-grid">
            {filteredNews.map(news => (
              <article key={news.id} className="news-card-demo">
                <div className="news-image-container">
                  <img src={news.image} alt={news.title} />
                  <span className="news-category-tag">{news.category}</span>
                </div>
                <div className="news-content-demo">
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                  <div className="news-meta">
                    <span className="news-source">Fuente: {news.source}</span>
                    <span className="news-date">{news.date}</span>
                  </div>
                  <div className="news-verification">
                    <span className="verified-badge">✓ Verificado</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="no-results">
              <p>No se encontraron noticias para los filtros seleccionados.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Demo;
