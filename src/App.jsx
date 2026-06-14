import { useState } from 'react';
import { CurrencyRates } from './components/CurrencyRates.jsx';
import { LiveBroadcasts } from './components/LiveBroadcasts.jsx';
import { MapCard } from './components/MapCard.jsx';
import { MovieBanner } from './components/MovieBanner.jsx';
import { NewsSection } from './components/NewsSection.jsx';
import { PopularLinks } from './components/PopularLinks.jsx';
import { PromoCard } from './components/PromoCard.jsx';
import { SearchBox } from './components/SearchBox.jsx';
import { ServiceNav } from './components/ServiceNav.jsx';
import { TvSchedule } from './components/TvSchedule.jsx';
import { WeatherCard } from './components/WeatherCard.jsx';
import {
  broadcasts,
  currencies,
  newsByTab,
  popularLinks,
  services,
  tvPrograms
} from './data.js';

const newsTabs = [
  { id: 'media', label: 'Сейчас в СМИ' },
  { id: 'germany', label: 'в Германии' },
  { id: 'recommended', label: 'Рекомендуем' }
];

// App отвечает за компоновку всех информационных блоков страницы.
export default function App() {
  const [activeNewsTab, setActiveNewsTab] = useState('media');

  return (
    <main className="page-shell">
      <h1 className="sr-only">Информационный портал</h1>
      <div className="top-grid">
        <div>
          <NewsSection
            activeTab={activeNewsTab}
            date="31 июля, среда 02:32"
            news={newsByTab[activeNewsTab]}
            onTabChange={setActiveNewsTab}
            tabs={newsTabs}
          />
          <CurrencyRates rates={currencies} />
        </div>
        <PromoCard />
      </div>

      <div className="search-area">
        <ServiceNav services={services} />
        <SearchBox />
        <MovieBanner />
      </div>

      <section className="dashboard" aria-label="Информационные виджеты">
        <div className="dashboard__column">
          <WeatherCard temperature="+17°" morning="+17" daytime="+20" />
          <PopularLinks links={popularLinks} />
        </div>
        <div className="dashboard__column">
          <MapCard />
          <TvSchedule programs={tvPrograms} />
        </div>
        <div className="dashboard__column">
          <LiveBroadcasts broadcasts={broadcasts} />
        </div>
      </section>
    </main>
  );
}
