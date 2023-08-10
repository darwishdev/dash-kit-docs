<script setup lang="ts">
import type { CrudOptions , FormOptions ,ToastHandler , SubmitHandler , FormSeciton , FormCreateParams , FormFilterParams } from 'vuedashkit/types'
import type { RoleCreateRequest, RoleCreateResponse } from '@/api/ApiTypes'
import { FormKitSchemaNode } from '@formkit/core'
import apiClient from '@/api/ApiMock';
import { ref } from 'vue'; 

const code: any = {
    basic: `
<script setup lang="ts">
import type { CrudOptions , FormOptions ,ToastHandler , SubmitHandler , FormSeciton , FormCreateParams , FormFilterParams } from 'vuedashkit/types'
import { FormKitSchemaNode } from '@formkit/core'
import { ref } from 'vue'; 
import type { RoleCreateRequest, RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';

const filterModel = ref({})
const modelDisplay = ref({})

const filterFormInputs: FormKitSchemaNode[] = [
    {
        $formkit: 'text',
        outerClass: "col-4",
        name: 'roleName',
        label: 'by roleName',
        placeholder: 'filter by roleName',

    },
    {
        $formkit: 'text',
        outerClass: "col-4",
        name: 'roleDescription',
        label: 'by role description',
        placeholder: 'filter by role description',
    },
]

const filterForm: FormFilterParams = {
    options: {
        showActiveFilters: true,
        showClearFilters: true
    },
    inputs: filterFormInputs,
    modelValue: filterModel,
    displayValue: modelDisplay
}

const filtered = (filterObject : any) => {
    console.log(filterObject); 
}
const removeFilter = (filter : string) => {
    console.log(filter);   
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
        <app-crud :options="options" :createForm="createForm" :filterForm="filterForm" @filtered="filtered" @removeFilter="removeFilter"></app-crud>
    </div>
<\/template>

`
}

const filterModel = ref({})
const modelDisplay = ref({})

const filterFormInputs: FormKitSchemaNode[] = [
    {
        $formkit: 'text',
        outerClass: "col-4",
        name: 'roleName',
        label: 'by roleName',
        placeholder: 'filter by roleName',

    },
    {
        $formkit: 'text',
        outerClass: "col-4",
        name: 'roleDescription',
        label: 'by role description',
        placeholder: 'filter by role description',
    },
]

const filterForm: FormFilterParams = {
    options: {
        showActiveFilters: true,
        showClearFilters: true
    },
    inputs: filterFormInputs,
    modelValue: filterModel,
    displayValue: modelDisplay
}

const filtered = (filterObject : any) => {
    console.log(filterObject); 
}
const removeFilter = (filter : string) => {
    console.log(filter);   
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
        <p>Try using AppCrud component with using filter form inside the appcrud component</p>
    </DocSectionText>
    <div>
        <app-crud :options="options" :createForm="createForm" :filterForm="filterForm" @filtered="filtered" @removeFilter="removeFilter">

        </app-crud>
    </div>
    <DocSectionCode :code="code" />
</template>