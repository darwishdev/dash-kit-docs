<script setup lang="ts">
import type { DeleteRestoreHandler , DialogDeleteRestoreParms ,FindHandler , SubmitHandler , FormUpdateParams, FormSeciton , DialogUpdateParms } from 'vuedashkit/types'
import type { RoleDeleteRestoreRequest , RoleFindRequest ,RoleFindResponse , RoleUpdateRequest , RoleUpdateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import {inject} from 'vue'
import { useDialogDeleteRestore , useDataFetcherFind, useDialogUpdate } from 'vuedashkit/composables';

const RoleId = 1
const { responseData, loading, fetchData } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, { roleId: RoleId } as RoleFindRequest);

const code: any = {
    basic: `
<script setup lang="ts">
import type { DeleteRestoreHandler , DialogDeleteRestoreParms ,FindHandler , SubmitHandler , FormUpdateParams, FormSeciton , DialogUpdateParms } from 'vuedashkit/types'
import type { RoleDeleteRestoreRequest , RoleFindRequest ,RoleFindResponse , RoleUpdateRequest , RoleUpdateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import {inject} from 'vue'
import { useDialogDeleteRestore , useDataFetcherFind, useDialogUpdate } from 'vuedashkit/composables';

const RoleId = 1
const { responseData, loading, fetchData } = useDataFetcherFind<RoleFindRequest, RoleFindResponse>(apiClient.roleFind, { roleId: RoleId } as RoleFindRequest);

const useDialog = inject('useDialog') as Function
const dialog = useDialog()

const sections: FormSeciton[] = [
    {
        'role Info': [
            {
                $formkit: 'text',
                outerClass: "col-4",
                name: 'roleName',
                label: 'roleName Label',
                placeholder: 'enter your roleName',
                validation: 'required|length:3',

            },
            {
                $formkit: 'textarea',
                outerClass: "col-8",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]

const findHandler: FindHandler<RoleFindRequest, RoleFindResponse, RoleFindResponse> = {
    findFunction: apiClient.roleFind,
    requestPropertyName: 'roleId',
    requestValue : RoleId
}
const submitCallBack = (_: any) => { fetchData() }
const updateSubmitHandler: SubmitHandler<RoleUpdateRequest, RoleUpdateRequest, RoleUpdateResponse> = {
    submit: apiClient.roleUpdate,
    submitCallBack,
    errorHandler : {}
}

const updateForm: FormUpdateParams = {
    sections: sections,
    options: {
        id: 'category-update',
        allowBulkCreate: false,
        title: "category_update",
    },
    submitHandler: updateSubmitHandler,
    toastHandler: {
        hideToast : false,
        message : 'role saved successfully',
        title : 'role saved!'
    },
    findHandler
}


const dialogUpdateParms: DialogUpdateParms = {
    form: updateForm,
    dialog,
}
const dialogUpdate = useDialogUpdate(dialogUpdateParms);

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
            :dialogDeleteRestore="dialogDeleteRestore" :recordId="RoleId" :dialogUpdate="dialogUpdate">
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

const sections: FormSeciton[] = [
    {
        'role Info': [
            {
                $formkit: 'text',
                outerClass: "col-4",
                name: 'roleName',
                label: 'roleName Label',
                placeholder: 'enter your roleName',
                validation: 'required|length:3',

            },
            {
                $formkit: 'textarea',
                outerClass: "col-8",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]

const useDialog = inject('useDialog') as Function
const dialog = useDialog()

const findHandler: FindHandler<RoleFindRequest, RoleFindResponse, RoleFindResponse> = {
    findFunction: apiClient.roleFind,
    requestPropertyName: 'roleId',
    requestValue : RoleId
}
const submitCallBack = (_: any) => { fetchData() }
const updateSubmitHandler: SubmitHandler<RoleUpdateRequest, RoleUpdateRequest, RoleUpdateResponse> = {
    submit: apiClient.roleUpdate,
    submitCallBack,
    errorHandler : {}
}

const updateForm: FormUpdateParams = {
    sections: sections,
    options: {
        id: 'category-update',
        allowBulkCreate: false,
        title: "category_update",
    },
    submitHandler: updateSubmitHandler,
    toastHandler: {
        hideToast : false,
        message : 'role saved successfully',
        title : 'role saved!'
    },
    findHandler
}


const dialogUpdateParms: DialogUpdateParms = {
    form: updateForm,
    dialog,
}
const dialogUpdate = useDialogUpdate(dialogUpdateParms);

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
            :dialogDeleteRestore="dialogDeleteRestore" :recordId="RoleId" :dialogUpdate="dialogUpdate">
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