// PopularLinks отвечает за список часто посещаемых разделов.
export function PopularLinks({ links = [] }) {
  return (
    <article className="widget popular" aria-labelledby="popular-title">
      <h2 id="popular-title"><a href="#popular">Посещаемое</a></h2>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <a href={`#${encodeURIComponent(link.title)}`}><strong>{link.title}</strong> — {link.description}</a>
          </li>
        ))}
      </ul>
    </article>
  );
}
