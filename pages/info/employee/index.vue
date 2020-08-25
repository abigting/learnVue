<template>
  <div>
    <SearchBar/>
    <List/>
    <Detail/>
  </div>
</template>

<script>
  import List from './components/list'
  import SearchBar from './components/searchBar'
  import Detail from './components/detail'

  export default {
    name: "index",
    components: {
      List,
      SearchBar,
      Detail
    }
  }
</script>

<style scoped>

</style>
