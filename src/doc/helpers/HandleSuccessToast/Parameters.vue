<script setup>

</script>
<template>
    <DocSectionText v-bind="$attrs">
        <ul>
            <li class="my-2"> <span class="text-2xl text-primary">handler (optional)</span> : An object of type <span class="font-bold">ToastHandler</span> that allows
                 customization of the toast message. It can contain the following properties:
                 <ul class="my-3">
                    <li class="my-2"> <span class="text-white text-primary">hideToast (optional) : </span>A boolean indicating whether the 
                        toast should be hidden. If set to true, the toast message will not be displayed.</li>
                    <li class="my-2"> <span class="text-white text-primary">title (optional) : </span>A string representing the custom title for
                         the toast message. If provided, it will override the default title.</li>
                    <li class="my-2"> <span class="text-white text-primary">message (optional) : </span>A string representing the custom message
                         for the toast. If provided, it will override the default message</li>
                 </ul>
            </li>
            <li class="my-2"> <span class="text-2xl text-primary">toast (required):</span>An object of type ToastServiceMethods from the PrimeVue package.
                 It provides methods to add toast messages.
            </li>
            <li class="my-2"> <span class="text-2xl text-primary">t (required):</span>A translation function used to translate the toast title and message.
            </li>
            <li class="my-2"> <span class="text-2xl text-primary">title (required):</span>A string representing the default title for the toast.
            </li>
        </ul>
    </DocSectionText>
</template>