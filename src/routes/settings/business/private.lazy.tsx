import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/settings/business/private")({
  component: () => <div>Hello /settings/business/private!</div>,
});
