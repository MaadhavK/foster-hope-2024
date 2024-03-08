import React from 'react';
import { render, screen, act } from '@testing-library/react';
import AboutCard from '../../src/app/about/components/aboutCard.js';

// Mock the fetch function
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve([]),
  ok: true,
});

// Unit test AboutCard component
describe('AboutCard Component', () => {
  const props = {
    member: {
      name: "Raymond Wang",
      role: "Frontend",
      bio:  "I'm a second-year cs student at UT, and I'm interested in application and game programming, as well as data modeling / ml. In spare time, I game, play ultimate frisbee, and hang with my cat.",
      img: "/images/Raymond.jpeg",
      username: "raymww"
    }
  };

  it('renders AboutCard component with correct props', async () => {
    await act(async () => {
      render(<AboutCard {...props} />);
    });

    // Assert that the full name is rendered
    expect(screen.getByText('Raymond Wang')).toBeInTheDocument();

    // Assert that the bio is rendered
    expect(screen.getByText(/second-year cs student at UT/)).toBeInTheDocument();

    // Assert that the role is rendered
    expect(screen.getByText(/Role: Frontend/)).toBeInTheDocument();
    
    // You can also test the data fetched from APIs if you wish
    // For example, if you expect the commit count to be 0
    expect(screen.getByText(/In spare time, I game, play ultimate frisbee, /)).toBeInTheDocument();
    // Similarly, test other data fetched from APIs
  });
});
