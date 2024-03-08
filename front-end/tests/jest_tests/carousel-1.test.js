import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeCarousel from '../../src/app/components/carousel.js';

describe('HomeCarousel Component', () => {
  it('renders HomeCarousel component with correct images', () => {
    render(<HomeCarousel />);

    // Assert that each image in the carousel is rendered
    const image2 = screen.getByAltText('Image 2');
    expect(image2).toBeInTheDocument();

    const image3 = screen.getByAltText('Image 3');
    expect(image3).toBeInTheDocument();
  });
});
