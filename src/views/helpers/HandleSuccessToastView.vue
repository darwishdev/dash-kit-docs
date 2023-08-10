<template>
    <DocComponent title="Handle Success Toast" header="HandleSuccessToast"
        description="The handleSuccessToast function is a utility function used to display a success toast message on the top corner of
         the page after successful actions. It provides flexibility to customize the toast title and message through the handler 
         parameter, and it utilizes the toast object to add the toast message. The function also supports translation of the toast title and message using the t function." :componentDocs="docs"
        :ptTabComponent="ptComponent" />
</template>

<script>
import Parameters from '@/doc/helpers/HandleSuccessToast/Parameters.vue';
import Usage from '@/doc/helpers/HandleSuccessToast/Usage.vue';

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
            ],
        };
    }
};
</script>