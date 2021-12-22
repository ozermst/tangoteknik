import { render } from '@testing-library/react';

import SectionSeparator from './section-separator';

describe('SectionSeparator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionSeparator />);
    expect(baseElement).toBeTruthy();
  });
});
