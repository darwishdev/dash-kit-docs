<template>
    <DocComponent title="GetRouteVariationView" header="GetRouteVariation"
        description="The getRouteVariation function is a utility function used to generate a new route based on the current route and a 
        specified variation. It is designed to be used in list pages to navigate from one feature list page to another feature." :componentDocs="docs"
        :ptTabComponent="ptComponent" />
</template>

<script>
import Parameters from '@/doc/helpers/GetRouteVariation/Parameters.vue';
import Usage from '@/doc/helpers/GetRouteVariation/Usage.vue';
// import FunctionDetails from '@/doc/helpers/GetRouteVariation/FunctionDetails.vue';

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
                // {
                //     id: 'FunctionDetails',
                //     label: 'Function Details',
                //     component: FunctionDetails
                // },
            ],
        };
    }
};
</script>