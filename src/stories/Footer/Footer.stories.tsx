import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './'

const FooterRender = () => {
  return <Footer />
}

const Template: ComponentStory<typeof FooterRender> = _1 => <FooterRender />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Global Components/Footer',
  component: FooterRender,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof FooterRender>
