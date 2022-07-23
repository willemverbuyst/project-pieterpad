import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async 'db:seed'() {
          console.log('test')
        },
      })
    },
  },
})
