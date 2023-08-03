<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse  } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { ref } from 'vue';
const permissions = ref()
const code : any = {
    basic : `
<script setup lang="ts">
import type { FormOptions, SubmitHandler,FormSeciton } from 'dash-kit/types'
import type { RoleCreateRequest , RoleCreateResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock'; // replace with your api client

// replace with the formSchema you want so you can generate a form with your specifications 
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
    {
        permissions: [
            {
                $cmp: 'FormKit',
                props: {
                    outerClass: "w-full",
                    type: 'permissions',
                    name: 'permissions',
                    permissions: apiClient.permissionsList // replace with your api permissionsList function
                }
            }
        ],
    },
]


const options: FormOptions = {
    id: 'permissions-input',
    title: "Role Create",
    withBackground: true
}


const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: apiClient.roleCreate,
            errorHandler : {},
}
<\/script>

<template>
    <form-create :sections="sections" :submitHandler="submitHandler" :options="options" />
<\/template>

`
}
const sectionsss: FormSeciton[] = [ 
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
    {
        permissions: [
            {
                $cmp: 'FormKit',
                props: {
                    outerClass: "w-full",
                    type: 'permissions',
                    name: 'permissions',
                    permissions: apiClient.permissionsList 
                }
            }
        ],
    },
]



const options: FormOptions = {
    id: 'Permissions Custom input',
    title: "Role Create",
    withBackground: true
}

const submitCallBack = (response: RoleCreateResponse) => {
    console.log(response);
}
const submitFunc = async (_req: RoleCreateRequest): Promise<any> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(_req);
        permissions.value = _req
        apiClient.roleCreate
    }

const submitHandler: SubmitHandler<RoleCreateRequest, RoleCreateRequest, RoleCreateResponse> = {
            submit: submitFunc,
            errorHandler : {},
            submitCallBack : submitCallBack
}

</script>
<template>

    <DocSectionText v-bind="$attrs">
        <p>Try using the Permission custom input in a create form</p>
    </DocSectionText>
    <div>
        <form-create  :sections="sectionsss" :submitHandler="submitHandler" :options="options" />
        <h1 class="text-3xl">Values : </h1>
        <p class="text-primary">{{ permissions }}</p>
        <p class="text-md my-3">submit the above form to see the form values after using permissions</p>
    </div>
    <DocSectionCode :code="code" />
</template>