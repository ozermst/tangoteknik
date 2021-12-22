import { render } from '@testing-library/react';

import HeroPost from './hero-post';

describe('HeroPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroPost />);
    expect(baseElement).toBeTruthy();
  });
});
