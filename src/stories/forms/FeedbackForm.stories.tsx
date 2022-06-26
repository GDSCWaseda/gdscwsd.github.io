import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FeedbackForm } from 'components/Forms'

const Template: ComponentStory<typeof FeedbackForm> = args => <FeedbackForm />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'Forms/Feedback Form',
  component: FeedbackForm,
  argTypes: {}
} as ComponentMeta<typeof FeedbackForm>
