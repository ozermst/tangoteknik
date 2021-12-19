import { render } from '@testing-library/react';

import SiteName from './site-name';

describe('SiteName', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiteName />);
    expect(baseElement).toBeTruthy();
  });
});
