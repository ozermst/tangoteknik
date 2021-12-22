import { render } from '@testing-library/react';

import MoreStories from './more-stories';

describe('MoreStories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoreStories />);
    expect(baseElement).toBeTruthy();
  });
});
