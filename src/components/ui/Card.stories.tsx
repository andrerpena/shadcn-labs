import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent className="pt-6">
        <p>A simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>No Footer Card</CardTitle>
        <CardDescription>This card has no footer section.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content without a footer.</p>
      </CardContent>
    </Card>
  ),
};