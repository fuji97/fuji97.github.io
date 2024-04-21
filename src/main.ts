import App from './App.svelte'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
