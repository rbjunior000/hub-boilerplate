import { Meta, StoryFn } from '@storybook/react'
import { Button } from '../Button'
import { Form } from './Form'
import { z } from '@/utils'

export default {
  title: 'Components/Form',
  component: Form,
  args: {
    onSubmit: (values) => {
      console.log({ values })
    },
    defaultValues: {
      name: 'aopdkapodk@gmail.com',
    },
  },
} as Meta<typeof Form<{ name: string; date: string }>>

const schema = z.object({
  group: z.array(z.string()),
  // datetime: z.string(),
  // password: z.string(),
  // checkbox: z.string(),
  // switch: z.string(),
})

const Template: StoryFn<typeof Form> = (args) => (
  <Form {...args} schema={schema}>
    <Form.Text name="email" />
    <Form.Select
      name="option"
      options={[
        { value: '1', label: '1' },
        { value: '2', label: '2' },
      ]}
    />
    <Form.Date name="date" />
    <Form.DateTime name="datetime" />
    <Form.Password name="password" />
    <Form.Checkbox name="checkbox" label="okasdoak" />
    <Form.Switch name="switch" label="okasdoak" />
    <Button type="submit">Submit</Button>
  </Form>
)

export const Default = Template.bind({})
Default.args = {}
