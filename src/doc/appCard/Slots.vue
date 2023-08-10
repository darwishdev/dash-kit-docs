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
            <template #start>
                <div style="padding: 0.8rem;">
                    <h3>{{ $t('permissions') }}</h3>
                    <h2 class="font-bold">{{ responseData.rolePermissions }}</h2>
                    <h3>{{ $t('users') }}</h3>
                    <h2 class="font-bold">{{ responseData.roleUsers }}</h2>
                </div>
            </template>
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
        <p>The <span class="text-3xl text-primary">AppCard</span> component makes use of Vue.js slots to provide a flexible layout for displaying record data within the card.
        This component utilizes two primary slots, namely <span class="text-primary">start</span> and <span class="text-primary">end</span>.</p>
        <div class="px-5 py-2">
            <h1 class="mt-4">Start Slot</h1>
            <p>The <span class="text-3xl text-primary">Start</span> slot is designed to display data at the beginning of the card. It provides the 
                flexibility to customize the initial section of the card with your specific data.
            </p>
            <h1 class="mt-4">End Slot</h1>
            <p>The <span class="text-3xl text-primary">End</span> , on the other hand, is used to display data at the end of the card. 
                This allows for tailoring the final section of the card to suit your particular needs.
            </p>
        </div>

        <h1>For example :</h1>  
                    
    </DocSectionText>
    <div v-if="loading">
        <app-card-loading class="col " v-for="i in 3" :key="i" />
    </div>
    <div v-else>
        <app-card @onDeleteRestore="(_: any) => fetchData()"
            :class="{ 'app-card-restore': false }" feature="role"
            :dialogDeleteRestore="dialogDeleteRestore" :recordId="RoleId" :dialogUpdate="dialogUpdate">
            <template #start>
                <div style="padding: 0.8rem;">
                    <h3>{{ $t('permissions') }}</h3>
                    <h2 class="font-bold">{{ responseData.rolePermissions }}</h2>
                    <h3>{{ $t('users') }}</h3>
                    <h2 class="font-bold">{{ responseData.roleUsers }}</h2>
                </div>
            </template>
            <template #end>
                <div class="text-center">
                    <h1 class="p-4">{{responseData.roleName}}</h1>
                    <h4 class="py-2">{{responseData.roleDescription}}</h4>
                </div>
            </template>
        </app-card>
    </div>
    <DocSectionCode :code="code" />
    <p class="my-5">See a <router-link to="/base/app-crud">full example</router-link> of using <span class="text-3xl text-primary">AppCard</span> component inside the <span class="text-3xl text-primary">AppCrud</span> to display data</p>
</template>