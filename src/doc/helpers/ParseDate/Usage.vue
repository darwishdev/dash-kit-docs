<script setup lang="ts">
// import type { FormOptions, SubmitHandler, FormSeciton } from 'vuedashkit/types'

const importCode : any = {
    basic: `import { parseDate } from 'vuedashkit/helpers';`
}
const callFunction : any = {
    basic: `const formattedDate = parseDate(dateString);`
}
const exampleCode : any = {
    basic: `import { parseDate } from 'vuedashkit/helpers';
    
const dateString = '2023-08-10T12:34:56Z';

const formattedDate = parseDate(dateString);
console.log(formattedDate); // Output: "August 10, 2023, 3:34:56 PM"`
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ol class="my-2">
            <li>Import the <span class="text-xl text-primary">parseDate </span> function from the vuedashkit/helpers package:</li>
            <DocSectionCode :code="importCode" />
            <li>Call the parseDate function and pass the date string as an argument:</li>
            <DocSectionCode :code="callFunction" />
            <ul class="mb-5">
                <li>Replace <span class="font-bold">'dateString'</span> with the actual date string you want to parse.</li>
            </ul>
            <li>The function will return a string representing the parsed and formatted date according to the specified options.</li>
        </ol>
        <h1 class="mt-5">Example : </h1>
        <p>Here's an example of how you can use the ParseFile function to parse a file based on its type:</p>
        <DocSectionCode :code="exampleCode" />
        <p>In this example, the parseDate function is called with the dateString set to '2023-08-10T12:34:56Z'. 
        The function creates a Date object based on the date string and formats it using the specified options. The formatted date is then stored in the formattedDate variable and logged to the console.</p>

    </DocSectionText>
</template>