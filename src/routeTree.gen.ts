/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as SettingsPersonalImport } from './routes/settings/personal'
import { Route as SettingsBusinessImport } from './routes/settings/business'
import { Route as SettingsBusinessPublicImport } from './routes/settings/business/public'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const SettingsBusinessPrivateLazyImport = createFileRoute(
  '/settings/business/private',
)()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const SettingsRoute = SettingsImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const SettingsPersonalRoute = SettingsPersonalImport.update({
  path: '/personal',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsBusinessRoute = SettingsBusinessImport.update({
  path: '/business',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsBusinessPrivateLazyRoute =
  SettingsBusinessPrivateLazyImport.update({
    path: '/private',
    getParentRoute: () => SettingsBusinessRoute,
  } as any).lazy(() =>
    import('./routes/settings/business/private.lazy').then((d) => d.Route),
  )

const SettingsBusinessPublicRoute = SettingsBusinessPublicImport.update({
  path: '/public',
  getParentRoute: () => SettingsBusinessRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings/business': {
      id: '/settings/business'
      path: '/business'
      fullPath: '/settings/business'
      preLoaderRoute: typeof SettingsBusinessImport
      parentRoute: typeof SettingsImport
    }
    '/settings/personal': {
      id: '/settings/personal'
      path: '/personal'
      fullPath: '/settings/personal'
      preLoaderRoute: typeof SettingsPersonalImport
      parentRoute: typeof SettingsImport
    }
    '/settings/business/public': {
      id: '/settings/business/public'
      path: '/public'
      fullPath: '/settings/business/public'
      preLoaderRoute: typeof SettingsBusinessPublicImport
      parentRoute: typeof SettingsBusinessImport
    }
    '/settings/business/private': {
      id: '/settings/business/private'
      path: '/private'
      fullPath: '/settings/business/private'
      preLoaderRoute: typeof SettingsBusinessPrivateLazyImport
      parentRoute: typeof SettingsBusinessImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  SettingsRoute: SettingsRoute.addChildren({
    SettingsBusinessRoute: SettingsBusinessRoute.addChildren({
      SettingsBusinessPublicRoute,
      SettingsBusinessPrivateLazyRoute,
    }),
    SettingsPersonalRoute,
  }),
  AboutLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/settings",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx",
      "children": [
        "/settings/business",
        "/settings/personal"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/settings/business": {
      "filePath": "settings/business.tsx",
      "parent": "/settings",
      "children": [
        "/settings/business/public",
        "/settings/business/private"
      ]
    },
    "/settings/personal": {
      "filePath": "settings/personal.tsx",
      "parent": "/settings"
    },
    "/settings/business/public": {
      "filePath": "settings/business/public.tsx",
      "parent": "/settings/business"
    },
    "/settings/business/private": {
      "filePath": "settings/business/private.lazy.tsx",
      "parent": "/settings/business"
    }
  }
}
ROUTE_MANIFEST_END */
