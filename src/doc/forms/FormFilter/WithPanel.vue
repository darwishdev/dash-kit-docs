<script setup lang="ts">
import { ref } from 'vue';
import Panel from 'primevue/panel';

const code: any = {
    basic: `<script setup lang="ts">
import { ref } from 'vue';
import Panel from 'primevue/panel';
const filterForm = ref();

const filterModel = ref({})
const modelDisplay = ref({})

const filterFormInputs: any[] = [
    {
        $formkit: 'text',
        outerClass: "col-6",
        name: 'roleName',
        label: 'by rolename',
        placeholder: 'search by rolename',

    },
    {
        $formkit: 'text',
        outerClass: "col-6",
        name: 'roleDescription',
        label: 'by role description',
        placeholder: 'search by role description',
    },
]
const handleFilter = (filterObject: any) => {
    console.log(filterObject);
}
const removeFilter = (filter: string) => {
    filterForm.value.removeFilter(filter)

}
const active = ref(0)
const clearAllFilters = () => {
    active.value = 0
    filterForm.value.clearAllFilters()
}
</s` + `cript>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using FormFilter component</p>
    </DocSectionText>
    <div class="my-3">
        <div>
            <Panel header="Header" toggleable class="flex-grow list-filters">
                <template #header>
                    <div class="flex align-items-center w-full justiy-content-between">
                        <div class="title">
                            <i class="pi pi-filter mr-3"></i>
                            <span>{{ $t('show_filters') }}</span>
                        </div>
                        <div class="clear-icon" @click.prevent="clearAllFilters" v-if="Object.keys(filterModel).length > 0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--color-white)"
                                viewBox="0 0 24 24">
                                <path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                    stroke-width="1.5"
                                    d="M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.709 4.709 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75Zm-3.481 1.24-2.51-2.51m2.491.03-2.51 2.51" />
                                <path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                    stroke-width="1.5"
                                    d="M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02Z"
                                    opacity=".4" />
                            </svg>

                            <span>{{ $t('clear_filters') }}</span>
                        </div>

                    </div>
                </template>
                <form-filter ref="filterForm" v-model="filterModel" v-model:modelDisplay="modelDisplay" :options="{
                    showActiveFilters: false,
                    showClearFilters: false,
                }" @filter="handleFilter" :inputs="filterFormInputs" />
            </Panel>
            <div v-if="modelDisplay" class="active-filters">
                <div class="filter" v-for="(filter, index) in Object.keys(modelDisplay) " :key="index"
                    @click.prevent="removeFilter(filter)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="var(--color-white)"
                        viewBox="0 0 24 24">
                        <path stroke="#464455" stroke-linecap="round" stroke-linejoin="round"
                            d="M18 7h-2m-3.5-2H6c-.471 0-.707 0-.854.146C5 5.293 5 5.53 5 6v1.965c0 .262 0 .393.06.503.058.11.167.184.385.329l3.024 2.015c.872.582 1.308.873 1.544 1.315.237.442.237.966.237 2.014V19l3.5-1.75v-3.11c0-1.047 0-1.571.237-2.013.133-.25.331-.452.636-.686M20 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3 class="" > <strong>{{ $t(modelDisplay[filter].key)}}</strong> : {{
modelDisplay[filter].value }} </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="var(--color-white)"
                        viewBox="0 0 24 24">
                        <path stroke="var(--color-white)" stroke-linecap="round" stroke-width="2" d="m16 8-8 8m0-8 8 8" />
                    </svg>
                </div>
            </div>
        </div>

    </div>
    <DocSectionCode :code="code" />
</template> `
}
const filterForm = ref();

const filterModel = ref({})
const modelDisplay = ref({})

const filterFormInputs: any[] = [
    {
        $formkit: 'text',
        outerClass: "col-6",
        name: 'roleName',
        label: 'by rolename',
        placeholder: 'search by rolename',

    },
    {
        $formkit: 'text',
        outerClass: "col-6",
        name: 'roleDescription',
        label: 'by role description',
        placeholder: 'search by role description',
    },
]
const handleFilter = (filterObject: any) => {
    console.log(filterObject);
}
const removeFilter = (filter: string) => {
    filterForm.value.removeFilter(filter)

}
const active = ref(0)
const clearAllFilters = () => {
    active.value = 0
    filterForm.value.clearAllFilters()
}
</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using FormFilter component</p>
    </DocSectionText>
    <div class="my-3">
        <div>
            <Panel header="Header" toggleable class="flex-grow list-filters">
                <template #header>
                    <div class="flex align-items-center w-full justiy-content-between">
                        <div class="title">
                            <i class="pi pi-filter mr-3"></i>
                            <span>{{ $t('show_filters') }}</span>
                        </div>
                        <div class="clear-icon" @click.prevent="clearAllFilters" v-if="Object.keys(filterModel).length > 0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--color-white)"
                                viewBox="0 0 24 24">
                                <path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                    stroke-width="1.5"
                                    d="M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.709 4.709 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75Zm-3.481 1.24-2.51-2.51m2.491.03-2.51 2.51" />
                                <path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                    stroke-width="1.5"
                                    d="M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02Z"
                                    opacity=".4" />
                            </svg>

                            <span>{{ $t('clear_filters') }}</span>
                        </div>

                    </div>
                </template>
                <form-filter ref="filterForm" v-model="filterModel" v-model:modelDisplay="modelDisplay" :options="{
                    showActiveFilters: false,
                    showClearFilters: false,
                }" @filter="handleFilter" :inputs="filterFormInputs" />
            </Panel>
            <div v-if="modelDisplay" class="active-filters">
                <div class="filter" v-for="(filter, index) in Object.keys(modelDisplay) " :key="index"
                    @click.prevent="removeFilter(filter)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="var(--color-white)"
                        viewBox="0 0 24 24">
                        <path stroke="#464455" stroke-linecap="round" stroke-linejoin="round"
                            d="M18 7h-2m-3.5-2H6c-.471 0-.707 0-.854.146C5 5.293 5 5.53 5 6v1.965c0 .262 0 .393.06.503.058.11.167.184.385.329l3.024 2.015c.872.582 1.308.873 1.544 1.315.237.442.237.966.237 2.014V19l3.5-1.75v-3.11c0-1.047 0-1.571.237-2.013.133-.25.331-.452.636-.686M20 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3 class=""> <strong>{{ $t(`${modelDisplay[filter].key}_filter`) }}</strong> : {{
                        modelDisplay[filter].value }} </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="var(--color-white)"
                        viewBox="0 0 24 24">
                        <path stroke="var(--color-white)" stroke-linecap="round" stroke-width="2" d="m16 8-8 8m0-8 8 8" />
                    </svg>
                </div>
            </div>
        </div>

    </div>
    <DocSectionCode :code="code" />
</template> 