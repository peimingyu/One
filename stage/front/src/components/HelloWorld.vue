<template>
  <div class="hello">
    <top></top>
    <main>
      <aside>
        <router-view></router-view>
      </aside>
      <section>
        <search></search>
        <article_list></article_list>
      </section>
    </main>
  </div>
</template>

<script>
import header from "./header"
import list from "./list"
import search from "./search"
import article_list from "./article_list"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    top:header,
    side:list,
    search,
    article_list
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
}
main{
  width: 100%;
  display: flex;
}
main aside{
  width: 60%;
  padding:30px;
}
main section{
  flex:1;
  padding:30px;
}
</style>
