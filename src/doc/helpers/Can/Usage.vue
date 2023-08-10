<script setup lang="ts">

const importCode : any = {
    basic: `import { Can } from 'vuedashkit/helpers';`
}

const callCanFunction : any = {
    basic: `const hasPermission = Can('functionName');`
}
const exampleCode : any = {
    basic: `
import { Can } from 'vuedashkit/helpers';

// Check if the user has permission to invoke the function 'roleCreate'
const hasPermission = Can('createPost');

if (hasPermission) {
  // User can invoke 'roleCreate' function
  console.log('User has permission to create a role');
} else {
  // User does not have permission
  console.log('User does not have permission to create a role');
}
    `
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ol>
            <li>Import the <span class="text-xl text-primary">Can</span> function from the vuedashkit/helpers package:</li>
            <DocSectionCode :code="importCode" />
            <li>Call the Can function and pass the name of the function or action you want to check as an argument:
            </li>
            <DocSectionCode :code="callCanFunction" />
            <p class="mb-5">Replace 'functionName' with the actual name of the function or action you want to check.</p>
            <li class="mt-2">The function will return a boolean value indicating whether the user has permission to perform the specified function or action.</li>
        </ol>
        <h1 class="mt-5">Example :</h1>
        <p>Here's an example of how you can use the Can function to check if a user has permission to invoke a specific function:</p>
        <DocSectionCode :code="exampleCode" />
    </DocSectionText>
</template>