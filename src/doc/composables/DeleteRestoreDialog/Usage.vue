<script setup lang="ts">
import { DeleteRestoreHandler, DialogDeleteRestoreParms } from 'dash-kit/types'
import type { RoleDeleteRestoreRequest } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDialog } from 'primevue/usedialog';
import { useDialogDeleteRestore } from 'dash-kit/composables';
const dialog = useDialog()

const code: any = {
    basic: `
<script setup lang="ts">
import { DeleteRestoreHandler, DialogDeleteRestoreParms } from 'dash-kit/types'
import type { RoleDeleteRestoreRequest } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDialog } from 'primevue/usedialog';
import { useDialogDeleteRestore } from 'dash-kit/composables';
const dialog = useDialog()

const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
    deleteRestore: apiClient.roleDeleteRestore,
    requestPropertyName: 'roleId',
}

const deleteRestoreDialogParm: DialogDeleteRestoreParms = {
    onConfirmed: () => {
        console.log('role deleted successfully');
    },
    dialog,
    deleteRestoreHandler: deleteRestoreHandler,
    recordId: 1,
}

const openDialog = () => {
    const deleteRestoreDialog = useDialogDeleteRestore(deleteRestoreDialogParm);
    deleteRestoreDialog.openDialog()
}

<\/script>

<template>
    <div class="text-center">
        <h1>Role #1</h1>
        <div class="text-center m-auto my-5">
            <button @click="openDialog" class="p-3 border-radius">Delete Role</button>
        </div>
    </div>
<\/template>

`
}
const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
    deleteRestore: apiClient.roleDeleteRestore,
    requestPropertyName: 'roleId',
}

const deleteRestoreDialogParm: DialogDeleteRestoreParms = {
    onConfirmed: () => {
        console.log('role deleted successfully');
    },
    dialog,
    deleteRestoreHandler: deleteRestoreHandler,
    recordId: 1,
}

const openDialog = () => {
    const deleteRestoreDialog = useDialogDeleteRestore(deleteRestoreDialogParm);
    deleteRestoreDialog.openDialog()
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using DeleteRestore Dialog to confirm deletion process with passing to it the 'deleteRestoreDialogParm'</p>
    </DocSectionText>
    <div class="text-center">
        <h1 class="my-5">Role #1</h1>
        <div class="text-center m-auto my-5">
            <button @click="openDialog" class="p-3 border-radius">Delete Role</button>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>
