<template>
    <DocComponent title="App Layout Component" header="AppLayout"
        description="The App Layout component provides a consistent layout for your Vue.js applications. It serves as a parent component for every route in your router, allowing you to have a common structure for your application's user interface."
        :componentDocs="docs" />
</template>

<script>
import ImportDoc from '@/doc/applayout/ImportDoc.vue';
import FeaturesDoc from '@/doc/applayout/FeaturesDoc.vue';
import CustomizationDoc from '@/doc/applayout/CustomizationDoc.vue';
export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'features',
                    label: 'Features',
                    component: FeaturesDoc
                },
                {
                    id: 'customization',
                    label: 'Customization',
                    component: CustomizationDoc
                },
            ],
        };
    }
};
</script>
