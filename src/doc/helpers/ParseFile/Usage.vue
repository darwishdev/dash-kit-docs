<script setup lang="ts">
// import type { FormOptions, SubmitHandler, FormSeciton } from 'vuedashkit/types'

const importCode : any = {
    basic: `import { ParseFile } from 'vuedashkit/helpers';`
}
const callFunction : any = {
    basic: `const parsedData = ParseFile(fileContent, fileType);`
}
const exampleCode : any = {
    basic: `import { ParseFile } from 'vuedashkit/helpers';
    
const fileInstace = files[0].file // replace with the file entered by the user that you want to parse 
const extension = fileInstace.name.split('.').pop().toLowerCase(); // Type of the file (csv, xlsx, or xls)
const fileContent = await fileInstace.arrayBuffer(); // // Content of the file to be parsed
const parsedData = ParseFile(fileContent, extension)
console.log(parsedData); // Output: Array of parsed data`
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ol class="my-2">
            <li>Import the <span class="text-xl text-primary">ParseFile </span> function from the vuedashkit/helpers package:</li>
            <DocSectionCode :code="importCode" />
            <li>Call the ParseFile function and pass the file content and the file type as arguments:</li>
            <DocSectionCode :code="callFunction" />
            <ul class="mb-5">
                <li>Replace <span class="font-bold">'fileContent'</span> with the actual content of the file you want to parse.</li>
                <li>Replace <span class="font-bold">'fileType'</span>  with the file type or extension (e.g., 'csv', 'xlsx', or 'xls').</li>
            </ul>
            <li>The function will return an array containing the parsed data.</li>
        </ol>
        <h1 class="mt-5">Example : </h1>
        <p>Here's an example of how you can use the ParseFile function to parse a file based on its type:</p>
        <DocSectionCode :code="exampleCode" />

    </DocSectionText>
</template>