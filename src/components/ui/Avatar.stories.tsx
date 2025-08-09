import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url.com/avatar.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Large: Story = {
  render: () => (
    <Avatar className="h-16 w-16">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-lg">CN</AvatarFallback>
    </Avatar>
  ),
};

export const Small: Story = {
  render: () => (
    <Avatar className="h-8 w-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-xs">CN</AvatarFallback>
    </Avatar>
  ),
};

export const OnlyFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};