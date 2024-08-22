/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as SearchImport } from './routes/search'
import { Route as BootstrapRelaysImport } from './routes/bootstrap-relays'
import { Route as AccountImport } from './routes/$account'
import { Route as IndexImport } from './routes/index'
import { Route as EditorIndexImport } from './routes/editor/index'
import { Route as ZapIdImport } from './routes/zap.$id'
import { Route as SettingsWalletImport } from './routes/settings/wallet'
import { Route as SettingsUserImport } from './routes/settings/user'
import { Route as SettingsRelayImport } from './routes/settings/relay'
import { Route as SettingsGeneralImport } from './routes/settings/general'
import { Route as SettingsBitcoinConnectImport } from './routes/settings/bitcoin-connect'
import { Route as SettingsBackupImport } from './routes/settings/backup'
import { Route as SearchUsersImport } from './routes/search.users'
import { Route as SearchNotesImport } from './routes/search.notes'
import { Route as ColumnsLayoutImport } from './routes/columns/_layout'
import { Route as AccountHomeImport } from './routes/$account/home'
import { Route as AccountBackupImport } from './routes/$account/backup'
import { Route as ColumnsLayoutTopicImport } from './routes/columns/_layout/topic'
import { Route as ColumnsLayoutGroupImport } from './routes/columns/_layout/group'
import { Route as ColumnsLayoutGlobalImport } from './routes/columns/_layout/global'
import { Route as ColumnsLayoutGalleryImport } from './routes/columns/_layout/gallery'
import { Route as ColumnsLayoutCreateTopicImport } from './routes/columns/_layout/create-topic'
import { Route as ColumnsLayoutCreateNewsfeedImport } from './routes/columns/_layout/create-newsfeed'
import { Route as ColumnsLayoutCreateGroupImport } from './routes/columns/_layout/create-group'
import { Route as ColumnsLayoutUsersIdImport } from './routes/columns/_layout/users.$id'
import { Route as ColumnsLayoutTrendingUsersImport } from './routes/columns/_layout/trending.users'
import { Route as ColumnsLayoutTrendingNotesImport } from './routes/columns/_layout/trending.notes'
import { Route as ColumnsLayoutCreateNewsfeedUsersImport } from './routes/columns/_layout/create-newsfeed.users'
import { Route as ColumnsLayoutCreateNewsfeedF2fImport } from './routes/columns/_layout/create-newsfeed.f2f'

// Create Virtual Routes

const ColumnsImport = createFileRoute('/columns')()
const NewLazyImport = createFileRoute('/new')()
const AuthNewLazyImport = createFileRoute('/auth/new')()
const AuthImportLazyImport = createFileRoute('/auth/import')()
const AuthConnectLazyImport = createFileRoute('/auth/connect')()
const AccountPanelLazyImport = createFileRoute('/$account/panel')()
const ColumnsLayoutTrendingLazyImport = createFileRoute(
  '/columns/_layout/trending',
)()
const ColumnsLayoutOnboardingLazyImport = createFileRoute(
  '/columns/_layout/onboarding',
)()
const ColumnsLayoutNewsfeedLazyImport = createFileRoute(
  '/columns/_layout/newsfeed',
)()
const ColumnsLayoutRepliesIdLazyImport = createFileRoute(
  '/columns/_layout/replies/$id',
)()
const ColumnsLayoutEventsIdLazyImport = createFileRoute(
  '/columns/_layout/events/$id',
)()

// Create/Update Routes

const ColumnsRoute = ColumnsImport.update({
  path: '/columns',
  getParentRoute: () => rootRoute,
} as any)

const NewLazyRoute = NewLazyImport.update({
  path: '/new',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/new.lazy').then((d) => d.Route))

const SettingsRoute = SettingsImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const BootstrapRelaysRoute = BootstrapRelaysImport.update({
  path: '/bootstrap-relays',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/bootstrap-relays.lazy').then((d) => d.Route),
)

const AccountRoute = AccountImport.update({
  path: '/$account',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/$account.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const EditorIndexRoute = EditorIndexImport.update({
  path: '/editor/',
  getParentRoute: () => rootRoute,
} as any)

const AuthNewLazyRoute = AuthNewLazyImport.update({
  path: '/auth/new',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/auth/new.lazy').then((d) => d.Route))

const AuthImportLazyRoute = AuthImportLazyImport.update({
  path: '/auth/import',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/auth/import.lazy').then((d) => d.Route))

const AuthConnectLazyRoute = AuthConnectLazyImport.update({
  path: '/auth/connect',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/auth/connect.lazy').then((d) => d.Route))

const AccountPanelLazyRoute = AccountPanelLazyImport.update({
  path: '/panel',
  getParentRoute: () => AccountRoute,
} as any).lazy(() =>
  import('./routes/$account/panel.lazy').then((d) => d.Route),
)

const ZapIdRoute = ZapIdImport.update({
  path: '/zap/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/zap.$id.lazy').then((d) => d.Route))

const SettingsWalletRoute = SettingsWalletImport.update({
  path: '/wallet',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsUserRoute = SettingsUserImport.update({
  path: '/user',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsRelayRoute = SettingsRelayImport.update({
  path: '/relay',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsGeneralRoute = SettingsGeneralImport.update({
  path: '/general',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsBitcoinConnectRoute = SettingsBitcoinConnectImport.update({
  path: '/bitcoin-connect',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsBackupRoute = SettingsBackupImport.update({
  path: '/backup',
  getParentRoute: () => SettingsRoute,
} as any)

const SearchUsersRoute = SearchUsersImport.update({
  path: '/users',
  getParentRoute: () => SearchRoute,
} as any)

const SearchNotesRoute = SearchNotesImport.update({
  path: '/notes',
  getParentRoute: () => SearchRoute,
} as any)

const ColumnsLayoutRoute = ColumnsLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => ColumnsRoute,
} as any)

const AccountHomeRoute = AccountHomeImport.update({
  path: '/home',
  getParentRoute: () => AccountRoute,
} as any).lazy(() => import('./routes/$account/home.lazy').then((d) => d.Route))

const AccountBackupRoute = AccountBackupImport.update({
  path: '/backup',
  getParentRoute: () => AccountRoute,
} as any)

const ColumnsLayoutTrendingLazyRoute = ColumnsLayoutTrendingLazyImport.update({
  path: '/trending',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/trending.lazy').then((d) => d.Route),
)

const ColumnsLayoutOnboardingLazyRoute =
  ColumnsLayoutOnboardingLazyImport.update({
    path: '/onboarding',
    getParentRoute: () => ColumnsLayoutRoute,
  } as any).lazy(() =>
    import('./routes/columns/_layout/onboarding.lazy').then((d) => d.Route),
  )

const ColumnsLayoutNewsfeedLazyRoute = ColumnsLayoutNewsfeedLazyImport.update({
  path: '/newsfeed',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/newsfeed.lazy').then((d) => d.Route),
)

const ColumnsLayoutTopicRoute = ColumnsLayoutTopicImport.update({
  path: '/topic',
  getParentRoute: () => ColumnsLayoutRoute,
} as any)

const ColumnsLayoutGroupRoute = ColumnsLayoutGroupImport.update({
  path: '/group',
  getParentRoute: () => ColumnsLayoutRoute,
} as any)

const ColumnsLayoutGlobalRoute = ColumnsLayoutGlobalImport.update({
  path: '/global',
  getParentRoute: () => ColumnsLayoutRoute,
} as any)

const ColumnsLayoutGalleryRoute = ColumnsLayoutGalleryImport.update({
  path: '/gallery',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/gallery.lazy').then((d) => d.Route),
)

const ColumnsLayoutCreateTopicRoute = ColumnsLayoutCreateTopicImport.update({
  path: '/create-topic',
  getParentRoute: () => ColumnsLayoutRoute,
} as any)

const ColumnsLayoutCreateNewsfeedRoute =
  ColumnsLayoutCreateNewsfeedImport.update({
    path: '/create-newsfeed',
    getParentRoute: () => ColumnsLayoutRoute,
  } as any)

const ColumnsLayoutCreateGroupRoute = ColumnsLayoutCreateGroupImport.update({
  path: '/create-group',
  getParentRoute: () => ColumnsLayoutRoute,
} as any)

const ColumnsLayoutRepliesIdLazyRoute = ColumnsLayoutRepliesIdLazyImport.update(
  {
    path: '/replies/$id',
    getParentRoute: () => ColumnsLayoutRoute,
  } as any,
).lazy(() =>
  import('./routes/columns/_layout/replies.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutEventsIdLazyRoute = ColumnsLayoutEventsIdLazyImport.update({
  path: '/events/$id',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/events.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutUsersIdRoute = ColumnsLayoutUsersIdImport.update({
  path: '/users/$id',
  getParentRoute: () => ColumnsLayoutRoute,
} as any).lazy(() =>
  import('./routes/columns/_layout/users.$id.lazy').then((d) => d.Route),
)

const ColumnsLayoutTrendingUsersRoute = ColumnsLayoutTrendingUsersImport.update(
  {
    path: '/users',
    getParentRoute: () => ColumnsLayoutTrendingLazyRoute,
  } as any,
)

const ColumnsLayoutTrendingNotesRoute = ColumnsLayoutTrendingNotesImport.update(
  {
    path: '/notes',
    getParentRoute: () => ColumnsLayoutTrendingLazyRoute,
  } as any,
)

const ColumnsLayoutCreateNewsfeedUsersRoute =
  ColumnsLayoutCreateNewsfeedUsersImport.update({
    path: '/users',
    getParentRoute: () => ColumnsLayoutCreateNewsfeedRoute,
  } as any)

const ColumnsLayoutCreateNewsfeedF2fRoute =
  ColumnsLayoutCreateNewsfeedF2fImport.update({
    path: '/f2f',
    getParentRoute: () => ColumnsLayoutCreateNewsfeedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$account': {
      id: '/$account'
      path: '/$account'
      fullPath: '/$account'
      preLoaderRoute: typeof AccountImport
      parentRoute: typeof rootRoute
    }
    '/bootstrap-relays': {
      id: '/bootstrap-relays'
      path: '/bootstrap-relays'
      fullPath: '/bootstrap-relays'
      preLoaderRoute: typeof BootstrapRelaysImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/new': {
      id: '/new'
      path: '/new'
      fullPath: '/new'
      preLoaderRoute: typeof NewLazyImport
      parentRoute: typeof rootRoute
    }
    '/$account/backup': {
      id: '/$account/backup'
      path: '/backup'
      fullPath: '/$account/backup'
      preLoaderRoute: typeof AccountBackupImport
      parentRoute: typeof AccountImport
    }
    '/$account/home': {
      id: '/$account/home'
      path: '/home'
      fullPath: '/$account/home'
      preLoaderRoute: typeof AccountHomeImport
      parentRoute: typeof AccountImport
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
    '/search/notes': {
      id: '/search/notes'
      path: '/notes'
      fullPath: '/search/notes'
      preLoaderRoute: typeof SearchNotesImport
      parentRoute: typeof SearchImport
    }
    '/search/users': {
      id: '/search/users'
      path: '/users'
      fullPath: '/search/users'
      preLoaderRoute: typeof SearchUsersImport
      parentRoute: typeof SearchImport
    }
    '/settings/backup': {
      id: '/settings/backup'
      path: '/backup'
      fullPath: '/settings/backup'
      preLoaderRoute: typeof SettingsBackupImport
      parentRoute: typeof SettingsImport
    }
    '/settings/bitcoin-connect': {
      id: '/settings/bitcoin-connect'
      path: '/bitcoin-connect'
      fullPath: '/settings/bitcoin-connect'
      preLoaderRoute: typeof SettingsBitcoinConnectImport
      parentRoute: typeof SettingsImport
    }
    '/settings/general': {
      id: '/settings/general'
      path: '/general'
      fullPath: '/settings/general'
      preLoaderRoute: typeof SettingsGeneralImport
      parentRoute: typeof SettingsImport
    }
    '/settings/relay': {
      id: '/settings/relay'
      path: '/relay'
      fullPath: '/settings/relay'
      preLoaderRoute: typeof SettingsRelayImport
      parentRoute: typeof SettingsImport
    }
    '/settings/user': {
      id: '/settings/user'
      path: '/user'
      fullPath: '/settings/user'
      preLoaderRoute: typeof SettingsUserImport
      parentRoute: typeof SettingsImport
    }
    '/settings/wallet': {
      id: '/settings/wallet'
      path: '/wallet'
      fullPath: '/settings/wallet'
      preLoaderRoute: typeof SettingsWalletImport
      parentRoute: typeof SettingsImport
    }
    '/zap/$id': {
      id: '/zap/$id'
      path: '/zap/$id'
      fullPath: '/zap/$id'
      preLoaderRoute: typeof ZapIdImport
      parentRoute: typeof rootRoute
    }
    '/$account/panel': {
      id: '/$account/panel'
      path: '/panel'
      fullPath: '/$account/panel'
      preLoaderRoute: typeof AccountPanelLazyImport
      parentRoute: typeof AccountImport
    }
    '/auth/connect': {
      id: '/auth/connect'
      path: '/auth/connect'
      fullPath: '/auth/connect'
      preLoaderRoute: typeof AuthConnectLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/import': {
      id: '/auth/import'
      path: '/auth/import'
      fullPath: '/auth/import'
      preLoaderRoute: typeof AuthImportLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/new': {
      id: '/auth/new'
      path: '/auth/new'
      fullPath: '/auth/new'
      preLoaderRoute: typeof AuthNewLazyImport
      parentRoute: typeof rootRoute
    }
    '/editor/': {
      id: '/editor/'
      path: '/editor'
      fullPath: '/editor'
      preLoaderRoute: typeof EditorIndexImport
      parentRoute: typeof rootRoute
    }
    '/columns/_layout/create-group': {
      id: '/columns/_layout/create-group'
      path: '/create-group'
      fullPath: '/columns/create-group'
      preLoaderRoute: typeof ColumnsLayoutCreateGroupImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/create-newsfeed': {
      id: '/columns/_layout/create-newsfeed'
      path: '/create-newsfeed'
      fullPath: '/columns/create-newsfeed'
      preLoaderRoute: typeof ColumnsLayoutCreateNewsfeedImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/create-topic': {
      id: '/columns/_layout/create-topic'
      path: '/create-topic'
      fullPath: '/columns/create-topic'
      preLoaderRoute: typeof ColumnsLayoutCreateTopicImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/gallery': {
      id: '/columns/_layout/gallery'
      path: '/gallery'
      fullPath: '/columns/gallery'
      preLoaderRoute: typeof ColumnsLayoutGalleryImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/global': {
      id: '/columns/_layout/global'
      path: '/global'
      fullPath: '/columns/global'
      preLoaderRoute: typeof ColumnsLayoutGlobalImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/group': {
      id: '/columns/_layout/group'
      path: '/group'
      fullPath: '/columns/group'
      preLoaderRoute: typeof ColumnsLayoutGroupImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/topic': {
      id: '/columns/_layout/topic'
      path: '/topic'
      fullPath: '/columns/topic'
      preLoaderRoute: typeof ColumnsLayoutTopicImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/newsfeed': {
      id: '/columns/_layout/newsfeed'
      path: '/newsfeed'
      fullPath: '/columns/newsfeed'
      preLoaderRoute: typeof ColumnsLayoutNewsfeedLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/onboarding': {
      id: '/columns/_layout/onboarding'
      path: '/onboarding'
      fullPath: '/columns/onboarding'
      preLoaderRoute: typeof ColumnsLayoutOnboardingLazyImport
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
    '/columns/_layout/trending/notes': {
      id: '/columns/_layout/trending/notes'
      path: '/notes'
      fullPath: '/columns/trending/notes'
      preLoaderRoute: typeof ColumnsLayoutTrendingNotesImport
      parentRoute: typeof ColumnsLayoutTrendingLazyImport
    }
    '/columns/_layout/trending/users': {
      id: '/columns/_layout/trending/users'
      path: '/users'
      fullPath: '/columns/trending/users'
      preLoaderRoute: typeof ColumnsLayoutTrendingUsersImport
      parentRoute: typeof ColumnsLayoutTrendingLazyImport
    }
    '/columns/_layout/users/$id': {
      id: '/columns/_layout/users/$id'
      path: '/users/$id'
      fullPath: '/columns/users/$id'
      preLoaderRoute: typeof ColumnsLayoutUsersIdImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/events/$id': {
      id: '/columns/_layout/events/$id'
      path: '/events/$id'
      fullPath: '/columns/events/$id'
      preLoaderRoute: typeof ColumnsLayoutEventsIdLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
    '/columns/_layout/replies/$id': {
      id: '/columns/_layout/replies/$id'
      path: '/replies/$id'
      fullPath: '/columns/replies/$id'
      preLoaderRoute: typeof ColumnsLayoutRepliesIdLazyImport
      parentRoute: typeof ColumnsLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AccountRoute: AccountRoute.addChildren({
    AccountBackupRoute,
    AccountHomeRoute,
    AccountPanelLazyRoute,
  }),
  BootstrapRelaysRoute,
  SearchRoute: SearchRoute.addChildren({ SearchNotesRoute, SearchUsersRoute }),
  SettingsRoute: SettingsRoute.addChildren({
    SettingsBackupRoute,
    SettingsBitcoinConnectRoute,
    SettingsGeneralRoute,
    SettingsRelayRoute,
    SettingsUserRoute,
    SettingsWalletRoute,
  }),
  NewLazyRoute,
  ColumnsRoute: ColumnsRoute.addChildren({
    ColumnsLayoutRoute: ColumnsLayoutRoute.addChildren({
      ColumnsLayoutCreateGroupRoute,
      ColumnsLayoutCreateNewsfeedRoute:
        ColumnsLayoutCreateNewsfeedRoute.addChildren({
          ColumnsLayoutCreateNewsfeedF2fRoute,
          ColumnsLayoutCreateNewsfeedUsersRoute,
        }),
      ColumnsLayoutCreateTopicRoute,
      ColumnsLayoutGalleryRoute,
      ColumnsLayoutGlobalRoute,
      ColumnsLayoutGroupRoute,
      ColumnsLayoutTopicRoute,
      ColumnsLayoutNewsfeedLazyRoute,
      ColumnsLayoutOnboardingLazyRoute,
      ColumnsLayoutTrendingLazyRoute:
        ColumnsLayoutTrendingLazyRoute.addChildren({
          ColumnsLayoutTrendingNotesRoute,
          ColumnsLayoutTrendingUsersRoute,
        }),
      ColumnsLayoutUsersIdRoute,
      ColumnsLayoutEventsIdLazyRoute,
      ColumnsLayoutRepliesIdLazyRoute,
    }),
  }),
  ZapIdRoute,
  AuthConnectLazyRoute,
  AuthImportLazyRoute,
  AuthNewLazyRoute,
  EditorIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$account",
        "/bootstrap-relays",
        "/search",
        "/settings",
        "/new",
        "/columns",
        "/zap/$id",
        "/auth/connect",
        "/auth/import",
        "/auth/new",
        "/editor/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$account": {
      "filePath": "$account.tsx",
      "children": [
        "/$account/backup",
        "/$account/home",
        "/$account/panel"
      ]
    },
    "/bootstrap-relays": {
      "filePath": "bootstrap-relays.tsx"
    },
    "/search": {
      "filePath": "search.tsx",
      "children": [
        "/search/notes",
        "/search/users"
      ]
    },
    "/settings": {
      "filePath": "settings.tsx",
      "children": [
        "/settings/backup",
        "/settings/bitcoin-connect",
        "/settings/general",
        "/settings/relay",
        "/settings/user",
        "/settings/wallet"
      ]
    },
    "/new": {
      "filePath": "new.lazy.tsx"
    },
    "/$account/backup": {
      "filePath": "$account/backup.tsx",
      "parent": "/$account"
    },
    "/$account/home": {
      "filePath": "$account/home.tsx",
      "parent": "/$account"
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
        "/columns/_layout/create-group",
        "/columns/_layout/create-newsfeed",
        "/columns/_layout/create-topic",
        "/columns/_layout/gallery",
        "/columns/_layout/global",
        "/columns/_layout/group",
        "/columns/_layout/topic",
        "/columns/_layout/newsfeed",
        "/columns/_layout/onboarding",
        "/columns/_layout/trending",
        "/columns/_layout/users/$id",
        "/columns/_layout/events/$id",
        "/columns/_layout/replies/$id"
      ]
    },
    "/search/notes": {
      "filePath": "search.notes.tsx",
      "parent": "/search"
    },
    "/search/users": {
      "filePath": "search.users.tsx",
      "parent": "/search"
    },
    "/settings/backup": {
      "filePath": "settings/backup.tsx",
      "parent": "/settings"
    },
    "/settings/bitcoin-connect": {
      "filePath": "settings/bitcoin-connect.tsx",
      "parent": "/settings"
    },
    "/settings/general": {
      "filePath": "settings/general.tsx",
      "parent": "/settings"
    },
    "/settings/relay": {
      "filePath": "settings/relay.tsx",
      "parent": "/settings"
    },
    "/settings/user": {
      "filePath": "settings/user.tsx",
      "parent": "/settings"
    },
    "/settings/wallet": {
      "filePath": "settings/wallet.tsx",
      "parent": "/settings"
    },
    "/zap/$id": {
      "filePath": "zap.$id.tsx"
    },
    "/$account/panel": {
      "filePath": "$account/panel.lazy.tsx",
      "parent": "/$account"
    },
    "/auth/connect": {
      "filePath": "auth/connect.lazy.tsx"
    },
    "/auth/import": {
      "filePath": "auth/import.lazy.tsx"
    },
    "/auth/new": {
      "filePath": "auth/new.lazy.tsx"
    },
    "/editor/": {
      "filePath": "editor/index.tsx"
    },
    "/columns/_layout/create-group": {
      "filePath": "columns/_layout/create-group.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/create-newsfeed": {
      "filePath": "columns/_layout/create-newsfeed.tsx",
      "parent": "/columns/_layout",
      "children": [
        "/columns/_layout/create-newsfeed/f2f",
        "/columns/_layout/create-newsfeed/users"
      ]
    },
    "/columns/_layout/create-topic": {
      "filePath": "columns/_layout/create-topic.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/gallery": {
      "filePath": "columns/_layout/gallery.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/global": {
      "filePath": "columns/_layout/global.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/group": {
      "filePath": "columns/_layout/group.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/topic": {
      "filePath": "columns/_layout/topic.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/newsfeed": {
      "filePath": "columns/_layout/newsfeed.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/onboarding": {
      "filePath": "columns/_layout/onboarding.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/trending": {
      "filePath": "columns/_layout/trending.lazy.tsx",
      "parent": "/columns/_layout",
      "children": [
        "/columns/_layout/trending/notes",
        "/columns/_layout/trending/users"
      ]
    },
    "/columns/_layout/create-newsfeed/f2f": {
      "filePath": "columns/_layout/create-newsfeed.f2f.tsx",
      "parent": "/columns/_layout/create-newsfeed"
    },
    "/columns/_layout/create-newsfeed/users": {
      "filePath": "columns/_layout/create-newsfeed.users.tsx",
      "parent": "/columns/_layout/create-newsfeed"
    },
    "/columns/_layout/trending/notes": {
      "filePath": "columns/_layout/trending.notes.tsx",
      "parent": "/columns/_layout/trending"
    },
    "/columns/_layout/trending/users": {
      "filePath": "columns/_layout/trending.users.tsx",
      "parent": "/columns/_layout/trending"
    },
    "/columns/_layout/users/$id": {
      "filePath": "columns/_layout/users.$id.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/events/$id": {
      "filePath": "columns/_layout/events.$id.lazy.tsx",
      "parent": "/columns/_layout"
    },
    "/columns/_layout/replies/$id": {
      "filePath": "columns/_layout/replies.$id.lazy.tsx",
      "parent": "/columns/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
