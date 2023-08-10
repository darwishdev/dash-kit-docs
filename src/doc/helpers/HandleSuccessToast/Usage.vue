<script setup lang="ts">
// import type { FormOptions, SubmitHandler, FormSeciton } from 'vuedashkit/types'

const importCode : any = {
    basic: `import { handleSuccessToast } from 'vuedashkit/helpers';`
}
const callFunction : any = {
    basic: `handleSuccessToast(handler, toast, t, title);`
}
const exampleCode : any = {
    basic: `import { handleSuccessToast } from 'vuedashkit/helpers';
import { useToast } from 'primevue/usetoast';

const toastHandler = {
    hideToast: false,
    title: 'Custom Success Title',
    message: 'Custom Success Message',
};
const toast = useToast()
const i18n = inject('i18n') as I18n
const { t } = i18n.global // replace with your translation function
handleSuccessToast(toastHandler, toast, t, 'Default Success Title')`
}

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ol class="my-2">
            <li>Import the <span class="text-xl text-primary">handleSuccessToast </span> function from the vuedashkit/helpers package:</li>
            <DocSectionCode :code="importCode" />
            <li>Call the handleSuccessToast function and pass the required parameters:</li>
            <DocSectionCode :code="callFunction" />
            <ul class="mb-5">
                <li class="my-3">Replace <span class="font-bold mx-2"> handler </span> with an object of type <span class="font-bold">ToastHandler</span> to customize the toast message (optional).
                </li>
                <li class="my-3">Replace <span class="font-bold mx-2"> toast </span> with the <span class="font-bold">ToastServiceMethods</span> object from the PrimeVue package.
                </li>
                <li class="my-3">Replace <span class="font-bold mx-2"> t </span> with the translation function
                </li>
                <li class="my-3">Replace <span class="font-bold mx-2"> title </span> with the default title for the toast.
                </li>
            </ul>
        </ol>
        <h1 class="my-5">Example : </h1>
        <DocSectionCode :code="exampleCode" />
    </DocSectionText>
</template>