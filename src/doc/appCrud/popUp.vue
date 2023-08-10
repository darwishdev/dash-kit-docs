<script setup lang="ts">
import type { CrudOptions , FormOptions ,ToastHandler , SubmitHandler , FormSeciton , FormCreateParams } from 'vuedashkit/types'
import type { RoleCreateRequest, RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';

const code: any = {
    basic: `
<script setup lang="ts">
import type { CrudOptions , FormOptions ,ToastHandler , SubmitHandler , FormSeciton , FormCreateParams } from 'vuedashkit/types'
import type { RoleCreateRequest, RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';

const sections: FormSeciton[] = [
    {
        'role Info': [
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'roleName',
                label: 'roleName Label',
                placeholder: 'enter your roleName',
                validation: 'required|length:3',

            },
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]


const formOptions: FormOptions = {
    id: 'Role-create_popUp',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = {
    hideToast: false,
    message: 'role created successfully',
    title: 'role saved'
}

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
    submit: apiClient.roleCreate,
    errorHandler: {
    },
}

const CreateForm : FormCreateParams = {
    options : formOptions , 
    sections : sections ,
    submitHandler : submitHandler ,
    toastHandler : toastHandler
}

const options: CrudOptions = {
  title: "Roles List",
  showCreateButton: true,
  feature: 'role',
  showExportButton: true,
  showDeletedFilter: true,
}

<\/script>

<template>
    <div>
        <app-crud :options="options" :CreateForm="CreateForm"></app-crud>
    </div>
<\/template>

`
}
const sections: FormSeciton[] = [
    {
        'role Info': [
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'roleName',
                label: 'roleName Label',
                placeholder: 'enter your roleName',
                validation: 'required|length:3',

            },
            {
                $formkit: 'text',
                outerClass: "col-6",
                name: 'roleDescription',
                label: 'roleDescription Label',
                placeholder: 'enter your roleDescription',
                validation: '',
            },
        ],
    },
]


const formOptions: FormOptions = {
    id: 'Role-create_popUp',
    title: "Role Create",
    withBackground: true
}
const toastHandler: ToastHandler = {
    hideToast: false,
    message: 'role created successfully',
    title: 'role saved'
}

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
    submit: apiClient.roleCreate,
    errorHandler: {
    },
}

const createForm : FormCreateParams = {
    options : formOptions , 
    sections : sections ,
    submitHandler : submitHandler ,
    toastHandler : toastHandler,
}

const options: CrudOptions = {
  title: "Roles List",
  showCreateButton: true,
  feature: 'role',
  showExportButton: true,
  showDeletedFilter: true,
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using AppCrud component with using create form as a pop up form by passing the createForm prop</p>
        <p class="my-3">You should have got familliar with <span class="text-2xl text-primary">CreateForm</span> type properties as you have used them before while using 
            form-create component. For a comprehensive understanding of what values should be passed to the 'sections', 'options', 'submitHandler', and 'toastHandler' properties, 
            please refer back to the <RouterLink to="/forms/form-create">FormCreate</RouterLink></p>
        <p class="mt-4">Press on 'New' button to try the pop up form</p>
    </DocSectionText>
    <div>
        <app-crud :options="options" :createForm="createForm"></app-crud>
    </div>
    <DocSectionCode :code="code" />
</template>