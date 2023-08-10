<!-- <script setup>

</script>
<template>
    <div>
        <DocSectionText v-bind="$attrs">
            <ol>
                <li class="my-3 text-xl">The function checks if the user is navigating to a route other than the login page <span class="font-bold">(to.name != 'login').</span></li>
                <li class="my-3 text-xl">If the user is not authenticated (no token is stored in the local storage), the function removes any stored permissions and sidebar data, and then redirects the user to the login page <span class="font-bold">(next({ name: 'login' }))</span>.</li>
                <li class="my-3 text-xl">If the user is authenticated, the function checks if the user has permission to access the requested route using the <RouterLink to="/helpers/can/#Usage" class="text-2xl underline">Can</RouterLink> function.</li>
                <li class="my-3 text-xl">If the user does not have permission to access the route and the requested route is not the unauthorized page
                    <span class="font-bold">(to.name != 'unauthorized')</span> or the login page <span class="font-bold">(to.name != 'login')</span>, the function redirects the user to the 
                    unauthorized page <span class="font-bold">(next({ name: 'unauthorized' }))</span>.</li>
                <li class="my-3 text-xl">If the user is authenticated and has permission to access the requested route, the function 
                    proceeds with the navigation  <span class="font-bold">(next())</span></li>
            </ol>
        </DocSectionText>    
    </div>
</template> -->