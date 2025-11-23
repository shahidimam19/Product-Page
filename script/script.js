const productTitle = document.querySelector('.product-details h1')
const s_Price = document.querySelector('.new-price')
const productCatg = document.querySelector('.product-details p')
const mr_Price = document.querySelector('.old-price')
const colorSection = document.querySelector('.color-section')
const mainImg = document.querySelector('.mainImg img')
const scndImg = document.querySelector('.secondaryImg')
const recommendation = document.querySelector('.recommendation')



// -----------------------------------Products Data----------------------------------------
const products = [
    {
        productName: "T-shirt",
        productHeading: "Men Regular Fit Self Design Round Neck Casual Tshirt",
        sellingPrice: "₹999",
        mrp: "₹1,499",
        sizeChart: "#",
        colorOptions: {
            Blue: [
                "/img/Tshirt/Blue/1.jpg",
                "/img/Tshirt/Blue/2.jpg",
                "/img/Tshirt/Blue/3.jpg",
                "/img/Tshirt/Blue/4.jpg",
                "/img/Tshirt/Blue/5.jpg"
            ],
            Red: [
                "/img/Tshirt/Red/1.jpg",
                "/img/Tshirt/Red/2.jpg",
                "/img/Tshirt/Red/3.jpg",
                "/img/Tshirt/Red/4.jpg",
                "/img/Tshirt/Red/5.jpg"
            ],
            P_Blue: [
                "/img/Tshirt/P_Blue/1.jpg",
                "/img/Tshirt/P_Blue/2.jpg",
                "/img/Tshirt/P_Blue/3.jpg",
                "/img/Tshirt/P_Blue/4.jpg",
                "/img/Tshirt/P_Blue/5.jpg"
            ],
            Green: [
                "/img/Tshirt/Green/1.jpg",
                "/img/Tshirt/Green/2.jpg",
                "/img/Tshirt/Green/3.jpg",
                "/img/Tshirt/Green/4.jpg",
                "/img/Tshirt/Green/5.jpg"
            ],
            Black: [
                "/img/Tshirt/Black/1.jpg",
                "/img/Tshirt/Black/2.jpg",
                "/img/Tshirt/Black/3.jpg",
                "/img/Tshirt/Black/4.jpg",
                "/img/Tshirt/Black/5.jpg"
            ]
        }
    },
    {
        productName: "Shirt",
        productHeading: "Men Regular Fit Self Design Solid Plan Casual Shirt",
        sellingPrice: "₹699",
        mrp: "₹1,199",
        sizeChart: "#",
        colorOptions: {
            Aqua: [
                "/img/Shirt/Aqua/1.jpg",
                "/img/Shirt/Aqua/2.jpg",
                "/img/Shirt/Aqua/3.jpg",
                "/img/Shirt/Aqua/4.jpg",
                "/img/Shirt/Aqua/5.jpg"
            ],
            Beige: [
                "/img/Shirt/Beige/1.jpg",
                "/img/Shirt/Beige/2.jpg",
                "/img/Shirt/Beige/3.jpg",
                "/img/Shirt/Beige/4.jpg"
            ],
            Black: [
                "/img/Shirt/Black/1.jpg",
                "/img/Shirt/Black/2.jpg",
                "/img/Shirt/Black/3.jpg",
                "/img/Shirt/Black/4.jpg",
                "/img/Shirt/Black/5.jpg"
            ],
            Green: [
                "/img/Shirt/Green/1.jpg",
                "/img/Shirt/Green/2.jpg",
                "/img/Shirt/Green/3.jpg",
                "/img/Shirt/Green/4.jpg"
            ],
            Maroon: [
                "/img/Shirt/Maroon/1.jpg",
                "/img/Shirt/Maroon/2.jpg",
                "/img/Shirt/Maroon/3.jpg",
                "/img/Shirt/Maroon/4.jpg",
                "/img/Shirt/Maroon/5.jpg"
            ],
            Teal: [
                "/img/Shirt/Teal/1.jpg",
                "/img/Shirt/Teal/2.jpg",
                "/img/Shirt/Teal/3.jpg",
                "/img/Shirt/Teal/4.jpg",
                "/img/Shirt/Teal/5.jpg"
            ]
        }
    }
];



// -------------------------------Color Option Update-----------------------------------


function selectProduct(prdctName = '0', color = 'Blue') {

    const selectedProduct = `${products[prdctName].productName}`
    const selectedColor = products[prdctName].colorOptions[color]



    // ------------------------------PRODUCT IMAGES-------------------------------------

    mainImg.src = `${products[prdctName].colorOptions[color][0]}`
    scndImg.innerHTML = ""
    selectedColor.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc
        scndImg.appendChild(img)
        img.addEventListener("click", () => {
            mainImg.src = imgSrc;

        })
    });




    // ---------------------------------PRODUCT DETAILS-----------------------------------

    productCatg.textContent = `Home/${selectedProduct}`
    productTitle.textContent = `${products[prdctName].productHeading}`
    s_Price.textContent = `${products[prdctName].sellingPrice}`
    mr_Price.textContent = `${products[prdctName].mrp}`;
    const colorOpt = products[prdctName].colorOptions;
    // console.log(colorOpt)
    colorSection.innerHTML = "";
    for (let key in colorOpt) {
        // console.log(key)
        const clrOpt = document.createElement("div")
        clrOpt.className = "color"
        const colorName = document.createElement("p")
        colorName.textContent = key;
        colorName.className = "color-name";
        const clrOptImg = document.createElement("img")
        clrOptImg.src = colorOpt[key][0];
        clrOpt.appendChild(colorName)
        clrOpt.appendChild(clrOptImg)
        colorSection.appendChild(clrOpt)
        clrOpt.addEventListener('click', () => {
            selectProduct(prdctName, key);
        });


    }

}


// ---------------------------COLOR OPTION SELECTION-------------------------



// selectProduct('0', 'Red')
// selectProduct('0', 'Black')
// selectProduct('1', 'Green')
// selectProduct('1', 'Teal')
// selectProduct('1', 'Maroon')
selectProduct()


// -----------------------------------Recommendade Product----------------------------


function recommendedPrdct() {
    products.forEach((product, index) => {
        console.log(product)
        const recomendItem = document.createElement('div')
        recomendItem.className = 'rec-product';
        const rItemImg = document.createElement('img')
        const firstKey = Object.keys(product.colorOptions)[0]; 
        rItemImg.src = product.colorOptions[firstKey][0];
        const rItemTitle = document.createElement('h6')
        rItemTitle.textContent = product.productHeading;
        const rItemPrice = document.createElement('h5')
        rItemPrice.textContent = product.sellingPrice;
        recomendItem.appendChild(rItemImg);
        recomendItem.appendChild(rItemTitle);
        recomendItem.appendChild(rItemPrice);
        recommendation.appendChild(recomendItem);
        recomendItem.addEventListener('click', (e) => {
            const firstColor = Object.keys(product.colorOptions)[0]; 
            selectProduct(index, firstColor); 

        });



    })
}

recommendedPrdct()