// MapCard отвечает за ссылку на карту и расписания Германии.
export function MapCard() {
  return (
    <article className="widget map-card" aria-labelledby="map-title">
      <h2 id="map-title"><a href="#map">Карта Германии</a></h2>
      <a href="#schedule">Расписания</a>
    </article>
  );
}
