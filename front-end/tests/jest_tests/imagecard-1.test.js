import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCard from '../../src/app/about/components/ImageCard.js';

// Unit test ImageCard component
describe('ImageCard Component', () => {
  const imageProps = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    alt: 'Image 1',
    textBelowImage: 'React'
  };

  it('renders ImageCard component with correct props', () => {
    render(<ImageCard {...imageProps} />);

    // Assert that the image is rendered with the correct src and alt attributes
    const imageElement = screen.getByAltText('Image 1');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', imageProps.src);

    // Assert that the text below the image is rendered
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
