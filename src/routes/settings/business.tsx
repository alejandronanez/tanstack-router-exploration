import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/business")({
  component: () => (
    <div>
      <Link to="/settings/business/private" className="[&.active]:font-bold">
        Private
      </Link>
      <br />
      <Link to="/settings/business/public" className="[&.active]:font-bold">
        Public
      </Link>
      <Outlet />
    </div>
  ),
});
