<template>
    <DocComponent title="Input Permissions" header="Input Permissions" description="The Permissions Custom Input Component serves as a comprehensive 
    and ready-to-use input component, meticulously crafted to display a list of available permissions derived from your API client's 
    permissions list function. By leveraging this component, you can effortlessly assign and configure specific permissions for individual 
    users or roles during the creation process. The primary functionality of the Permissions Custom Input Component revolves around its intuitive
     switch toggle buttons. These buttons are intelligently integrated within the component, providing a seamless and user-friendly 
     interface for selecting and configuring permissions. By interacting with the switch toggle buttons, you can conveniently enable 
     or disable permissions as per your requirements."
     :componentDocs="docs" :ptTabComponent="ptComponent" />
</template>

<script>
import Usage from '@/doc/forms/PermissionsInput/Usage.vue';

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
            // ptComponent: PTComponent,
            // themingDoc: ThemingDoc
        };
    }
};
</script>
