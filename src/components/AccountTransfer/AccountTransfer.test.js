import { render, screen } from '@testing-library/react';
import TestProviders  from '../../utils/TestProviders';
import { MemoryRouter } from "react-router-dom";
import store from '../../store';
import AccountTransfer from './AccountTransfer';

test('Account Transfer page', () => {
  render(<TestProviders store={store}><MemoryRouter><AccountTransfer /></MemoryRouter></TestProviders>);
  
  const linkElement = screen.getByText(/New Transfer/i);
  expect(linkElement).toBeInTheDocument();
});
