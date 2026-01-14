import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './card';
import { Button } from '../atoms/button';

/**
 * Card Component (Molecule)
 * 
 * The Card component is a versatile container that combines multiple atoms
 * (typography, spacing, borders) to create a cohesive content block.
 * 
 * **Atomic Design Level:** Molecule
 * - Combines multiple visual elements
 * - Has sub-components (Header, Content, Footer)
 * - Reusable in various contexts
 */
const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card container component composed of multiple sub-components. Part of the Atomic Design molecules layer.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic card with header and content
 */
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. It can contain any elements you need.</p>
      </CardContent>
    </Card>
  ),
};

/**
 * Card with header, content, and footer
 */
export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Configure your project settings and deployment options.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * Card with action button in header
 */
export const WithHeaderAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button size="sm" variant="ghost">Mark all as read</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm">
            <p className="font-medium">New message from John</p>
            <p className="text-muted-foreground">2 minutes ago</p>
          </div>
          <div className="text-sm">
            <p className="font-medium">System update available</p>
            <p className="text-muted-foreground">1 hour ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

/**
 * Small card variant
 */
export const SmallSize: Story = {
  render: () => (
    <Card size="sm" className="w-[300px]">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>Compact version with reduced padding</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">This card uses the small size variant.</p>
      </CardContent>
    </Card>
  ),
};

/**
 * Card with list content
 */
export const WithList: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Manage your team members and their roles.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
            <Button size="sm" variant="outline">Edit</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Jane Smith</p>
              <p className="text-xs text-muted-foreground">jane@example.com</p>
            </div>
            <Button size="sm" variant="outline">Edit</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">Add Member</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * Multiple cards showcase
 */
export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Card className="w-[250px]">
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>View your statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground">+20% from last month</p>
        </CardContent>
      </Card>
      
      <Card className="w-[250px]">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Active users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">456</div>
          <p className="text-xs text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>
      
      <Card className="w-[250px]">
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>Total revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$12,345</div>
          <p className="text-xs text-muted-foreground">+5% from last month</p>
        </CardContent>
      </Card>
    </div>
  ),
};
