var objProduct = {
    photo: "pics/nissan.png",
    product: "NISSAN TORRANO",
    article: "654729",
    price: "750000",
    description: "Штурмуйте бездорожье, отправляйтесь за покупками или в дальнее путешествие — NISSAN TERRANO выполнит любые задачи эффективно и с комфортом для всех пассажиров.",
            
    createProduct: function(product){
            
    var productCard = document.getElementById(product);
        
        //Картинка товара
        var img = document.createElement('img');
        img.setAttribute('src', this.photo);
        img.setAttribute('alt', this.name);
        img.style.width = '280px';
        img.style.margin = "0 auto";

        //Наименование товара
        var name = document.createElement('h4');
        name.innerText = 'Наименование: ';
        var name_product = document.createElement('span');
        name_product.innerText = this.product;
        name.appendChild(name_product);

        //Артикул товара
        var article = document.createElement('p');
        article.innerText = 'Артикул: ';
        var article_product = document.createElement('span');
        article_product.innerText = this.article;
        article.appendChild(article_product);

        //Цена товара
        var price = document.createElement('p');
        price.innerText = 'Цена:  ';
        var price_product = document.createElement('span');
        price_product.innerText = this.article;
        price.appendChild(price_product);

        //Описание товара
        var descr = document.createElement('p');
        descr.innerText = 'Характеристика:  ';
        
        var descr_product = document.createElement('span');
        descr_product.innerText = this.description;
        
        descr.appendChild(descr_product);
            
        productCard.appendChild(img);
        productCard.appendChild(name);
        productCard.appendChild(article);
        productCard.appendChild(price);
        productCard.appendChild(descr);
    }
}

objProduct.createProduct('car_torrano');