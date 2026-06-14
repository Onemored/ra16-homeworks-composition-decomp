import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, test } from 'vitest';
import App from './App.jsx';
import { CurrencyRates } from './components/CurrencyRates.jsx';
import { LiveBroadcasts } from './components/LiveBroadcasts.jsx';
import { NewsSection } from './components/NewsSection.jsx';
import { PopularLinks } from './components/PopularLinks.jsx';
import { ServiceNav } from './components/ServiceNav.jsx';
import { TvSchedule } from './components/TvSchedule.jsx';
import { WeatherCard } from './components/WeatherCard.jsx';

afterEach(cleanup);

describe('App', () => {
  test('renders every required block from the reference layout', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'Информационный портал' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Сейчас в СМИ' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Путин упростил получение автомобильных номеров')).toBeInTheDocument();
    expect(screen.getByText('USD MOEX')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Работа над ошибками' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Сервисы' })).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toHaveAccessibleName('Яндекс');
    expect(screen.getByRole('complementary', { name: 'Реклама фильма' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Погода' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Посещаемое' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Карта Германии' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Телепрограмма/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Эфир' })).toBeInTheDocument();
    expect(screen.getByText('Наедине со всеми')).toBeInTheDocument();
    expect(screen.getByText('Управление как искусство')).toBeInTheDocument();
  });

  test('switches between all news feeds', async () => {
    const user = userEvent.setup();
    render(<App />);

    const germanyTab = screen.getByRole('tab', { name: 'в Германии' });
    germanyTab.focus();
    await user.keyboard('{Enter}');
    expect(screen.getByText('Берлин обсуждает новые городские транспортные маршруты')).toBeInTheDocument();
    expect(screen.queryByText('Путин упростил получение автомобильных номеров')).not.toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Рекомендуем' }));
    expect(screen.getByText('Пять идей для короткого путешествия на выходные')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Рекомендуем' })).toHaveAttribute('aria-selected', 'true');
  });

  test('validates and submits a search query', async () => {
    const user = userEvent.setup();
    render(<App />);

    const form = screen.getByRole('searchbox').closest('form');
    const submitButton = within(form).getByRole('button', { name: 'Найти' });

    await user.click(submitButton);
    expect(screen.getByText('Введите поисковый запрос')).toBeInTheDocument();

    await user.type(screen.getByRole('searchbox'), '  погода завтра  ');
    await user.click(submitButton);
    expect(screen.getByText('Ищем: погода завтра')).toBeInTheDocument();
  });

  test('renders reusable components safely with omitted collection props', () => {
    render(
      <>
        <NewsSection activeTab="empty" onTabChange={() => {}} />
        <CurrencyRates />
        <ServiceNav />
        <WeatherCard />
        <PopularLinks />
        <TvSchedule />
        <LiveBroadcasts />
      </>
    );

    expect(screen.getByRole('tabpanel')).toBeEmptyDOMElement();
    expect(screen.getByRole('navigation', { name: 'Сервисы' })).toBeEmptyDOMElement();
    expect(screen.getByRole('heading', { name: 'Погода' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Телепрограмма/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Эфир' })).toBeInTheDocument();
  });
});
