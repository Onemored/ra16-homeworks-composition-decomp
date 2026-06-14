import movieBannerUrl from '../../assets/movie-banner.png';

// MovieBanner отвечает за широкий рекламный баннер.
export function MovieBanner() {
  return (
    <aside className="movie-banner" aria-label="Реклама фильма">
      <img src={movieBannerUrl} alt="Форсаж: Хоббс и Шоу — в кино с 1 августа" />
    </aside>
  );
}
