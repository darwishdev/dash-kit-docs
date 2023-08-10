<script setup>

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ul>
            <li class="my-2"> <span class="text-2xl text-primary">content (required)</span> : The content of the file to be parsed.
            </li>
            <li class="my-2"> <span class="text-2xl text-primary">type (required)</span> : A string representing the file extension or type. It should be one of the following options: 'csv', 'xlsx', or 'xls'.
            </li>
        </ul>
    </DocSectionText>
</template>