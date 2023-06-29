<template>
    <div v-if="item" class="item-details d-flex justify-content-center flex-wrap">
        <img :src="item.image" :alt="item.name">
        <div class="single text-center mx-5">
            <h2 class="fs-4 text-center">{{ item.name }}</h2>
            <p class="fs-5 text-center text-wrap">Description: {{ item.desc }}</p>
            <p class="fs-6 text-center">Price: R {{ item.price }}</p>
            <!-- <button class="button" @click="">Add To Cart</button> -->
        </div>
    </div>
</template>
<script>
export default {
    props: ["id"],
    computed: {
        item() {
            return this.$store.state.item
        }
    },
    created() {
        this.$store.dispatch("getItem", this.id)
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
 .item-details {
    font-family: montserrat;
 }
 .item-details img {
    width: 400px;
 }
   .button {
    width: 150px;
    height: 50px;
    color: white;
    border: none;
    padding: 5px;
    background-color: black;
    font-weight: bold;
  }
  .single {
    padding-block: 10rem;
  }
  @media screen and (max-width: 813px) {
    .single {
    padding-block: 0;
  }
  }
</style>
