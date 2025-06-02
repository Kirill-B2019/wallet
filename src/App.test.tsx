import '@testing-library/jest-dom'; // Добавленный импорт
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

describe('GANYMEDE Wallet UI', () => {
  test('рендерит заголовок кошелька', () => {
    render(<Home />);
    expect(screen.getByText(/Кошелек ГАНИМЕД/i)).toBeInTheDocument();
  });
});
