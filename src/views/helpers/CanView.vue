<template>
    <DocComponent title="Can" header="Can Function"
        description="The Can function is a utility function provided by the vuedashkit/helpers package. It is used to check if a user 
        has permission to perform a specific action or use a specific function. The function takes the name of the function as a 
        parameter and checks if the user's permissions, retrieved from the local storage, include that function name." 
        :componentDocs="docs" :ptTabComponent="ptComponent" />
</template>

<script>
import Parameters from '@/doc/helpers/Can/Parameters.vue';
import Usage from '@/doc/helpers/Can/Usage.vue';
import FunctionDetails from '@/doc/helpers/Can/FunctionDetails.vue';

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