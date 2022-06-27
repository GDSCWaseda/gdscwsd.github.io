import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NavigationBar } from './'

const Template: ComponentStory<typeof NavigationBar> = _1 => <NavigationBar />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Global Components/Navigation Bar',
  component: NavigationBar,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof NavigationBar>
