import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/business/private')({
  component: () => <div>Hello /settings/business/private!</div>
})