import { render } from '@testing-library/react';

import SocialMedia from './social-media';

describe('SocialMedia', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialMedia />);
    expect(baseElement).toBeTruthy();
  });
});
