<template>
    <div class="header">
        <div class="routerlinks">
            <nav class="navbar navbar-expand-lg bg-white w-100">
                <div class="container-fluid">
                   <router-link class="navbar-brand links" to="/">Insane Footwear</router-link>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                         <li class="nav-item">
                            <router-link class="nav-link links" to="/items">Products</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links" to="/about">About</router-link>
                         </li>
                         <li class="nav-item">
                            <router-link class="nav-link links" to="/admin">Admin</router-link>
                         </li>
                      </ul>
                      <div class="cart">
                          <button type="button" class="btn btn-primary bg-white border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img width="20" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/></button>
                      </div>
                   </div>
                </div>
            </nav>
        </div>
    </div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-black" id="staticBackdropLabel">Shopping Cart</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table id="cart-items">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody id="body"></tbody>
        </table>
      </div>
      <div class="modal-footer">
        <div class="totalPrice">
          <p id="total">Total:</p>
        </div>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
.header {
  font-family: montserrat;
}
   .navbar-nav {
    padding-right: 10% !important;
   }
   .modal-content {
    border-radius: 0px !important;
    box-shadow: 0.1rem 0.1rem black;
   }
   .nav-link:hover {
    font-weight: bold !important;
   }
   template {
    scroll-behavior: smooth;
   }
</style>