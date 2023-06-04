import type { Meta, StoryObj } from '@storybook/react';
import { EColor } from './types';

import { Button } from './';

const meta = {
  title: 'shared/ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select'
      },
      description: 'Applies specified color (for example primary or secondary)',
      defaultValue: EColor.PRIMARY
    },
    children: {
      description: 'Label'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    color: EColor.PRIMARY
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: EColor.SECONDARY
  }
};

// export const Large: Story = {
//   args: {
//     size: 'large',
//     children: 'Button'
//   }
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     children: 'Button'
//   }
// };
