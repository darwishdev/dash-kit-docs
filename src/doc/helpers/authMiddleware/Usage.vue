<script setup lang="ts">
const importCode : any = {
    basic: `import { authMiddleware } from 'vuedashkit/helpers';`
}
const registerMiddleWare : any = {
    basic: `const router = createRouter({
  // Router configuration
});

router.beforeEach(authMiddleware);`
}


</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ol>
            <li>Import the <span class="text-xl text-primary">authMiddleware</span> function from the vuedashkit/helpers package:</li>
            <DocSectionCode :code="importCode" />
            <li>Register the authMiddleware function as a global navigation guard in your router configuration:</li>
            <DocSectionCode :code="registerMiddleWare" />
            <p class="mb-5">By using <span class="font-bold">router.beforeEach</span>, the authMiddleware function will be executed before each route navigation.</p>
        </ol>
    </DocSectionText>
</template>