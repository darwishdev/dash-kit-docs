<template>
    <DocComponent title="ParseDate" header="ParseDate Function"
        description="The parseDate function is a utility function used to parse a date string and format it according to the specified 
        options. It utilizes the Date object and the toLocaleString method to format the date." :componentDocs="docs"
    :ptTabComponent="ptComponent" />
</template>

<script>
import Parameters from '@/doc/helpers/ParseDate/Parameters.vue';
import Usage from '@/doc/helpers/ParseDate/Usage.vue';

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