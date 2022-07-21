import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: 'http://localhost:1234',
    setupNodeEvents(on, config) {
      on('task', {
        async 'db:seed'() {
          console.log('test')
        },
      })
    },
  },
})
