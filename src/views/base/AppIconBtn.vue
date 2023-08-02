<template>
    <DocComponent title="App Icon Btn Component" header="AppIconBtn"
        description="The AppNav component represents the top navigation bar of the application. It contains the logo, breadcrumbs, and various utility buttons like language toggle and user profile."
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
