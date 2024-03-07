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
      name: "Grace Pan",
      role: "Frontend",
      bio: "I'm a third year cs major at UT, and I'm interested in web and app development. I like dancing and reading in my free time.",
      img: "/images/Grace.jpg",
      username: "pan-grace"
    }
  };

  it('renders AboutCard component with correct props', async () => {
    await act(async () => {
      render(<AboutCard {...props} />);
    });

    // Assert that the full name is rendered
    expect(screen.getByText('Grace Pan')).toBeInTheDocument();

    // Assert that the bio is rendered
    expect(screen.getByText(/third year cs major at UT/)).toBeInTheDocument();

    // Assert that the role is rendered
    expect(screen.getByText(/Role: Frontend/)).toBeInTheDocument();
    
    // You can also test the data fetched from APIs if you wish
    // For example, if you expect the commit count to be 0
    expect(screen.getByText(/Commit: 0/)).toBeInTheDocument();
    // Similarly, test other data fetched from APIs
  });
});
