import { useState } from 'react';

// SearchBox отвечает за форму поискового запроса и обратную связь.
export function SearchBox() {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const normalizedQuery = query.trim();
    setMessage(normalizedQuery ? `Ищем: ${normalizedQuery}` : 'Введите поисковый запрос');
  }

  return (
    <section className="search" aria-label="Поиск">
      <form className="search__row" onSubmit={handleSubmit} noValidate>
        <label className="logo" htmlFor="search-query" aria-label="Яндекс">
          <span>Я</span>ндекс
        </label>
        <div className="search__field">
          <input
            autoComplete="off"
            id="search-query"
            name="query"
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            value={query}
            aria-describedby={message ? 'search-message search-hint' : 'search-hint'}
          />
          <span className="keyboard" aria-hidden="true">⌨</span>
        </div>
        <button type="submit">Найти</button>
      </form>
      <p className="search__hint" id="search-hint">
        Найдётся всё. Например, <span>фаза луны сегодня</span>
      </p>
      {message && <p className="search__message" id="search-message" role="status">{message}</p>}
    </section>
  );
}
