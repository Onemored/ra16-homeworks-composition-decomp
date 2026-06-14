// CurrencyRates отвечает за строку биржевых котировок.
export function CurrencyRates({ rates = [] }) {
  return (
    <section className="rates" aria-label="Курсы валют и сырья">
      {rates.map((rate) => (
        <span className="rate" key={rate.name}>
          <strong>{rate.name}</strong> {rate.value} <span className="muted">{rate.change}</span>
        </span>
      ))}
      <span className="more-button" aria-hidden="true">•••</span>
    </section>
  );
}
