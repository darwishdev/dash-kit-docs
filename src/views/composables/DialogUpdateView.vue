<template>
    <DocComponent title="Dialog Update" header="Dialog Update"
        description="The Dialog-Update Composable is a vital component within our package .. specifically designed to streamline the process 
        of updating data entities. This highly versatile file shares many similarities with the Dialog-Create Composable, offering a comprehensive set
         of functionalities while incorporating a crucial distinction. The Dialog-Update Composable showcases our dedication to providing a
          user-centric approach to data management. By incorporating the ability to fetch and populate the update form with specific data, we empower users 
          to efficiently make changes without the burden of manual data entry. By presenting this form within a dynamic dialog, we ensure a consistent and uninterrupted user experience, allowing users to 
          seamlessly modify the data without navigating away from the current page."
         :componentDocs="docs" :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '@/doc/composables/DialogUpdate/Usage.vue';

export default {
    data() {
        return {
            docs: [
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