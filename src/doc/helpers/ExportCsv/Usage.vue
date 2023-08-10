<script setup lang="ts">
// import type { FormOptions, SubmitHandler, FormSeciton } from 'vuedashkit/types'
import type { RolesListRequest, RolesListResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDataFetcherList } from 'vuedashkit/composables';
import { ExportCSV } from "vuedashkit/helpers";
const { responseData, loading } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);

import { watch } from 'vue';

let dataToExport : unknown[]

watch(responseData, () => {
    dataToExport = responseData.value!.roles
})

const importCode : any = {
    basic: `import { ExportCSV } from "vuedashkit/helpers";`
}
const dataToExportCode : any = {
    basic: `const dataToExport = responseData.value!.roles as unknown[];`
}
const callExportCsv : any = {
    basic: `ExportCSV(dataToExport);`
}
const exportCsvv = () => {
    ExportCSV(dataToExport,'Roles_Data')
}
const exampleCode : any = {
    basic: `
    <script setup lang="ts">
    import type { RolesListRequest, RolesListResponse } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { useDataFetcherList } from 'vuedashkit/composables';
import { ExportCSV } from "vuedashkit/helpers";
const { responseData, loading } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);

import { watch } from 'vue';

let dataToExport : unknown[]

watch(responseData, () => {
    dataToExport = responseData.value!.roles
})
const exportCsvv = () => {
    ExportCSV(dataToExport,'Roles_Data')
}
<\/script>
<template>
    <div v-if="loading">
        <h1 class="text-center">loading ...</h1>
    </div>
    <div v-else class="text-center m-auto w-full my-5">
        <button class="p-3 border-round bg-primary text-white cursor-pointer" @click="exportCsvv">Click to export</button>
    </div>
<\/template>

    `
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ol>
            <li>Import the <span class="text-xl text-primary">ExportCSV</span> function from the vuedashkit/helpers package:</li>
            <DocSectionCode :code="importCode" />
            <li>Prepare the data that you want to export as a CSV. Assuming the data is stored in a variable named dataToExport : </li>
            <DocSectionCode :code="dataToExportCode" />
            <li>Call the ExportCSV function and pass the data as an argument. Optionally, you can provide a custom file name as the second argument:
            </li>
            <DocSectionCode :code="callExportCsv" />
        </ol>
        <h1 class="mt-5">Example :</h1>
        <div v-if="loading">
            <h1 class="text-center">loading ...</h1>
        </div>
        <div v-else class="text-center m-auto w-full my-5">
            <button class="p-3 border-round bg-primary text-white cursor-pointer" @click="exportCsvv">Click to export</button>
        </div>
    </DocSectionText>
    <DocSectionCode :code="exampleCode" />
</template>