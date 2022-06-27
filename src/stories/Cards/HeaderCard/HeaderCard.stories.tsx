import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HeaderCard } from './'

const HeaderCardRender: React.FC<{
  headTitle: string
  content: string
  title: string
}> = ({ ...props }) => {
  return <HeaderCard props={props} />
}

const Template: ComponentStory<typeof HeaderCardRender> = args => (
  <HeaderCardRender {...args} />
)

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  headTitle: 'GDSC Waseda',
  title: 'About Us',
  content: "Waseda University's chapter of the Google Developer Student Club"
}

export default {
  title: 'Cards/HeaderCard',
  component: HeaderCard,
  argTypes: {
    headTitle: { control: 'text' },
    title: { control: 'text' },
    content: { control: 'text' }
  }
} as ComponentMeta<typeof HeaderCard>
