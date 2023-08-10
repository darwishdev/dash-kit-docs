<script setup>

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ul>
            <li class="my-4"> <span class="text-2xl text-primary">Data (required)</span> : An array of data that needs to be exported to CSV. The data can be of any type, as it is
                 specified as unknown[].
            </li>
            <li> <span class="text-2xl text-primary">FileName (optional)</span> : A string that represents the desired file name for the exported CSV file. The default value is 'data'.
            </li>
        </ul>
    </DocSectionText>
</template>