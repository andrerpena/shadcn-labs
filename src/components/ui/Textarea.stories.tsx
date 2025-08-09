import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is some sample text in a textarea.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
};

export const CustomRows: Story = {
  args: {
    placeholder: 'This textarea has 6 rows',
    rows: 6,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2 w-96">
      <label htmlFor="message" className="text-sm font-medium">
        Your message
      </label>
      <Textarea {...args} id="message" />
    </div>
  ),
  args: {
    placeholder: 'Tell us a little bit about yourself...',
  },
};