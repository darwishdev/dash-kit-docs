import { createApp, defineComponent, h } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import 'vuedashkit/style'
import '@/assets/scss/app.scss'
import DashKit from 'vuedashkit'
import * as components from "@/components"
import dashkitConfig from '@/plugins/dashkit.config'

import DialogService from 'primevue/dialogservice';
const app = createApp(App)
app.use(router).use(DashKit, dashkitConfig).use(DialogService)
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
