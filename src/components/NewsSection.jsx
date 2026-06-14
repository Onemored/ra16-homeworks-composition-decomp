// NewsSection отвечает за переключаемую ленту главных новостей.
export function NewsSection({ tabs = [], activeTab, onTabChange, news = [], date = '' }) {
  return (
    <section className="news" aria-labelledby="news-title">
      <header className="news__header">
        <div className="news__tabs" role="tablist" aria-label="Разделы новостей">
          {tabs.map((tab, index) => (
            <button
              className={tab.id === activeTab ? 'tab tab--active' : 'tab'}
              id={`tab-${tab.id}`}
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              role="tab"
              aria-controls="news-panel"
              aria-selected={tab.id === activeTab}
              type="button"
            >
              <span id={index === 0 ? 'news-title' : undefined}>{tab.label}</span>
            </button>
          ))}
        </div>
        <time className="news__date" dateTime="2019-07-31T02:32">
          {date}
        </time>
      </header>
      <ul
        className="news__list"
        id="news-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {news.map((item) => (
          <li key={item.text}>
            <a href={`#${encodeURIComponent(item.source)}`}>
              <span className="news__icon" aria-hidden="true">{item.icon}</span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
