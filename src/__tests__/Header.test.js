/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../components/Header';

test('<Header />', () => {
  const header = render(<Header />);

  expect(header).toMatchSnapshot();
  expect(screen.getByText("Welcome to the Mum's Deals Page!")).toBeInTheDocument();
});
