import { createRouter, createWebHistory } from 'vue-router'
// import AppLayout from '@/components/AppLayout.vue'
// import { AppLayout } from 'dash-kit/base'
import AppLayout from '@/layouts/AppLayout.vue'
import IntroductionView from '@/views/getting_started/IntroductionView.vue'
import InstallationView from '@/views/getting_started/InstallationView.vue'
import ConfigurationView from '@/views/getting_started/ConfigurationView.vue'
import AppLayoutView from '@/views/base/AppLayoutView.vue'
import formCreate from '@/views/forms/formCreate.vue'
import formLoading from '@/views/forms/FormLoading.vue'
import FormUpdate from '@/views/forms/FormUpdate.vue'
import FormError from '@/views/forms/FormError.vue'
import FormFilter from '@/views/forms/FormFilter.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                //getting started
                {
                    path: '/getting-started/introduction',
                    name: "home_view",
                    component: IntroductionView
                },
                {
                    path: '/getting-started/installation',
                    component: InstallationView
                },
                {
                    path: '/getting-started/configuration',
                    component: ConfigurationView
                },

                //compoonents - base
                {
                    path: '/base/app-layout',
                    component: AppLayoutView
                },
                {
                    path: '/forms/formCreate',
                    component: formCreate
                },
                {
                    path: '/forms/form-loading',
                    component: formLoading
                },
                {
                    path: '/forms/form-update',
                    component: FormUpdate
                },
                {
                    path: '/forms/form-error',
                    component: FormError
                },
                {
                    path: '/forms/form-filter',
                    component: FormFilter
                },
                // {
                //     path: '/composables/data-fetcher-list',
                //     component: DataFetcherList
                // },
                // {
                //     path: '/composables/data-fetcher-find',
                //     component: DataFetcherFind
                // },
                // {
                //     path: '/composables/delete-restore-dialog',
                //     component: DeleteRestoreDialog
                // },
            ]
        }
    ]
})

router.push('/getting-started/introduction')
export default router
