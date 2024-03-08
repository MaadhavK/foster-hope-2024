import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../../src/app/components/NavBar.js';

describe('NavBar Component', () => {
  it('renders NavBar component with correct links', () => {
    render(<NavBar />);

    const countiesLink = screen.getByText('Counties');
    expect(countiesLink).toBeInTheDocument();
    expect(countiesLink).toHaveAttribute('href', '/counties');

    const organizationsLink = screen.getByText('Organizations');
    expect(organizationsLink).toBeInTheDocument();
    expect(organizationsLink).toHaveAttribute('href', '/organizations');

    const resourcesLink = screen.getByText('Resources');
    expect(resourcesLink).toBeInTheDocument();
    expect(resourcesLink).toHaveAttribute('href', '/resources');
  });
});
