<template>
  <div v-if="items" class="prods">
    <ProductComp
      class="comp"
      v-for="item of items"
      :key="item.id"
      :item="item"
    />
  </div>
  <div v-else>Loading</div>
</template>
<script>
import ProductComp from "@/components/ProductComp.vue";
export default {
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  mounted() {
    this.$store.dispatch("getItems");
    console.log(this.item)
  },
  components: { ProductComp },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap");
.prods {
  font-family: montserrat;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: hidden;
}
</style>
