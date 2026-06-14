// WeatherCard отвечает за текущую погоду и краткий прогноз.
export function WeatherCard({ temperature = '', morning = '', daytime = '' }) {
  return (
    <article className="widget weather" aria-labelledby="weather-title">
      <h2 id="weather-title"><a href="#weather">Погода</a></h2>
      <div className="weather__content">
        <span className="weather__icon" role="img" aria-label="Дождь">🌧</span>
        <strong>{temperature}</strong>
        <p>Утром {morning},<br />днём {daytime}</p>
      </div>
    </article>
  );
}
