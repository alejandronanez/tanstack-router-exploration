import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  component: () => (
    <div>
      Hello /settings/!
      <br />
      <Link to="/settings" className="[&.active]:font-bold">
        All Settings
      </Link>
      <br />
      <Link to="/settings/business" className="[&.active]:font-bold">
        Business
      </Link>
      <br />
      <Link to="/settings/personal" className="[&.active]:font-bold">
        Personal
      </Link>
      <Outlet />
    </div>
  ),
});
