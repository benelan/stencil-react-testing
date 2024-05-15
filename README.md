# Stencil React Testing

This is a monorepo for testing and reproducing bugs related to Stencil's React
integration. [`packages/react-library`](./packages/react-library/) was created
following Stencil's [React Integration](https://stenciljs.com/docs/react)
documentation. There are two apps, both of which have caused us problems in the
past:

1. [`apps/vite`](./apps/vite/) with Vitetest, which uses JSDOM under the hood.
2. [`apps/nextjs`](./apps/nextjs/) with prerendering setup to use
   [`GetStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)
    instead of a [custom server](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server).
    See Stencil's [Hydrate App](https://stenciljs.com/docs/hydrate-app)
    documentation for more information.
