import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                // Getting Started
                {
                    path: '/getting-started/introduction',
                    name: "home_view",
                    component: () => import('@/views/getting_started/IntroductionView.vue')
                },
                {
                    path: '/getting-started/installation',
                    component: () => import('@/views/getting_started/InstallationView.vue')
                },
                {
                    path: '/getting-started/configuration',
                    component: () => import('@/views/getting_started/ConfigurationView.vue')
                },
                // form routes...
                {
                    path: '/forms/input-permissions',
                    component: () => import('@/views/forms/InputPermissionsView.vue'),
                },
                {
                    path: '/forms/input-file',
                    component: () => import('@/views/forms/InputFileUploadView.vue'),
                },
                {
                    path: '/forms/form-create',
                    component: () => import('@/views/forms/FormCreateView.vue'),
                },
                {
                    path: '/forms/form-update',
                    component: () => import('@/views/forms/FormUpdateView.vue'),
                },
                {
                    path: '/forms/form-filter',
                    component: () => import('@/views/forms/FormFilterView.vue'),
                },
                {
                    path: '/forms/form-loading',
                    component: () => import('@/views/forms/FormLoadingView.vue'),
                },
                {
                    path: '/forms/form-error',
                    component: () => import('@/views/forms/FormErrorView.vue'),
                },
                // Components - Base
                {
                    path: '/base/app-layout',
                    component: import('@/views/base/AppLayoutView.vue')
                },
                {
                    path: '/base/app-nav',
                    component: import('@/views/base/AppNavView.vue')
                },
                {
                    path: '/base/app-menu',
                    component: import('@/views/base/AppMenuView.vue')
                },
                {
                    path: '/base/app-card',
                    component: import('@/views/base/AppCardView.vue')
                },
                {
                    path: '/base/app-crud',
                    component: import('@/views/base/AppCrudView.vue')
                },
                {
                    path: '/base/icon-btn',
                    component: import('@/views/base/AppIconBtnView.vue')
                },

                // Composables
                {
                    path: '/composables/data-fetcher-list',
                    component: () => import('@/views/composables/DataFetcherListView.vue')
                },
                {
                    path: '/composables/data-fetcher-find',
                    component: () => import('@/views/composables/DataFetcherFindView.vue')
                },
                {
                    path: '/composables/delete-restore-dialog',
                    component: () => import('@/views/composables/DialogDeleteRestoreView.vue')
                },
                {
                    path: '/composables/dialog-update',
                    component: () => import('@/views/composables/DialogUpdateView.vue')
                },
                {
                    path: '/composables/dialog-create',
                    component: () => import('@/views/composables/DialogCreateView.vue')
                },

                // Helpers
                {
                    path: '/helpers/form-factory',
                    component: () => import('@/views/helpers/FormFactoryView.vue')
                },
                {
                    path: '/helpers/filter',
                    component: () => import('@/views/helpers/FilterView.vue')
                },
                {
                    path: '/helpers/handle-success-toast',
                    component: () => import('@/views/helpers/HandleSuccessToastView.vue')
                },
                {
                    path: '/helpers/get-route-variation',
                    component: () => import('@/views/helpers/GetRouteVariationView.vue')
                },
                {
                    path: '/helpers/parse-date',
                    component: () => import('@/views/helpers/ParseDateView.vue')
                },
                {
                    path: '/helpers/can',
                    component: () => import('@/views/helpers/CanView.vue')
                },
                {
                    path: '/helpers/auth-middleware',
                    component: () => import('@/views/helpers/AuthMiddlewareView.vue')
                },
                {
                    path: '/helpers/export-csv',
                    component: () => import('@/views/helpers/ExportCSVView.vue')
                },
                {
                    path: '/helpers/parse-file',
                    component: () => import('@/views/helpers/ParseFileView.vue')
                },
            ]
        },
        // Add more top-level routes here if needed...
        {
            path: '/contribution',
            name: 'contribution_view',
            component: () => import('@/views/ContributionView.vue')
        },
    ]
});

router.push('/getting-started/introduction');

export default router;
