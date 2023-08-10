<template>
    <DocComponent title="App Card Component" header="AppCard"
        description="The AppCard component is designed to display specific data in a visually appealing format. It utilizes slots to
         place database information within these cards, already encapsulated with style for ready use. Each card can be updated or
          deleted directly, with event handling managed through prop functions."
        :componentDocs="docs" />
</template>

<script>
import DeleteRestoreHandler from '@/doc/appCard/DeleteRestoreHandler.vue';
import UpdateFormHandling from '@/doc/appCard/UpdateFormHandling.vue';
import Slots from '@/doc/appCard/Slots.vue';
export default {
    data() {
        return {
            docs: [
                {
                    id: 'DeleteRestoreHandler',
                    label: 'Handling DeleteRestore',
                    component: DeleteRestoreHandler
                },
                {
                    id: 'UpdateFormHandling',
                    label: 'UpdateForm PopUp',
                    component: UpdateFormHandling
                },
                {
                    id: 'Slots',
                    label: 'AppCard Slots',
                    component: Slots
                },
            ],
        };
    }
};
</script>
