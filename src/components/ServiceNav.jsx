// ServiceNav отвечает за навигацию по сервисам над поиском.
export function ServiceNav({ services = [] }) {
  return (
    <nav className="services" aria-label="Сервисы">
      {services.map((service) => <a href={`#${encodeURIComponent(service)}`} key={service}>{service}</a>)}
    </nav>
  );
}
