import { createApp, defineComponent, h } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import 'dash-kit/style'
import '@/assets/scss/app.scss'
import DashKit from 'dash-kit'
import * as components from "@/components"
import dashkitConfig from '@/plugins/dashkit.config'

const app = createApp(App)
app.use(router).use(DashKit, dashkitConfig)
Object.keys(components).forEach((key: string) => {
    app.component(key, components[key as keyof typeof components])
});

const LogoComponent = defineComponent({
    setup() {
        return () => h('img', { src: '/logo.png' })
    }
})
const LogoIconComponent = defineComponent({
    setup() {
        return () => h('img', { src: '/icon.png' })
    }
})
app.component("Logo", LogoComponent)
app.component("LogoIcon", LogoIconComponent)
app.mount('#app')
