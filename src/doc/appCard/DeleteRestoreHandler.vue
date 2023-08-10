<script setup lang="ts">
import type { DeleteRestoreHandler , DialogDeleteRestoreParms } from 'vuedashkit/types'
import type { RoleDeleteRestoreRequest , RoleFindRequest ,RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import {inject} from 'vue'
import { useDialogDeleteRestore , useDataFetcherFind } from 'vuedashkit/composables';

const RoleId = 1
const { responseData, loading, fetchData } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, { roleId: RoleId } as RoleFindRequest);

const code: any = {
    basic: `
<script setup lang="ts">
import type { DeleteRestoreHandler , DialogDeleteRestoreParms } from 'vuedashkit/types'
import type { RoleDeleteRestoreRequest , RoleFindRequest ,RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import {inject} from 'vue'
import { useDialogDeleteRestore , useDataFetcherFind } from 'vuedashkit/composables';

const RoleId = 1
const { responseData, loading, error, fetchData } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, { roleId: RoleId } as RoleFindRequest);

const useDialog = inject('useDialog') as Function
const dialog = useDialog()
const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
    deleteRestore: apiClient.roleDeleteRestore,
    requestPropertyName: 'roleId',
}
const dialogDeleteRestoreParms: DialogDeleteRestoreParms = {
    onConfirmed: () => {
        console.log('deleted successfully');
        fetchData()
    },
    dialog,
    deleteRestoreHandler
}
const dialogDeleteRestore = useDialogDeleteRestore(dialogDeleteRestoreParms);
<\/script>

<template>
    <div v-if="loading">
        <app-card-loading class="col " v-for="i in 3" :key="i" />
    </div>
    <div v-else>
        <app-card @onDeleteRestore="(_: any) => fetchData()"
            :class="{ 'app-card-restore': false }" feature="role"
            :dialogDeleteRestore="dialogDeleteRestore" :recordId="RoleId">
            <template #end>
                <div class="text-center">
                    <h1 class="p-4">{{responseData.roleName}}</h1>
                    <h4 class="py-2">{{responseData.roleDescription}}</h4>
                </div>
            </template>
        </app-card>
    </div>
<\/template>

`
}

// const formOptions: FormOptions = {
//     id: 'Role-create_popUp',
//     title: "Role Create",
//     withBackground: true
// }
// const toastHandler: ToastHandler = {
//     hideToast: false,
//     message: 'role created successfully',
//     title: 'role saved'
// }

// const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
//     submit: apiClient.roleCreate,
//     errorHandler: {
//     },
// }

const useDialog = inject('useDialog') as Function
const dialog = useDialog()
const deleteRestoreHandler: DeleteRestoreHandler<RoleDeleteRestoreRequest> = {
    deleteRestore: apiClient.roleDeleteRestore,
    requestPropertyName: 'roleId',
}
const dialogDeleteRestoreParms: DialogDeleteRestoreParms = {
    onConfirmed: () => {
        console.log('deleted successfully');
        fetchData()
    },
    dialog,
    deleteRestoreHandler
}
const dialogDeleteRestore = useDialogDeleteRestore(dialogDeleteRestoreParms);

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using AppCard component with handling the deleteRestore operations by passing the dialogDeleteRestore prop</p>
    </DocSectionText>
    <div v-if="loading">
        <app-card-loading class="col " v-for="i in 3" :key="i" />
    </div>
    <div v-else>
        <app-card @onDeleteRestore="(_: any) => fetchData()"
            :class="{ 'app-card-restore': false }" feature="role"
            :dialogDeleteRestore="dialogDeleteRestore" :recordId="RoleId">
            <template #end>
                <div class="text-center">
                    <h1 class="p-4">{{responseData.roleName}}</h1>
                    <h4 class="py-2">{{responseData.roleDescription}}</h4>
                </div>
            </template>
        </app-card>
    </div>
    <DocSectionCode :code="code" />
</template>