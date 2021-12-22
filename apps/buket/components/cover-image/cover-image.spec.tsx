import { render } from '@testing-library/react';

import CoverImage from './cover-image';

describe('CoverImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoverImage />);
    expect(baseElement).toBeTruthy();
  });
});
