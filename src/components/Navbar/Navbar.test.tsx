import React from 'react';
import { render } from '@testing-library/react';

import { CustomThemeProvider } from '../../utils/CustomThemeProvider';
import { NavBar } from './Navbar';

const setup = () => render(
  <CustomThemeProvider>
    <NavBar />
  </CustomThemeProvider>
);

describe('<Navbar />', () => {
  it('should render the navbar', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
