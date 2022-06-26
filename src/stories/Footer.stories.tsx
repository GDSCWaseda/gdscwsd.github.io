import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { Footer } from 'components/Footer'

const FooterRender = () => {
  return <Footer />
}

const Template: ComponentStory<typeof FooterRender> = _1 => <FooterRender />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Global Components/Footer',
  component: FooterRender,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof FooterRender>
