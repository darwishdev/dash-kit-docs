<template>
    <DocComponent title="App Crud Component" header="AppCrud"
        description="The AppCrud component is the cornerstone of our package. It provides functionalities such as a 'Create' button that
         can either redirect to a new route or trigger a form pop-up on the same page, with control managed via props. It also accepts a
          filter form to refine the displayed data based on specific keys, and provides data export and import functionality. However,
           it does not encapsulate the entire list feature. Instead, it includes slots for data display, where the `AppCard` comes into play."
        :componentDocs="docs" />
</template>

<script>
import Options from '@/doc/appCrud/Options.vue';
import popUp from '@/doc/appCrud/popUp.vue';
import filterForm from '@/doc/appCrud/filterForm.vue';
import ImportHandler from '@/doc/appCrud/ImportHandler.vue';
export default {
    data() {
        return {
            docs: [
                {
                    id: 'Options',
                    label: 'AppCrud Options',
                    component: Options
                },
                {
                    id: 'AppCrud_popup',
                    label: 'AppCrud pop up form',
                    component: popUp
                },
                {
                    id: 'filterForm',
                    label: 'AppCrud Filter form',
                    component: filterForm
                },
                {
                    id: 'ImportHandler',
                    label: 'Import Handler',
                    component: ImportHandler
                },
            ],
        };
    }
};
</script>
