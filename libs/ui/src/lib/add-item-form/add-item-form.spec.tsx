import React from 'react';
import { render } from '@testing-library/react';

import AddItemForm from './add-item-form';

describe('AddItemForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddItemForm />);
    expect(baseElement).toBeTruthy();
  });
});
