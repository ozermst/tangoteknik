import { render } from '@testing-library/react';

import PostTitle from './post-title';

describe('PostTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostTitle />);
    expect(baseElement).toBeTruthy();
  });
});
