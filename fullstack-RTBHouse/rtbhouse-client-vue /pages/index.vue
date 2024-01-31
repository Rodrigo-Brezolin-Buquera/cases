<template>
  <main>
    <p>oi</p>
    <!-- <Tutorial />  -->
    <Test />
  </main>
</template>

<script>
// const { data } = useFetch('http://localhost:3003/productsData')
export default {
  name: 'IndexPage',
   async getProducts() {
   const { data } = await $fetch('http://localhost:3003/productsData');
    // this.list = data.results;
    console.log(data);
  },
  // data() {
  //   return {
  //     list: null,
  //     loading: false
  //   };
  // },
  // mounted() {
  //   this.loading = false; // You can update the loading state if needed
  // },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
