<script setup>

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ul>
            <li class="my-2"> <span class="text-2xl text-primary">to (required)</span> : A <span class="font-bold text-xl">RouteLocationNormalized</span> object representing the route the user is attempting to navigate to.
            </li>
            <li class="my-2"> <span class="text-2xl text-primary">_ (ignored parameter)</span> : This parameter is ignored and can be omitted.
            </li>
            <li class="my-2"> <span class="text-2xl text-primary">next (required)</span> : A <span class="font-bold text-xl">NavigationGuardNext</span> function that should be called to proceed with the navigation or redirect the user.
            </li>
        </ul>
    </DocSectionText>
</template>