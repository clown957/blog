<template>
  <div id="app">
    <!-- <show-blog>hhh</show-blog>

    <add-blog></add-blog> -->
    <blog-header></blog-header>
    <router-view></router-view>
    
  </div>
</template>

<script>

import Addblog from './components/Addblog'
import Showblog from './components/Showblog'
import BlogHeader from './components/BlogHeader'
import Person from './components/Person'


export default {
  name: 'App',

methods: {
 
},
components:{
 "add-blog": Addblog,
 "show-blog":Showblog,
 "person":Person,
 "blog-header":BlogHeader

}
}
</script>

<style scope>
   
</style>
