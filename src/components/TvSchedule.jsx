// TvSchedule отвечает за список ближайших телепередач.
export function TvSchedule({ programs = [] }) {
  return (
    <article className="widget tv" aria-labelledby="tv-title">
      <h2 id="tv-title">
        <a href="#tv">Телепрограмма</a>
        <a className="live-badge" href="#live">▶ Эфир</a>
      </h2>
      <ul>
        {programs.map((program) => (
          <li key={`${program.time}-${program.title}`}>
            <time>{program.time}</time>
            <a href={`#${encodeURIComponent(program.title)}`}>{program.title}</a>
            <span>{program.channel}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
