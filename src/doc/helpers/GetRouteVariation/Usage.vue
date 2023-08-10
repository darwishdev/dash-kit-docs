<script setup lang="ts">
// import type { FormOptions, SubmitHandler, FormSeciton } from 'vuedashkit/types'

const importCode : any = {
    basic: `import { getRouteVariation } from 'vuedashkit/helpers';`
}
const callFunction : any = {
    basic: `const newRoute = getRouteVariation('currentRoute', 'variation');`
}
const exampleCode : any = {
    basic: `import { getRouteVariation } from 'vuedashkit/helpers';

const currentRoute = 'product_list';
const variation = 'edit';

const newRoute = getRouteVariation(currentRoute, variation);
console.log(newRoute); // Output: "product_edit"`
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ol class="my-2">
            <li>Import the <span class="text-xl text-primary">getRouteVariation </span> function from the vuedashkit/helpers package:</li>
            <DocSectionCode :code="importCode" />
            <li>Call the getRouteVariation function and pass the current route and the desired variation as arguments :</li>
            <DocSectionCode :code="callFunction" />
            <ul class="mb-5">
                <li>Replace <span class="font-bold">'currentRoute'</span> with the actual current route.</li>
                <li>Replace <span class="font-bold">'variation'</span> with the desired variation.</li>
            </ul>
            <li>The function will return a string representing the new route based on the current route and the specified variation.</li>
        </ol>
        <h1 class="mt-5">Example : </h1>
        <p>Here's an example of how you can use the getRouteVariation function to generate a new route based on the current route and a variation:</p>
        <DocSectionCode :code="exampleCode" />

    </DocSectionText>
</template>