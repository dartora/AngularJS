import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://angular-studies-iota.vercel.app',
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});
