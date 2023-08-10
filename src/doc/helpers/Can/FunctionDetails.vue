<script setup>

</script>
<template>
    <div>
        <DocSectionText v-bind="$attrs">
            <ol>
                <li class="my-3 text-xl">The ToPascal function is invoked to convert the provided functionName to Pascal case. So you should keep track 
                    of this naming convention for functions</li>
                <li class="my-3 text-xl">The user's permissions are retrieved from the local storage using localStorage.getItem('permissions') and stored in the 
                    permissions variable.</li>
                <li class="my-3 text-xl">The atob function is used to decode the base64-encoded permissions string obtained from the local storage.</li>
                <li class="my-3 text-xl">The function checks if the decoded permissions string includes the converted functionName or if the converted functionName is equal to 'DashboardView'.</li>
                <li class="my-3 text-xl">The function returns true if the user has permission, and false otherwise.</li>
            </ol>
        </DocSectionText>    
    </div>
</template>