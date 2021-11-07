import { render } from '@testing-library/react';
import TestProviders  from '../../utils/TestProviders';
import { MemoryRouter } from "react-router-dom";
import store from '../../store';
import AccountList from './AccountList';

test('Account List page', () => {
  const {getByText} = render(<TestProviders store={store}><MemoryRouter><AccountList /></MemoryRouter></TestProviders>);
  expect(getByText(/Accounts/i)).toBeInTheDocument();
});
