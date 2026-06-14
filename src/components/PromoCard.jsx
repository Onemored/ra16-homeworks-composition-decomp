import promoArtUrl from '../../assets/promo-art.png';

// PromoCard отвечает за рекламно-информационный блок рядом с новостями.
export function PromoCard() {
  return (
    <aside className="promo" aria-labelledby="promo-title">
      <img className="promo__art" src={promoArtUrl} alt="" />
      <h2 id="promo-title"><a href="#mistakes">Работа над ошибками</a></h2>
      <p>Смотрите на Яндексе и запоминайте</p>
    </aside>
  );
}
