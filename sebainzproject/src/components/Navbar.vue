<template>
    <div id="navbar">
<nav class="navbar navbar-dark bg-dark">
    <router-link :to="{ name: 'home'}">
        <span class="navbar-brand">Games Library</span>
        </router-link>
    <router-link :to="{ name: 'new-game'}">
        <span class="navbar-brand">Add New</span>
        </router-link>
  <a class="navbar-brand" href="/">Navbar</a>
</nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
