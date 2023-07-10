<template>
    <div class="cart-product">
        <img :src="item.image" :alt="item.name">
        <div>
            <h4>{{ item.name }}</h4>
            <div>
                <button @click="() => updateQuantity(item.quantity - 1)">-</button>
                <p>{{ item.quantity }}</p>
                <button @click="() => updateQuantity(item.quantity + 1)">+</button>
            </div>
            <p class="total-price"></p>
        </div>
        <button @click="removeItem">Remove</button>
    </div>
</template>
<script>
export default {
    name: 'CartComp',
    props: ['item'],
    methods: {
        // @param {number} quantity
        updateQuantity(quantity) {
            if (quantity < 1) {
                return this.removeItem();
            }
            this.$emit('update-quantity', this.item.id, quantity );
        },
        removeItem() {
            this.$emit('remove-item', this.item.id);
        }
    },
}
</script>