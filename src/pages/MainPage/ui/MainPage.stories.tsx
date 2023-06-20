import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  parameters: {
    backgroundsColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
