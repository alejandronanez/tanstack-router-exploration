import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/personal')({
  component: () => <div>Hello /settings/personal!</div>
})