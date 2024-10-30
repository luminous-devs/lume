/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BootstrapRelaysImport } from './routes/bootstrap-relays'
import { Route as AppImport } from './routes/_app'
import { Route as NewPostIndexImport } from './routes/new-post/index'
import { Route as AppIndexImport } from './routes/_app/index'
import { Route as ZapIdImport } from './routes/zap.$id'
import { Route as ColumnsLayoutImport } from './routes/columns/_layout'
import { Route as IdSetProfileImport } from './routes/$id.set-profile'
import { Route as IdSetInterestImport } from './routes/$id.set-interest'
import { Route as IdSetGroupImport } from './routes/$id.set-group'
import { Route as SettingsIdWalletImport } from './routes/settings.$id/wallet'
import { Route as SettingsIdRelayImport } from './routes/settings.$id/relay'
import { Route as SettingsIdGeneralImport } from './routes/settings.$id/general'
import { Route as ColumnsLayoutGlobalImport } from './routes/columns/_layout/global'
import { Route as ColumnsLayoutCreateNewsfeedImport } from './routes/columns/_layout/create-newsfeed'
import { Route as ColumnsLayoutStoriesIdImport } from './routes/columns/_layout/stories.$id'
import { Route as ColumnsLayoutNewsfeedIdImport } from './routes/columns/_layout/newsfeed.$id'
import { Route as ColumnsLayoutInterestsIdImport } from './routes/columns/_layout/interests.$id'
import { Route as ColumnsLayoutGroupsIdImport } from './routes/columns/_layout/groups.$id'
import { Route as ColumnsLayoutCreateNewsfeedUsersImport } from './routes/columns/_layout/create-newsfeed.users'
import { Route as ColumnsLayoutCreateNewsfeedF2fImport } from './routes/columns/_layout/create-newsfeed.f2f'

// Create Virtual Routes

const ColumnsImport = createFileRoute('/columns')()
const NewLazyImport = createFileRoute('/new')()
const SettingsIdLazyImport = createFileRoute('/settings/$id')()
const NewAccountWatchLazyImport = createFileRoute('/new-account/watch')()
const NewAccountImportLazyImport = createFileRoute('/new-account/import')()
const NewAccountConnectLazyImport = createFileRoute('/new-account/connect')()
const ColumnsLayoutTrendingLazyImport = createFileRoute(
  '/columns/_layout/trending',
)()
const ColumnsLayoutSearchLazyImport = createFileRoute(
  '/columns/_layout/search',
)()
const ColumnsLayoutOnboardingLazyImport = createFileRoute(
  '/columns/_layout/onboarding',
)()
const ColumnsLayoutUsersIdLazyImport = createFileRoute(
  '/columns/_layout/users/$id',
)()
const ColumnsLayoutRepliesIdLazyImport = createFileRoute(
  '/columns/_layout/replies/$id',
)()
const ColumnsLayoutNotificationIdLazyImport = createFileRoute(
  '/columns/_layout/notification/$id',
)()
const ColumnsLayoutLaunchpadIdLazyImport = createFileRoute(
  '/columns/_layout/launchpad/$id',
)()
const ColumnsLayoutEventsIdLazyImport = createFileRoute(
  '/columns/_layout/events/$id',
)()

// Create/Update Routes

const ColumnsRoute = ColumnsImport.update({
  id: '/columns',
  path: '/columns',
  getParentRoute: () => rootRoute,
} as any)

const NewLazyRoute = NewLazyImport.update({
  id: '/new',
  path: '/new',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/new.lazy').then((d) => d.Route))

const BootstrapRelaysRoute = BootstrapRelaysImport.update({
  id: '/bootstrap-relays',
  path: '/bootstrap-relays',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/bootstrap-relays.lazy').then((d) => d.Route),
)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_app.lazy').then((d) => d.Route))

const NewPostIndexRoute = NewPostIndexImport.update({
  id: '/new-post/',
  path: '/new-post/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/new-post/index.lazy').then((d) => d.Route),
)

const AppIndexRoute = AppIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppRoute,
} as any).lazy(() => import('./routes/_app/index.lazy').then((d) => d.Route))

const SettingsIdLazyRoute = SettingsIdLazyImport.update({
  id: '/settings/$id',
  path: '/settings/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/settings.$id.lazy').then((d) => d.Route))

const NewAccountWatchLazyRoute = NewAccountWatchLazyImport.update({
  id: '/new-account/watch',
  path: '/new-account/watch',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/new-account/watch.lazy').then((d) => d.Route),
)

const NewAccountImportLazyRoute = NewAccountImportLazyImport.update({
  id: '/new-account/import',
  path: '/new-account/import',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/new-account/import.lazy').then((d) => d.Route),
)

const NewAccountConnectLazyRoute = NewAccountConnectLazyImport.update({
  id: '/new-account/connect',
  path: '/new-account/connect',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/new-account/connect.lazy').then((d) => d.Route),
)

const ZapIdRoute = ZapIdImport.update({
  id: '/zap/$id',
  path: '/zap/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/zap.$id.lazy').then((d) => d.Route))

const ColumnsLayoutRoute = ColumnsLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => ColumnsRoute,
} as any)

const IdSetProfileRoute = IdSetProfileImport.update({
  id: '/$id/set-profile',
  path: '/$id/set-profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/$id.set-profile.lazy').then((d) => d.Route),
)

const IdSetInterestRoute = IdSetInterestImport.update({
  id: '/$id/set-interest',
  path: '/$id/set-interest',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/$id.set-interest.lazy').then((d) => d.Route),
)

const IdSetGroupRoute = IdSetGroupImport.update({
  id: '/$id/set-group',
  path: '/$id/set-group',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/$id.set-group.lazy').then((d) => d.Route))

const ColumnsLayoutTrendingLazyRoute = ColumnsLayoutTrendingLazyImport.update({
  id: '/trending',
  path: '/trending',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/trending.lazy').then((d) => d.Route),
)

const ColumnsLayoutSearchLazyRoute = ColumnsLayoutSearchLazyImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/search.lazy').then((d) => d.Route),
)

const ColumnsLayoutOnboardingLazyRoute =
  ColumnsLayoutOnboardingLazyImport.update({
    id: '/onboarding',
    path: '/onboarding',
    getParentRoute: () => ColumnsLayoutRoute,
  } as any).lazy(() =>
    import('./routes/columns/_layout/onboarding.lazy').then((d) => d.Route),
  )

const SettingsIdWalletRoute = SettingsIdWalletImport.update({
  id: '/wallet',
  path: '/wallet',
  getParentRoute: () => SettingsIdLazyRoute,
} as any).lazy(() =>
  import('./routes/settings.$id/wallet.lazy').then((d) => d.Route),
)

const SettingsIdRelayRoute = SettingsIdRelayImport.update({
  id: '/relay',
  path: '/relay',
  getParentRoute: () => SettingsIdLazyRoute,
} as any).lazy(() =>
  import('./routes/settings.$id/relay.lazy').then((d) => d.Route),
)

const SettingsIdGeneralRoute = SettingsIdGeneralImport.update({
  id: '/general',
  path: '/general',
  getParentRoute: () => SettingsIdLazyRoute,
} as any).lazy(() =>
  import('./routes/settings.$id/general.lazy').then((d) => d.Route),
)

const ColumnsLayoutGlobalRoute = ColumnsLayoutGlobalImport.update({
  id: '/global',
  path: '/global',
  getParentRoute: () => ColumnsLayoutRoute,
} as any)

const ColumnsLayoutCreateNewsfeedRoute =
  ColumnsLayoutCreateNewsfeedImport.update({
    id: '/create-newsfeed',
    path: '/create-newsfeed',
    getParentRoute: () => ColumnsLayoutRoute,
  } as any)

const ColumnsLayoutUsersIdLazyRoute = ColumnsLayoutUsersIdLazyImport.update({
  id: '/users/$id',
  path: '/users/$id',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/users.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutRepliesIdLazyRoute = ColumnsLayoutRepliesIdLazyImport.update(
  {
    id: '/replies/$id',
    path: '/replies/$id',
    getParentRoute: () => ColumnsLayoutRoute,
  } as any,
).lazy(() =>
  import('./routes/columns/_layout/replies.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutNotificationIdLazyRoute =
  ColumnsLayoutNotificationIdLazyImport.update({
    id: '/notification/$id',
    path: '/notification/$id',
    getParentRoute: () => ColumnsLayoutRoute,
  } as any).lazy(() =>
    import('./routes/columns/_layout/notification.$id.lazy').then(
      (d) => d.Route,
    ),
  )

const ColumnsLayoutLaunchpadIdLazyRoute =
  ColumnsLayoutLaunchpadIdLazyImport.update({
    id: '/launchpad/$id',
    path: '/launchpad/$id',
    getParentRoute: () => ColumnsLayoutRoute,
  } as any).lazy(() =>
    import('./routes/columns/_layout/launchpad.$id.lazy').then((d) => d.Route),
  )

const ColumnsLayoutEventsIdLazyRoute = ColumnsLayoutEventsIdLazyImport.update({
  id: '/events/$id',
  path: '/events/$id',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/events.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutStoriesIdRoute = ColumnsLayoutStoriesIdImport.update({
  id: '/stories/$id',
  path: '/stories/$id',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/stories.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutNewsfeedIdRoute = ColumnsLayoutNewsfeedIdImport.update({
  id: '/newsfeed/$id',
  path: '/newsfeed/$id',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/newsfeed.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutInterestsIdRoute = ColumnsLayoutInterestsIdImport.update({
  id: '/interests/$id',
  path: '/interests/$id',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/interests.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutGroupsIdRoute = ColumnsLayoutGroupsIdImport.update({
  id: '/groups/$id',
  path: '/groups/$id',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/groups.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutCreateNewsfeedUsersRoute =
  ColumnsLayoutCreateNewsfeedUsersImport.update({
    id: '/users',
    path: '/users',
    getParentRoute: () => ColumnsLayoutCreateNewsfeedRoute,
  } as any)

const ColumnsLayoutCreateNewsfeedF2fRoute =
  ColumnsLayoutCreateNewsfeedF2fImport.update({
    id: '/f2f',
    path: '/f2f',
    getParentRoute: () => ColumnsLayoutCreateNewsfeedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/bootstrap-relays': {
      id: '/bootstrap-relays'
      path: '/bootstrap-relays'
      fullPath: '/bootstrap-relays'
      preLoaderRoute: typeof BootstrapRelaysImport
      parentRoute: typeof rootRoute
    }
    '/new': {
      id: '/new'
      path: '/new'
      fullPath: '/new'
      preLoaderRoute: typeof NewLazyImport
      parentRoute: typeof rootRoute
    }
    '/$id/set-group': {
      id: '/$id/set-group'
      path: '/$id/set-group'
      fullPath: '/$id/set-group'
      preLoaderRoute: typeof IdSetGroupImport
      parentRoute: typeof rootRoute
    }
    '/$id/set-interest': {
      id: '/$id/set-interest'
      path: '/$id/set-interest'
      fullPath: '/$id/set-interest'
      preLoaderRoute: typeof IdSetInterestImport
      parentRoute: typeof rootRoute
    }
    '/$id/set-profile': {
      id: '/$id/set-profile'
      path: '/$id/set-profile'
      fullPath: '/$id/set-profile'
      preLoaderRoute: typeof IdSetProfileImport
      parentRoute: typeof rootRoute
    }
    '/columns': {
      id: '/columns'
      path: '/columns'
      fullPath: '/columns'
      preLoaderRoute: typeof ColumnsImport
      parentRoute: typeof rootRoute
    }
    '/columns/_layout': {
      id: '/columns/_layout'
      path: '/columns'
      fullPath: '/columns'
      preLoaderRoute: typeof ColumnsLayoutImport
      parentRoute: typeof ColumnsRoute
    }
    '/zap/$id': {
      id: '/zap/$id'
      path: '/zap/$id'
      fullPath: '/zap/$id'
      preLoaderRoute: typeof ZapIdImport
      parentRoute: typeof rootRoute
    }
    '/new-account/connect': {
      id: '/new-account/connect'
      path: '/new-account/connect'
      fullPath: '/new-account/connect'
      preLoaderRoute: typeof NewAccountConnectLazyImport
      parentRoute: typeof rootRoute
    }
    '/new-account/import': {
      id: '/new-account/import'
      path: '/new-account/import'
      fullPath: '/new-account/import'
      preLoaderRoute: typeof NewAccountImportLazyImport
      parentRoute: typeof rootRoute
    }
    '/new-account/watch': {
      id: '/new-account/watch'
      path: '/new-account/watch'
      fullPath: '/new-account/watch'
      preLoaderRoute: typeof NewAccountWatchLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings/$id': {
      id: '/settings/$id'
      path: '/settings/$id'
      fullPath: '/settings/$id'
      preLoaderRoute: typeof SettingsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/_app/': {
      id: '/_app/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppIndexImport
      parentRoute: typeof AppImport
    }
    '/new-post/': {
      id: '/new-post/'
      path: '/new-post'
      fullPath: '/new-post'
      preLoaderRoute: typeof NewPostIndexImport
      parentRoute: typeof rootRoute
    }
    '/columns/_layout/create-newsfeed': {
      id: '/columns/_layout/create-newsfeed'
      path: '/create-newsfeed'
      fullPath: '/columns/create-newsfeed'
      preLoaderRoute: typeof ColumnsLayoutCreateNewsfeedImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/global': {
      id: '/columns/_layout/global'
      path: '/global'
      fullPath: '/columns/global'
      preLoaderRoute: typeof ColumnsLayoutGlobalImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/settings/$id/general': {
      id: '/settings/$id/general'
      path: '/general'
      fullPath: '/settings/$id/general'
      preLoaderRoute: typeof SettingsIdGeneralImport
      parentRoute: typeof SettingsIdLazyImport
    }
    '/settings/$id/relay': {
      id: '/settings/$id/relay'
      path: '/relay'
      fullPath: '/settings/$id/relay'
      preLoaderRoute: typeof SettingsIdRelayImport
      parentRoute: typeof SettingsIdLazyImport
    }
    '/settings/$id/wallet': {
      id: '/settings/$id/wallet'
      path: '/wallet'
      fullPath: '/settings/$id/wallet'
      preLoaderRoute: typeof SettingsIdWalletImport
      parentRoute: typeof SettingsIdLazyImport
    }
    '/columns/_layout/onboarding': {
      id: '/columns/_layout/onboarding'
      path: '/onboarding'
      fullPath: '/columns/onboarding'
      preLoaderRoute: typeof ColumnsLayoutOnboardingLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/search': {
      id: '/columns/_layout/search'
      path: '/search'
      fullPath: '/columns/search'
      preLoaderRoute: typeof ColumnsLayoutSearchLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/trending': {
      id: '/columns/_layout/trending'
      path: '/trending'
      fullPath: '/columns/trending'
      preLoaderRoute: typeof ColumnsLayoutTrendingLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/create-newsfeed/f2f': {
      id: '/columns/_layout/create-newsfeed/f2f'
      path: '/f2f'
      fullPath: '/columns/create-newsfeed/f2f'
      preLoaderRoute: typeof ColumnsLayoutCreateNewsfeedF2fImport
      parentRoute: typeof ColumnsLayoutCreateNewsfeedImport
    }
    '/columns/_layout/create-newsfeed/users': {
      id: '/columns/_layout/create-newsfeed/users'
      path: '/users'
      fullPath: '/columns/create-newsfeed/users'
      preLoaderRoute: typeof ColumnsLayoutCreateNewsfeedUsersImport
      parentRoute: typeof ColumnsLayoutCreateNewsfeedImport
    }
    '/columns/_layout/groups/$id': {
      id: '/columns/_layout/groups/$id'
      path: '/groups/$id'
      fullPath: '/columns/groups/$id'
      preLoaderRoute: typeof ColumnsLayoutGroupsIdImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/interests/$id': {
      id: '/columns/_layout/interests/$id'
      path: '/interests/$id'
      fullPath: '/columns/interests/$id'
      preLoaderRoute: typeof ColumnsLayoutInterestsIdImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/newsfeed/$id': {
      id: '/columns/_layout/newsfeed/$id'
      path: '/newsfeed/$id'
      fullPath: '/columns/newsfeed/$id'
      preLoaderRoute: typeof ColumnsLayoutNewsfeedIdImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/stories/$id': {
      id: '/columns/_layout/stories/$id'
      path: '/stories/$id'
      fullPath: '/columns/stories/$id'
      preLoaderRoute: typeof ColumnsLayoutStoriesIdImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/events/$id': {
      id: '/columns/_layout/events/$id'
      path: '/events/$id'
      fullPath: '/columns/events/$id'
      preLoaderRoute: typeof ColumnsLayoutEventsIdLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/launchpad/$id': {
      id: '/columns/_layout/launchpad/$id'
      path: '/launchpad/$id'
      fullPath: '/columns/launchpad/$id'
      preLoaderRoute: typeof ColumnsLayoutLaunchpadIdLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/notification/$id': {
      id: '/columns/_layout/notification/$id'
      path: '/notification/$id'
      fullPath: '/columns/notification/$id'
      preLoaderRoute: typeof ColumnsLayoutNotificationIdLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/replies/$id': {
      id: '/columns/_layout/replies/$id'
      path: '/replies/$id'
      fullPath: '/columns/replies/$id'
      preLoaderRoute: typeof ColumnsLayoutRepliesIdLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/users/$id': {
      id: '/columns/_layout/users/$id'
      path: '/users/$id'
      fullPath: '/columns/users/$id'
      preLoaderRoute: typeof ColumnsLayoutUsersIdLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppIndexRoute: typeof AppIndexRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppIndexRoute: AppIndexRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

interface ColumnsLayoutCreateNewsfeedRouteChildren {
  ColumnsLayoutCreateNewsfeedF2fRoute: typeof ColumnsLayoutCreateNewsfeedF2fRoute
  ColumnsLayoutCreateNewsfeedUsersRoute: typeof ColumnsLayoutCreateNewsfeedUsersRoute
}

const ColumnsLayoutCreateNewsfeedRouteChildren: ColumnsLayoutCreateNewsfeedRouteChildren =
  {
    ColumnsLayoutCreateNewsfeedF2fRoute: ColumnsLayoutCreateNewsfeedF2fRoute,
    ColumnsLayoutCreateNewsfeedUsersRoute:
      ColumnsLayoutCreateNewsfeedUsersRoute,
  }

const ColumnsLayoutCreateNewsfeedRouteWithChildren =
  ColumnsLayoutCreateNewsfeedRoute._addFileChildren(
    ColumnsLayoutCreateNewsfeedRouteChildren,
  )

interface ColumnsLayoutRouteChildren {
  ColumnsLayoutCreateNewsfeedRoute: typeof ColumnsLayoutCreateNewsfeedRouteWithChildren
  ColumnsLayoutGlobalRoute: typeof ColumnsLayoutGlobalRoute
  ColumnsLayoutOnboardingLazyRoute: typeof ColumnsLayoutOnboardingLazyRoute
  ColumnsLayoutSearchLazyRoute: typeof ColumnsLayoutSearchLazyRoute
  ColumnsLayoutTrendingLazyRoute: typeof ColumnsLayoutTrendingLazyRoute
  ColumnsLayoutGroupsIdRoute: typeof ColumnsLayoutGroupsIdRoute
  ColumnsLayoutInterestsIdRoute: typeof ColumnsLayoutInterestsIdRoute
  ColumnsLayoutNewsfeedIdRoute: typeof ColumnsLayoutNewsfeedIdRoute
  ColumnsLayoutStoriesIdRoute: typeof ColumnsLayoutStoriesIdRoute
  ColumnsLayoutEventsIdLazyRoute: typeof ColumnsLayoutEventsIdLazyRoute
  ColumnsLayoutLaunchpadIdLazyRoute: typeof ColumnsLayoutLaunchpadIdLazyRoute
  ColumnsLayoutNotificationIdLazyRoute: typeof ColumnsLayoutNotificationIdLazyRoute
  ColumnsLayoutRepliesIdLazyRoute: typeof ColumnsLayoutRepliesIdLazyRoute
  ColumnsLayoutUsersIdLazyRoute: typeof ColumnsLayoutUsersIdLazyRoute
}

const ColumnsLayoutRouteChildren: ColumnsLayoutRouteChildren = {
  ColumnsLayoutCreateNewsfeedRoute:
    ColumnsLayoutCreateNewsfeedRouteWithChildren,
  ColumnsLayoutGlobalRoute: ColumnsLayoutGlobalRoute,
  ColumnsLayoutOnboardingLazyRoute: ColumnsLayoutOnboardingLazyRoute,
  ColumnsLayoutSearchLazyRoute: ColumnsLayoutSearchLazyRoute,
  ColumnsLayoutTrendingLazyRoute: ColumnsLayoutTrendingLazyRoute,
  ColumnsLayoutGroupsIdRoute: ColumnsLayoutGroupsIdRoute,
  ColumnsLayoutInterestsIdRoute: ColumnsLayoutInterestsIdRoute,
  ColumnsLayoutNewsfeedIdRoute: ColumnsLayoutNewsfeedIdRoute,
  ColumnsLayoutStoriesIdRoute: ColumnsLayoutStoriesIdRoute,
  ColumnsLayoutEventsIdLazyRoute: ColumnsLayoutEventsIdLazyRoute,
  ColumnsLayoutLaunchpadIdLazyRoute: ColumnsLayoutLaunchpadIdLazyRoute,
  ColumnsLayoutNotificationIdLazyRoute: ColumnsLayoutNotificationIdLazyRoute,
  ColumnsLayoutRepliesIdLazyRoute: ColumnsLayoutRepliesIdLazyRoute,
  ColumnsLayoutUsersIdLazyRoute: ColumnsLayoutUsersIdLazyRoute,
}

const ColumnsLayoutRouteWithChildren = ColumnsLayoutRoute._addFileChildren(
  ColumnsLayoutRouteChildren,
)

interface ColumnsRouteChildren {
  ColumnsLayoutRoute: typeof ColumnsLayoutRouteWithChildren
}

const ColumnsRouteChildren: ColumnsRouteChildren = {
  ColumnsLayoutRoute: ColumnsLayoutRouteWithChildren,
}

const ColumnsRouteWithChildren =
  ColumnsRoute._addFileChildren(ColumnsRouteChildren)

interface SettingsIdLazyRouteChildren {
  SettingsIdGeneralRoute: typeof SettingsIdGeneralRoute
  SettingsIdRelayRoute: typeof SettingsIdRelayRoute
  SettingsIdWalletRoute: typeof SettingsIdWalletRoute
}

const SettingsIdLazyRouteChildren: SettingsIdLazyRouteChildren = {
  SettingsIdGeneralRoute: SettingsIdGeneralRoute,
  SettingsIdRelayRoute: SettingsIdRelayRoute,
  SettingsIdWalletRoute: SettingsIdWalletRoute,
}

const SettingsIdLazyRouteWithChildren = SettingsIdLazyRoute._addFileChildren(
  SettingsIdLazyRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AppRouteWithChildren
  '/bootstrap-relays': typeof BootstrapRelaysRoute
  '/new': typeof NewLazyRoute
  '/$id/set-group': typeof IdSetGroupRoute
  '/$id/set-interest': typeof IdSetInterestRoute
  '/$id/set-profile': typeof IdSetProfileRoute
  '/columns': typeof ColumnsLayoutRouteWithChildren
  '/zap/$id': typeof ZapIdRoute
  '/new-account/connect': typeof NewAccountConnectLazyRoute
  '/new-account/import': typeof NewAccountImportLazyRoute
  '/new-account/watch': typeof NewAccountWatchLazyRoute
  '/settings/$id': typeof SettingsIdLazyRouteWithChildren
  '/': typeof AppIndexRoute
  '/new-post': typeof NewPostIndexRoute
  '/columns/create-newsfeed': typeof ColumnsLayoutCreateNewsfeedRouteWithChildren
  '/columns/global': typeof ColumnsLayoutGlobalRoute
  '/settings/$id/general': typeof SettingsIdGeneralRoute
  '/settings/$id/relay': typeof SettingsIdRelayRoute
  '/settings/$id/wallet': typeof SettingsIdWalletRoute
  '/columns/onboarding': typeof ColumnsLayoutOnboardingLazyRoute
  '/columns/search': typeof ColumnsLayoutSearchLazyRoute
  '/columns/trending': typeof ColumnsLayoutTrendingLazyRoute
  '/columns/create-newsfeed/f2f': typeof ColumnsLayoutCreateNewsfeedF2fRoute
  '/columns/create-newsfeed/users': typeof ColumnsLayoutCreateNewsfeedUsersRoute
  '/columns/groups/$id': typeof ColumnsLayoutGroupsIdRoute
  '/columns/interests/$id': typeof ColumnsLayoutInterestsIdRoute
  '/columns/newsfeed/$id': typeof ColumnsLayoutNewsfeedIdRoute
  '/columns/stories/$id': typeof ColumnsLayoutStoriesIdRoute
  '/columns/events/$id': typeof ColumnsLayoutEventsIdLazyRoute
  '/columns/launchpad/$id': typeof ColumnsLayoutLaunchpadIdLazyRoute
  '/columns/notification/$id': typeof ColumnsLayoutNotificationIdLazyRoute
  '/columns/replies/$id': typeof ColumnsLayoutRepliesIdLazyRoute
  '/columns/users/$id': typeof ColumnsLayoutUsersIdLazyRoute
}

export interface FileRoutesByTo {
  '/bootstrap-relays': typeof BootstrapRelaysRoute
  '/new': typeof NewLazyRoute
  '/$id/set-group': typeof IdSetGroupRoute
  '/$id/set-interest': typeof IdSetInterestRoute
  '/$id/set-profile': typeof IdSetProfileRoute
  '/columns': typeof ColumnsLayoutRouteWithChildren
  '/zap/$id': typeof ZapIdRoute
  '/new-account/connect': typeof NewAccountConnectLazyRoute
  '/new-account/import': typeof NewAccountImportLazyRoute
  '/new-account/watch': typeof NewAccountWatchLazyRoute
  '/settings/$id': typeof SettingsIdLazyRouteWithChildren
  '/': typeof AppIndexRoute
  '/new-post': typeof NewPostIndexRoute
  '/columns/create-newsfeed': typeof ColumnsLayoutCreateNewsfeedRouteWithChildren
  '/columns/global': typeof ColumnsLayoutGlobalRoute
  '/settings/$id/general': typeof SettingsIdGeneralRoute
  '/settings/$id/relay': typeof SettingsIdRelayRoute
  '/settings/$id/wallet': typeof SettingsIdWalletRoute
  '/columns/onboarding': typeof ColumnsLayoutOnboardingLazyRoute
  '/columns/search': typeof ColumnsLayoutSearchLazyRoute
  '/columns/trending': typeof ColumnsLayoutTrendingLazyRoute
  '/columns/create-newsfeed/f2f': typeof ColumnsLayoutCreateNewsfeedF2fRoute
  '/columns/create-newsfeed/users': typeof ColumnsLayoutCreateNewsfeedUsersRoute
  '/columns/groups/$id': typeof ColumnsLayoutGroupsIdRoute
  '/columns/interests/$id': typeof ColumnsLayoutInterestsIdRoute
  '/columns/newsfeed/$id': typeof ColumnsLayoutNewsfeedIdRoute
  '/columns/stories/$id': typeof ColumnsLayoutStoriesIdRoute
  '/columns/events/$id': typeof ColumnsLayoutEventsIdLazyRoute
  '/columns/launchpad/$id': typeof ColumnsLayoutLaunchpadIdLazyRoute
  '/columns/notification/$id': typeof ColumnsLayoutNotificationIdLazyRoute
  '/columns/replies/$id': typeof ColumnsLayoutRepliesIdLazyRoute
  '/columns/users/$id': typeof ColumnsLayoutUsersIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/bootstrap-relays': typeof BootstrapRelaysRoute
  '/new': typeof NewLazyRoute
  '/$id/set-group': typeof IdSetGroupRoute
  '/$id/set-interest': typeof IdSetInterestRoute
  '/$id/set-profile': typeof IdSetProfileRoute
  '/columns': typeof ColumnsRouteWithChildren
  '/columns/_layout': typeof ColumnsLayoutRouteWithChildren
  '/zap/$id': typeof ZapIdRoute
  '/new-account/connect': typeof NewAccountConnectLazyRoute
  '/new-account/import': typeof NewAccountImportLazyRoute
  '/new-account/watch': typeof NewAccountWatchLazyRoute
  '/settings/$id': typeof SettingsIdLazyRouteWithChildren
  '/_app/': typeof AppIndexRoute
  '/new-post/': typeof NewPostIndexRoute
  '/columns/_layout/create-newsfeed': typeof ColumnsLayoutCreateNewsfeedRouteWithChildren
  '/columns/_layout/global': typeof ColumnsLayoutGlobalRoute
  '/settings/$id/general': typeof SettingsIdGeneralRoute
  '/settings/$id/relay': typeof SettingsIdRelayRoute
  '/settings/$id/wallet': typeof SettingsIdWalletRoute
  '/columns/_layout/onboarding': typeof ColumnsLayoutOnboardingLazyRoute
  '/columns/_layout/search': typeof ColumnsLayoutSearchLazyRoute
  '/columns/_layout/trending': typeof ColumnsLayoutTrendingLazyRoute
  '/columns/_layout/create-newsfeed/f2f': typeof ColumnsLayoutCreateNewsfeedF2fRoute
  '/columns/_layout/create-newsfeed/users': typeof ColumnsLayoutCreateNewsfeedUsersRoute
  '/columns/_layout/groups/$id': typeof ColumnsLayoutGroupsIdRoute
  '/columns/_layout/interests/$id': typeof ColumnsLayoutInterestsIdRoute
  '/columns/_layout/newsfeed/$id': typeof ColumnsLayoutNewsfeedIdRoute
  '/columns/_layout/stories/$id': typeof ColumnsLayoutStoriesIdRoute
  '/columns/_layout/events/$id': typeof ColumnsLayoutEventsIdLazyRoute
  '/columns/_layout/launchpad/$id': typeof ColumnsLayoutLaunchpadIdLazyRoute
  '/columns/_layout/notification/$id': typeof ColumnsLayoutNotificationIdLazyRoute
  '/columns/_layout/replies/$id': typeof ColumnsLayoutRepliesIdLazyRoute
  '/columns/_layout/users/$id': typeof ColumnsLayoutUsersIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/bootstrap-relays'
    | '/new'
    | '/$id/set-group'
    | '/$id/set-interest'
    | '/$id/set-profile'
    | '/columns'
    | '/zap/$id'
    | '/new-account/connect'
    | '/new-account/import'
    | '/new-account/watch'
    | '/settings/$id'
    | '/'
    | '/new-post'
    | '/columns/create-newsfeed'
    | '/columns/global'
    | '/settings/$id/general'
    | '/settings/$id/relay'
    | '/settings/$id/wallet'
    | '/columns/onboarding'
    | '/columns/search'
    | '/columns/trending'
    | '/columns/create-newsfeed/f2f'
    | '/columns/create-newsfeed/users'
    | '/columns/groups/$id'
    | '/columns/interests/$id'
    | '/columns/newsfeed/$id'
    | '/columns/stories/$id'
    | '/columns/events/$id'
    | '/columns/launchpad/$id'
    | '/columns/notification/$id'
    | '/columns/replies/$id'
    | '/columns/users/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/bootstrap-relays'
    | '/new'
    | '/$id/set-group'
    | '/$id/set-interest'
    | '/$id/set-profile'
    | '/columns'
    | '/zap/$id'
    | '/new-account/connect'
    | '/new-account/import'
    | '/new-account/watch'
    | '/settings/$id'
    | '/'
    | '/new-post'
    | '/columns/create-newsfeed'
    | '/columns/global'
    | '/settings/$id/general'
    | '/settings/$id/relay'
    | '/settings/$id/wallet'
    | '/columns/onboarding'
    | '/columns/search'
    | '/columns/trending'
    | '/columns/create-newsfeed/f2f'
    | '/columns/create-newsfeed/users'
    | '/columns/groups/$id'
    | '/columns/interests/$id'
    | '/columns/newsfeed/$id'
    | '/columns/stories/$id'
    | '/columns/events/$id'
    | '/columns/launchpad/$id'
    | '/columns/notification/$id'
    | '/columns/replies/$id'
    | '/columns/users/$id'
  id:
    | '__root__'
    | '/_app'
    | '/bootstrap-relays'
    | '/new'
    | '/$id/set-group'
    | '/$id/set-interest'
    | '/$id/set-profile'
    | '/columns'
    | '/columns/_layout'
    | '/zap/$id'
    | '/new-account/connect'
    | '/new-account/import'
    | '/new-account/watch'
    | '/settings/$id'
    | '/_app/'
    | '/new-post/'
    | '/columns/_layout/create-newsfeed'
    | '/columns/_layout/global'
    | '/settings/$id/general'
    | '/settings/$id/relay'
    | '/settings/$id/wallet'
    | '/columns/_layout/onboarding'
    | '/columns/_layout/search'
    | '/columns/_layout/trending'
    | '/columns/_layout/create-newsfeed/f2f'
    | '/columns/_layout/create-newsfeed/users'
    | '/columns/_layout/groups/$id'
    | '/columns/_layout/interests/$id'
    | '/columns/_layout/newsfeed/$id'
    | '/columns/_layout/stories/$id'
    | '/columns/_layout/events/$id'
    | '/columns/_layout/launchpad/$id'
    | '/columns/_layout/notification/$id'
    | '/columns/_layout/replies/$id'
    | '/columns/_layout/users/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
  BootstrapRelaysRoute: typeof BootstrapRelaysRoute
  NewLazyRoute: typeof NewLazyRoute
  IdSetGroupRoute: typeof IdSetGroupRoute
  IdSetInterestRoute: typeof IdSetInterestRoute
  IdSetProfileRoute: typeof IdSetProfileRoute
  ColumnsRoute: typeof ColumnsRouteWithChildren
  ZapIdRoute: typeof ZapIdRoute
  NewAccountConnectLazyRoute: typeof NewAccountConnectLazyRoute
  NewAccountImportLazyRoute: typeof NewAccountImportLazyRoute
  NewAccountWatchLazyRoute: typeof NewAccountWatchLazyRoute
  SettingsIdLazyRoute: typeof SettingsIdLazyRouteWithChildren
  NewPostIndexRoute: typeof NewPostIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
  BootstrapRelaysRoute: BootstrapRelaysRoute,
  NewLazyRoute: NewLazyRoute,
  IdSetGroupRoute: IdSetGroupRoute,
  IdSetInterestRoute: IdSetInterestRoute,
  IdSetProfileRoute: IdSetProfileRoute,
  ColumnsRoute: ColumnsRouteWithChildren,
  ZapIdRoute: ZapIdRoute,
  NewAccountConnectLazyRoute: NewAccountConnectLazyRoute,
  NewAccountImportLazyRoute: NewAccountImportLazyRoute,
  NewAccountWatchLazyRoute: NewAccountWatchLazyRoute,
  SettingsIdLazyRoute: SettingsIdLazyRouteWithChildren,
  NewPostIndexRoute: NewPostIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app",
        "/bootstrap-relays",
        "/new",
        "/$id/set-group",
        "/$id/set-interest",
        "/$id/set-profile",
        "/columns",
        "/zap/$id",
        "/new-account/connect",
        "/new-account/import",
        "/new-account/watch",
        "/settings/$id",
        "/new-post/"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/"
      ]
    },
    "/bootstrap-relays": {
      "filePath": "bootstrap-relays.tsx"
    },
    "/new": {
      "filePath": "new.lazy.tsx"
    },
    "/$id/set-group": {
      "filePath": "$id.set-group.tsx"
    },
    "/$id/set-interest": {
      "filePath": "$id.set-interest.tsx"
    },
    "/$id/set-profile": {
      "filePath": "$id.set-profile.tsx"
    },
    "/columns": {
      "filePath": "columns",
      "children": [
        "/columns/_layout"
      ]
    },
    "/columns/_layout": {
      "filePath": "columns/_layout.tsx",
      "parent": "/columns",
      "children": [
        "/columns/_layout/create-newsfeed",
        "/columns/_layout/global",
        "/columns/_layout/onboarding",
        "/columns/_layout/search",
        "/columns/_layout/trending",
        "/columns/_layout/groups/$id",
        "/columns/_layout/interests/$id",
        "/columns/_layout/newsfeed/$id",
        "/columns/_layout/stories/$id",
        "/columns/_layout/events/$id",
        "/columns/_layout/launchpad/$id",
        "/columns/_layout/notification/$id",
        "/columns/_layout/replies/$id",
        "/columns/_layout/users/$id"
      ]
    },
    "/zap/$id": {
      "filePath": "zap.$id.tsx"
    },
    "/new-account/connect": {
      "filePath": "new-account/connect.lazy.tsx"
    },
    "/new-account/import": {
      "filePath": "new-account/import.lazy.tsx"
    },
    "/new-account/watch": {
      "filePath": "new-account/watch.lazy.tsx"
    },
    "/settings/$id": {
      "filePath": "settings.$id.lazy.tsx",
      "children": [
        "/settings/$id/general",
        "/settings/$id/relay",
        "/settings/$id/wallet"
      ]
    },
    "/_app/": {
      "filePath": "_app/index.tsx",
      "parent": "/_app"
    },
    "/new-post/": {
      "filePath": "new-post/index.tsx"
    },
    "/columns/_layout/create-newsfeed": {
      "filePath": "columns/_layout/create-newsfeed.tsx",
      "parent": "/columns/_layout",
      "children": [
        "/columns/_layout/create-newsfeed/f2f",
        "/columns/_layout/create-newsfeed/users"
      ]
    },
    "/columns/_layout/global": {
      "filePath": "columns/_layout/global.tsx",
      "parent": "/columns/_layout"
    },
    "/settings/$id/general": {
      "filePath": "settings.$id/general.tsx",
      "parent": "/settings/$id"
    },
    "/settings/$id/relay": {
      "filePath": "settings.$id/relay.tsx",
      "parent": "/settings/$id"
    },
    "/settings/$id/wallet": {
      "filePath": "settings.$id/wallet.tsx",
      "parent": "/settings/$id"
    },
    "/columns/_layout/onboarding": {
      "filePath": "columns/_layout/onboarding.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/search": {
      "filePath": "columns/_layout/search.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/trending": {
      "filePath": "columns/_layout/trending.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/create-newsfeed/f2f": {
      "filePath": "columns/_layout/create-newsfeed.f2f.tsx",
      "parent": "/columns/_layout/create-newsfeed"
    },
    "/columns/_layout/create-newsfeed/users": {
      "filePath": "columns/_layout/create-newsfeed.users.tsx",
      "parent": "/columns/_layout/create-newsfeed"
    },
    "/columns/_layout/groups/$id": {
      "filePath": "columns/_layout/groups.$id.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/interests/$id": {
      "filePath": "columns/_layout/interests.$id.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/newsfeed/$id": {
      "filePath": "columns/_layout/newsfeed.$id.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/stories/$id": {
      "filePath": "columns/_layout/stories.$id.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/events/$id": {
      "filePath": "columns/_layout/events.$id.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/launchpad/$id": {
      "filePath": "columns/_layout/launchpad.$id.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/notification/$id": {
      "filePath": "columns/_layout/notification.$id.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/replies/$id": {
      "filePath": "columns/_layout/replies.$id.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/users/$id": {
      "filePath": "columns/_layout/users.$id.lazy.tsx",
      "parent": "/columns/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
