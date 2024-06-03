import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/business/public')({
  component: () => <div>Hello /settings/business/public!</div>
})