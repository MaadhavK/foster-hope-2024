import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeCarousel from '../../src/app/components/carousel.js';

describe('HomeCarousel Component', () => {
  it('renders HomeCarousel component with correct images', () => {
    render(<HomeCarousel />);

    // Assert that each image in the carousel is rendered
    const image1 = screen.getByAltText('Image 1');
    expect(image1).toBeInTheDocument();

    const image2 = screen.getByAltText('Image 2');
    expect(image2).toBeInTheDocument();
  });
});
