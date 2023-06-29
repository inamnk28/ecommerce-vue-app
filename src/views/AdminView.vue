<template>
        <div class="container justify-content-center">
            <hr>
            <h1 class="display-5 fs-4 text-center">Admin</h1>
            <hr>
        <form action="" class="row justify-content-center" id="productForm">
            <div class="mb-2"><input type="text" name="" id="image" placeholder="Image URL..." required></div>
            <div class="mb-2"><input type="text" id="productName" placeholder="Product Name..." required></div>
            <div class="mb-2"><input type="number" id="productPrice" placeholder="Product Price..." required></div>
            <div class="mb-2"><input type="text" id="productCategory" id="productCategory" placeholder="Category..." required></div>
            <div class="mb-2"><input type="number" id="quantity" placeholder="Enter the quantity..." required></div>
            <div class="mb-2"><button type="submit" id="addToStore">Add to Store</button></div>
        </form>
    </div>
    <table id="product-table">
        <thead>
            <th class="border-1 px-5">Image URL</th>
            <th class="border-1 px-5">Name</th>
            <th class="border-1 px-5">Price</th>
            <th class="border-1 px-5">Category</th>
            <th class="border-1 px-5">Quantity</th>
        </thead>
        <tbody id="productList"></tbody>
    </table>
</template>