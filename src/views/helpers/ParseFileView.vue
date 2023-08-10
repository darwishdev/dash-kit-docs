<template>
    <DocComponent title="ParseFile" header="ParseFile Function"
        description="The ParseFile function is a utility function used to select the appropriate parse function based on the file extension
         and parse the file content using that function. The function supports parsing files in CSV, XLSX, and XLS formats." :componentDocs="docs"
        :ptTabComponent="ptComponent" />
</template>

<script>
import Parameters from '@/doc/helpers/ParseFile/Parameters.vue';
import Usage from '@/doc/helpers/ParseFile/Usage.vue';
import FunctionDetails from '@/doc/helpers/ParseFile/FunctionDetails.vue';

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