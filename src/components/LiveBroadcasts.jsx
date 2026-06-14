// LiveBroadcasts отвечает за список доступных прямых эфиров.
export function LiveBroadcasts({ broadcasts = [] }) {
  return (
    <article className="widget broadcasts" aria-labelledby="broadcasts-title">
      <h2 id="broadcasts-title"><a href="#broadcasts">Эфир</a></h2>
      <ul>
        {broadcasts.map((broadcast) => (
          <li key={broadcast.title}>
            <span className="play" aria-hidden="true">▶</span>
            <a href={`#${encodeURIComponent(broadcast.title)}`}>{broadcast.title}</a>
            <span>{broadcast.channel}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
