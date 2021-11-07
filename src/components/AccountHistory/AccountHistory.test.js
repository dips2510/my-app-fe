import { render, screen } from '@testing-library/react';
import AccountHistory from './AccountHistory';
import TestProviders  from '../../utils/TestProviders';
import store from '../../store';

test('Account History page', () => {
  render(<TestProviders store={store}><AccountHistory /></TestProviders>);
  
  const linkElement = screen.getByText(/Description/i);
  expect(linkElement).toBeInTheDocument();
});
