<script setup lang="ts">
import {  DialogCreateParms,FormSeciton , FormOptions , ToastHandler , SubmitHandler } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDialog } from 'primevue/usedialog';
import { useDialogCreate } from 'dash-kit/composables';
const dialog = useDialog()

const code: any = {
    basic: `
<script setup lang="ts">
import {  DialogCreateParms,FormSeciton , FormOptions , ToastHandler , SubmitHandler } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock'; // replace with your api client
import { useDialog } from 'primevue/usedialog';
import { useDialogCreate } from 'dash-kit/composables';
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


const options: FormOptions = {
    id: 'Role-create_dialog',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = {
    hideToast : false,
    message : 'role created successfully',
    title : 'role saved'
}

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {
                globalErrors : {
                    'internalServerError' : 'internal Server Error happened'
                },
                fieldErrors : {
                    'already_exists unique_constraint_roles_role_name_key' : {
                        roleName : 'this role name already exists'
                    }
                }
            },
}
const createDialogParms: DialogCreateParms = {
                onConfirmed: () => {
                    console.log('role created successfully');
                    
                },
                form: {
                    sections : sections ,
                    options : options , 
                    submitHandler : submitHandler ,
                    toastHandler : toastHandler
                },
                dialog : dialog
            }

const openDialog = () => {
    const createDialog = useDialogCreate(createDialogParms);
    createDialog.openDialog()
}
<\/script>

<template>
    <div class="text-center m-auto my-5">
            <button @click="openDialog" class="p-3 border-radius">Create New Role</button>
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


const options: FormOptions = {
    id: 'Role-create_dialog',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = {
    hideToast : false,
    message : 'role created successfully',
    title : 'role saved'
}

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {
                globalErrors : {
                    'internalServerError' : 'internal Server Error happened'
                },
                fieldErrors : {
                    'already_exists unique_constraint_roles_role_name_key' : {
                        roleName : 'this role name already exists'
                    }
                }
            },
}
const createDialogParms: DialogCreateParms = {
                onConfirmed: () => {
                    console.log('role created successfully');
                    
                },
                form: {
                    sections : sections ,
                    options : options , 
                    submitHandler : submitHandler ,
                    toastHandler : toastHandler
                },
                dialog : dialog
            }

const openDialog = () => {
    const createDialog = useDialogCreate(createDialogParms);
    createDialog.openDialog()
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using Create Dialog composable function to pop up a create form with our defined specifications</p>
    </DocSectionText>
    <div class="text-center">
        <div class="text-center m-auto my-5">
            <button @click="openDialog" class="p-3 border-radius">Create New Role</button>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>
