<template>
    <DocComponent title="ExportCsv" header="ExportCsv Function"
        description="The ExportCSV function is a utility function provided by the vuedashkit helpers file. It allows you to export 
        data in the form of an array to a CSV (Comma-Separated Values) file in the XLSX (Excel) format." :componentDocs="docs"
        :ptTabComponent="ptComponent" />
</template>

<script>
import Parameters from '@/doc/helpers/ExportCsv/Parameters.vue';
import Usage from '@/doc/helpers/ExportCsv/Usage.vue';

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