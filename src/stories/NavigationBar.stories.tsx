import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { NavigationBar } from 'components/NavigationBar'

const Template: ComponentStory<typeof NavigationBar> = _1 => <NavigationBar />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Global Components/Navigation Bar',
  component: NavigationBar,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof NavigationBar>
