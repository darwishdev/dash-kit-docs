<script setup>

</script>
<template>
    <div>
        <DocSectionText v-bind="$attrs">
            <ol>
                <li class="my-3 text-xl">The function creates a parseMapper object that maps file types (extensions) to their respective parse functions.</li>
                <li class="my-3 text-xl">The parseMapper object includes the following mappings</li>
                <ul>
                    <li>
                        ' csv ' maps to the <span class="font-bold">parseCSV</span> function.
                    </li>
                    <li>' xlsx ' maps to the <span class="font-bold">parseExcel</span> function.</li>
                    <li>' xls ' maps to the <span class="font-bold">parseExcel</span> function.</li>
                </ul>
                <li class="my-3 text-xl">The appropriate parse function is selected based on the type parameter provided.</li>
                <li class="my-3 text-xl">The selected parse function is then invoked with the content parameter passed as an argument.</li>
                <li class="my-3 text-xl">The parsed data is returned as an array.</li>
            </ol>
        </DocSectionText>    
    </div>
</template>