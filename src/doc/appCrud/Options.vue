<script setup lang="ts">
import type { CrudOptions } from 'vuedashkit/types'
// import type { RoleCreateRequest, RoleCreateResponse } from '@/api/ApiTypes'
// import apiClient from '@/api/ApiMock';

const code: any = {
    basic: `
<script setup lang="ts">
import type { CrudOptions } from 'vuedashkit/types'

// replace with the crud options you want
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
        <app-crud :options="options"></app-crud>
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

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>Try using AppCrud component using basic crud options by passing the options prop to the component</p>
    </DocSectionText>
    <div>
        <app-crud :options="options"></app-crud>
    </div>
    <DocSectionCode :code="code" />
</template>