/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as LoginRouteImport } from './routes/login'
import { Route as TestLabRouteImport } from './routes/test-lab'
import { Route as ApiAuthSplatRouteImport } from './routes/api/auth/$'
import { Route as ApiPaymentsWebhookRouteImport } from './routes/api/payments/webhook'
const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const LoginRoute = LoginRouteImport.update({ id: '/login', path: '/login', getParentRoute: () => rootRouteImport } as any)
const TestLabRoute = TestLabRouteImport.update({ id: '/test-lab', path: '/test-lab', getParentRoute: () => rootRouteImport } as any)
const ApiAuthSplatRoute = ApiAuthSplatRouteImport.update({ id: '/api/auth/$', path: '/api/auth/$', getParentRoute: () => rootRouteImport } as any)
const ApiPaymentsWebhookRoute = ApiPaymentsWebhookRouteImport.update({ id: '/api/payments/webhook', path: '/api/payments/webhook', getParentRoute: () => rootRouteImport } as any)
export interface FileRoutesByFullPath { '/': typeof IndexRoute; '/login': typeof LoginRoute; '/test-lab': typeof TestLabRoute; '/api/auth/$': typeof ApiAuthSplatRoute; '/api/payments/webhook': typeof ApiPaymentsWebhookRoute }
export interface FileRoutesByTo extends FileRoutesByFullPath {}
export interface FileRoutesById { __root__: typeof rootRouteImport; '/': typeof IndexRoute; '/login': typeof LoginRoute; '/test-lab': typeof TestLabRoute; '/api/auth/$': typeof ApiAuthSplatRoute; '/api/payments/webhook': typeof ApiPaymentsWebhookRoute }
export interface FileRouteTypes { fileRoutesByFullPath: FileRoutesByFullPath; fullPaths: '/' | '/login' | '/test-lab' | '/api/auth/$' | '/api/payments/webhook'; fileRoutesByTo: FileRoutesByTo; to: '/' | '/login' | '/test-lab' | '/api/auth/$' | '/api/payments/webhook'; id: '__root__' | '/' | '/login' | '/test-lab' | '/api/auth/$' | '/api/payments/webhook'; fileRoutesById: FileRoutesById }
declare module '@tanstack/react-router' { interface FileRoutesByPath { '/test-lab': { id: '/test-lab'; path: '/test-lab'; fullPath: '/test-lab'; preLoaderRoute: typeof TestLabRouteImport; parentRoute: typeof rootRouteImport } } }
const rootRouteChildren = { IndexRoute, LoginRoute, TestLabRoute, ApiAuthSplatRoute, ApiPaymentsWebhookRoute }
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()
import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' { interface Register { ssr: true; router: Awaited<ReturnType<typeof getRouter>> } }
