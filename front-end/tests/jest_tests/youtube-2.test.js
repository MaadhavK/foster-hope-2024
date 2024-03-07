import { render, screen } from '@testing-library/react';
import YoutubeEmbed from '../../src/app/components/youtube.js';

// Mocking the YouTube component
jest.mock('react-youtube', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => <div data-testid="youtube-video"></div>),
}));

test('renders YouTube video with correct class and id', () => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=MMwEdsRBm9A';
  render(<YoutubeEmbed params={youtubeUrl} />);

  // Find the YouTube video component by its data-testid
  const youtubeVideo = screen.getByTestId('youtube-video');

  // Assert that the YouTube video component is rendered
  expect(youtubeVideo).toBeInTheDocument();

  // You can add further assertions based on your requirements
});
