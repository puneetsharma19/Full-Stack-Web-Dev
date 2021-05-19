
function fetchProducts(done){
    $.get('/api/products', function(data){
        done(data)
    })
}

function createProductCard(product){
    return $(`<div class="card col-xs-9 m-2">
    <div class="card-body p-3" >
    <h5 id="product-name" class="card-title text-center">${product.name}</h5>
    <p id="product-manufacturer" class="text-center">${product.manufacturer}</p>
    <div class="row">
        <div class=" text-center col-lg-6"><b>Price: ${product.price}</b></div>
        <button class="btn btn-primary col-lg-6">Buy</button>
    </div>
    </div>
</div>`)
}

$(function(){

    let productList = $('#product-list')
    fetchProducts(function(products){
        productList.empty()
        for(product of products){
            productList.append(createProductCard(product))
        }
    })

})



