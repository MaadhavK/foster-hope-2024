import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../../src/app/components/NavBar.js';

describe('NavBar Component', () => {
  it('renders NavBar component with correct links', () => {
    render(<NavBar />);

    // Assert that the brand link is rendered with the correct text and href
    const brandLink = screen.getByText('Foster Hope.');
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute('href', '/');

    // Assert that the navigation links are rendered with the correct text and href
    const aboutLink = screen.getByText('About Us');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    const countiesLink = screen.getByText('Counties');
    expect(countiesLink).toBeInTheDocument();
    expect(countiesLink).toHaveAttribute('href', '/counties');
  });
});
