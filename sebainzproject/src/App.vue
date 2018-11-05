<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navbar></Navbar>
    <div class="jumbotron">
    <router-view/>
    <foot></foot>

    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import foot from './components/Footer'
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    Navbar,
    foot
  }
}

</script>

<style>
.searchbox {

}
</style>
