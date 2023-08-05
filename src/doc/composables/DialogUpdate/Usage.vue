<script setup lang="ts">
import { FormSeciton, FormOptions, FindHandler, ToastHandler, SubmitHandler, DialogUpdateParms } from 'vuedashkit/types'
import type { RoleUpdateRequest, RoleUpdateResponse, RoleFindRequest, RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDialog } from 'primevue/usedialog';
import { useDialogUpdate } from 'vuedashkit/composables';
const dialog = useDialog()

const code: any = {
    basic: `
<script setup lang="ts">
import {  FormSeciton , FormOptions , FindHandler ,  ToastHandler , SubmitHandler , DialogUpdateParms } from 'vuedashkit/types'
import type { RoleUpdateRequest , RoleUpdateResponse , RoleFindRequest , RoleFindResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock'; // replace with your api client 
import { useDialog } from 'primevue/usedialog';
import { useDialogUpdate } from 'vuedashkit/composables';
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
const findHandler: FindHandler<RoleFindRequest , RoleFindResponse , RoleFindResponse> = {
    findFunction : apiClient.roleFind,
    requestPropertyName : 'roleId',
    requestValue : 1
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
const updateDialogParms: DialogUpdateParms = {
                onConfirmed: () => {
                    console.log('role updated');
                },
                form: {
                    sections : sections,
                    options : options, 
                    submitHandler : submitHandler , 
                    toastHandler : toastHandler ,
                    findHandler : findHandler
                },
                dialog : dialog

}

const openDialog = () => {
    const updateDialog = useDialogUpdate(updateDialogParms);
    updateDialog.openDialog()
}
<\/script>

<template>
    <div class="text-center">
        <div class="bg-primary p-3 border-round">
            <h1 class="text-5xl">Role #1</h1>
            <p>Sales Manager</p>
            <div class="text-center m-auto my-3">
                <button @click="openDialog" class="p-3 border-radius">Update Role</button>
            </div>
        </div>
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
    hideToast: false,
    message: 'role created successfully',
    title: 'role saved'
}
const findHandler: FindHandler<RoleFindRequest, RoleFindResponse, RoleFindResponse> = {
    findFunction: apiClient.roleFind,
    requestPropertyName: 'roleId',
    requestValue: 1
}

const submitHandler: SubmitHandler<RoleUpdateRequest, RoleUpdateRequest, RoleUpdateResponse> = {
    submit: apiClient.roleUpdate,
    errorHandler: {
        globalErrors: {
            'internalServerError': 'internal Server Error happened'
        },
        fieldErrors: {
            'already_exists unique_constraint_roles_role_name_key': {
                roleName: 'this role name already exists'
            }
        }
    },
}
const updateDialogParms: DialogUpdateParms = {
    onConfirmed: () => {
        console.log('role updated');
    },
    form: {
        sections: sections,
        options: options,
        submitHandler: submitHandler,
        toastHandler: toastHandler,
        findHandler: findHandler
    },
    dialog: dialog

}

const openDialog = () => {
    const updateDialog = useDialogUpdate(updateDialogParms);
    updateDialog.openDialog()
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using Update Dialog composable function to pop up an update form with our defined specifications</p>
    </DocSectionText>
    <div class="text-center">
        <div class="bg-primary p-3 border-round">
            <h1 class="text-5xl">Role #1</h1>
            <p>Sales Manager</p>
            <div class="text-center m-auto my-3">
                <button @click="openDialog" class="p-3 border-radius">Update Role</button>
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>
