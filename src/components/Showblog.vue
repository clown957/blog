<template>
  <div id="show-blog" v-theme="'narrow'" v-backcol>
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteblog" class="single-blog" :key="blog.id">
      <router-link :to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.body | snip}}</article>
    </div>
  </div>
</template>
<script>
export default {
  name: "show-blog",
  data() {
    return {
      search: "",
      blogs: []
    };
  },
  created() {
    this.$http.get("./../static/posts.json").then(function(data) {
      this.blogs = data.body.slice(0, 10);
    });
  },
  computed: {
    filteblog: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
</script>
<style scope>
#show-blog {
  max-width: 800px;
  margin: 0 auto;

}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #ccc;
  border: 1px dotted #aaa
}
#show-blog a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box
}
</style>

