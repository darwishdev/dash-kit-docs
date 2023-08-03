<template>
    <DocComponent title="Dialog Create" header="Dialog Create"
        description="Dialog-Create Composable is an essential component designed to facilitate the creation of dynamic and interactive forms. At its core, it consists of a meticulously crafted 'useDialogCreate' function
        The primary objective of the 'useDialogCreate' function is to trigger the display of a create form, meticulously tailored to 
        adhere to our pre-defined schema. By invoking this function, users are presented with a convenient and intuitive interface, 
        allowing them to effortlessly populate the form with relevant information. The beauty of this solution lies in its ability to
         dynamically generate the form within a dialog, effectively eliminating the need for navigating to a separate page."
         :componentDocs="docs" :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '@/doc/composables/DialogCreate/Usage.vue';

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