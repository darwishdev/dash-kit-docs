<script setup lang="ts">
import type { CrudOptions , ImportHandler } from 'vuedashkit/types'
import type { RoleBulkCreateRequest , RoleBulkCreateResponse ,RolesListRequest, RolesListResponse  } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { ExportCSV } from "vuedashkit/helpers";
import {ref} from 'vue'
import { useDataFetcherList } from "vuedashkit/composables";

const { responseData, fetchData } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);
const showDeletedData = ref(false)

const code: any = {
    basic: `
<script setup lang="ts">
import type { CrudOptions , ImportHandler } from 'vuedashkit/types'
import type { RoleBulkCreateRequest , RoleBulkCreateResponse ,RolesListRequest, RolesListResponse  } from '@/api/ApiTypes'
import apiClient from '@/api/ApiMock';
import { ExportCSV } from "vuedashkit/helpers";
import {ref} from 'vue'
import { useDataFetcherList } from "vuedashkit/composables";

const { responseData, fetchData } = useDataFetcherList<RolesListRequest, RolesListResponse>(apiClient.rolesList, {} as RolesListRequest);
const showDeletedData = ref(false)

const options: CrudOptions = {
  title: "Roles List",
  showCreateButton: true,
  feature: 'role',
  showExportButton: true,
  showDeletedFilter: true,
}

const importHandler: ImportHandler<RoleBulkCreateRequest, RoleBulkCreateResponse> = {
    submit: apiClient.roleBulkCreate,
    importTemplateLink: "https://static.exploremelon.com/mln_rms/import-templates/Roles.xlsx",
}
const dataImported = (data: any) => {
    console.log(data)
    fetchData()
}
const exportData = () => {
    const dataToExport = showDeletedData.value ? responseData.value?.deleteRoles as unknown[] : responseData.value?.roles as unknown[]
    ExportCSV(dataToExport)
}

<\/script>

<template>
    <div>
        <app-crud :options="options" :importHandler="importHandler" @imported="dataImported" @showDeleted="(val: any) => showDeletedData = val"
            @export="exportData"></app-crud>
    </div>
<\/template>

`
}

const options: CrudOptions = {
  title: "Roles List",
  showCreateButton: true,
  feature: 'role',
  showExportButton: true,
  showDeletedFilter: true,
}

const importHandler: ImportHandler<RoleBulkCreateRequest, RoleBulkCreateResponse> = {
    submit: apiClient.roleBulkCreate,
    importTemplateLink: "https://static.exploremelon.com/mln_rms/import-templates/Roles.xlsx",
}
const dataImported = (data: any) => {
    console.log(data)
    fetchData()
}
const exportData = () => {
    const dataToExport = showDeletedData.value ? responseData.value?.deleteRoles as unknown[] : responseData.value?.roles as unknown[]
    ExportCSV(dataToExport)
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using AppCrud component using importHandler and some important events</p>
        <p class="my-3"> Please Notice the usage of events in this example</p>
    </DocSectionText>
    <div>
        <app-crud :options="options" :importHandler="importHandler" @imported="dataImported" @showDeleted="(val: any) => showDeletedData = val"
            @export="exportData"></app-crud>
    </div>
    <DocSectionCode :code="code" />
</template>