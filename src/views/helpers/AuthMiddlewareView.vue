<template>
    <DocComponent title="authMiddleware" header="authMiddleware"
        description="The authMiddleware function acts as a middleware for route authorization in the vuedashkit package. It checks if 
        the user is authorized to access specific routes. If the user is unauthenticated, it redirects them to the login page. Additionally
        , it checks if the user has permission to access the requested route; if not, it redirects them to the unauthorized page." :componentDocs="docs"
        :ptTabComponent="ptComponent" />
</template>

<script>
import Parameters from '@/doc/helpers/authMiddleware/Parameters.vue';
import Usage from '@/doc/helpers/authMiddleware/Usage.vue';
import FunctionDetails from '@/doc/helpers/authMiddleware/FunctionDetails.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'Parameters',
                    label: 'Function Parameters',
                    component: Parameters
                },
                {
                    id: 'Usage',
                    label: 'Usage',
                    component: Usage
                },
                {
                    id: 'FunctionDetails',
                    label: 'Function Details',
                    component: FunctionDetails
                },
            ],
        };
    }
};
</script>