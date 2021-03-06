import App from '@app/App.svelte'

const app = new App({
  target: document.body
})

export default app

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
