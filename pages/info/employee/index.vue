<template>
  <div>
    <SearchBar/>
    <List/>
  </div>
</template>

<script>
  import List from './components/list'
  import SearchBar from './components/searchBar'

  export default {
    name: "index",
    components: {
      List,
      SearchBar
    }
  }
</script>

<style scoped>

</style>
