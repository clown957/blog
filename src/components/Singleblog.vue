<template>
    <div id="singleblog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>
<script>
export default{
    name:"singleblog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{

            }
        }
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
           this.blog=data.body
        })

        
    }
}
</script>
<style scoped>
#singleblog{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px solid #aaa
}
</style>
