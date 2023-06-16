import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  parameters: {
    backgroundsColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const primary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
  },
};
export const secondary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
  },
};
export const red: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.RED,
  },
};

export const primaryDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
  },
};
primaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const secondaryDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
  },
};
secondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const redDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.RED,
  },
};
redDark.decorators = [ThemeDecorator(Theme.DARK)];
