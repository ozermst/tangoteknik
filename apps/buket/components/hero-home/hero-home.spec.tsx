import { render } from '@testing-library/react';

import HeroHome from './hero-home';

describe('HeroHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroHome />);
    expect(baseElement).toBeTruthy();
  });
});
