import { render, screen } from '@testing-library/react';
import { Button } from './';
import { ButtonColor } from './types';

describe('button-ui', () => {
  test('render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('set color props', () => {
    const secondaryColor = '#26a69a;';

    render(<Button color={ButtonColor.SECONDARY}>Test</Button>);
    expect(screen.getByText('Test')).toHaveStyle({
      backgroundColor: secondaryColor
    });
  });
});
