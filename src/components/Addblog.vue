<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submit">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div class="checkbox">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.Arr">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.Arr">
        <label>Html5</label>
        <input type="checkbox" value="Html5" v-model="blog.Arr">
        <label>Css3</label>
        <input type="checkbox" value="Css3" v-model="blog.Arr">
      </div>
      <label>作者：</label>
      <!-- <select v-model="blog.author">
        <option v-for="author in authors" :key="author.id">{{author}}</option>
      </select> -->
        <input type="text" v-model="blog.author" required>
      <div class="button" v-on:click.prevent="post">
        <div id="d2"></div>
        <div id="d4"></div>添加博客
        <div id="d3"></div>
        <div id="d5"></div>
      </div>
    </form>

    <div v-if="submit">
      <h3>你的博客发送成功</h3>
    </div>
    <div class="preview">
      <h3>博客总览</h3>
      <p>博客标题{{blog.title}}</p>
      <p>博客内容</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="Ar in blog.Arr" :key="Ar.id">{{Ar}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>
<script>
//http://jsonplaceholder.typicode.com/
//http://jsonplaceholder.typicode.com/posts
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        author: "",
        Arr: []
      },
      // authors: ["老王", "asss", "wwww"],
      
      submit: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(function(data) {
          console.log(data);
          this.submit = true;
        });
    }
  }
};
</script>
<style scoped>
* {
  background: radial-gradient(circle, #cddc39, #8bc34a);
}
h2 {
  color: rgb(112, 96, 170);
}
.add-blog * {
  box-sizing: border-box;
}
.add-blog {
  margin: auto;
  max-width:800px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
  color: rgb(52, 29, 155);
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgb(74, 129, 212);
  padding: 5px;
  border-radius: 10px;
  font-size: 14;
}

.checkbox label {
  margin-top: 0;
  display: inline-block;
  color: rgb(52, 29, 155);
}
.checkbox input {
  display: inline-block;
  padding-right: 10px;
}
textarea {
  height: 200px;
}
/* .button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer
} */
.preview {
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 30px 0;
}
h3,
p {
  margin-top: 10px;
  color: rgb(52, 29, 155);
}
.button {
  width: 100px;
  height: 50px;
  background: dodgerblue;
  transition: 1s all linear;
  text-align: center;
  line-height: 50px;
  margin: 100px auto;
  color: white;
  position: relative;
  font-size: 16px;
  font-weight: bold;
}
#d2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 10px;
  transition: 1s;
}
#d3 {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 10px;
  transition: 1s;
}
#d4 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 10px;
  height: 0;
  transition: 1s 1s;
}
#d5 {
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 0;
  transition: 1s 1s;
}
.button:hover {
  background: transparent;
  color: dodgerblue;
}
.button:hover #d2,
.button:hover #d3 {
  width: 100px;
  background: dodgerblue;
}
.button:hover #d4,
.button:hover #d5 {
  background: dodgerblue;
  height: 50px;
}
</style>
