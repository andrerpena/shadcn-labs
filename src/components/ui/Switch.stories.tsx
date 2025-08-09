import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="airplane-mode" />
      <label htmlFor="airplane-mode" className="text-sm font-medium">
        Airplane mode
      </label>
    </div>
  ),
  args: {},
};