//accessing buttons and elements
const buttons = document.getElementsByTagName('button');
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('extra-memry');
const storageCost = document.getElementById('extra-strg');
const deliveryCost = document.getElementById('dlvry-cst');
const promoCode = document.getElementById('promo-code');
const totalPrices = document.getElementsByClassName('total-price');
const applyPromo = document.getElementById('apply-promo')


//calculating total price
function calculateTotalPrice() {
    const total = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);

    for (let totalPrice of totalPrices) {
        totalPrice.innerText = total;
    }
}

function applyPromoCode() {
    const discountTotalPrice = document.getElementById('discount-total-price')

    const previousTotal = parseFloat(discountTotalPrice.innerText)
    const discount = previousTotal * 0.2;
    discountTotalPrice.innerText = previousTotal - discount;
    promoCode.value = '';

}

//button click events
for (let button of buttons) {
    button.addEventListener('click', (event) => {
        const clickedButton = event.target.innerText;

        //memory
        if (clickedButton == '8GB Unified Memory') {
            memoryCost.innerText = 0;
            calculateTotalPrice();
        }

        else if (clickedButton == '16GB Unified Memory') {
            memoryCost.innerText = 180;
            calculateTotalPrice();
        }

        //storage
        else if (clickedButton == '256GB SSD storage') {
            storageCost.innerText = 0;
            calculateTotalPrice();
        }

        else if (clickedButton == '512GB SSD storage') {
            storageCost.innerText = 150;
            calculateTotalPrice();
        }

        else if (clickedButton == '1TB SSD storage') {
            storageCost.innerText = 180;
            calculateTotalPrice();
        }

        //Delivery
        else if (clickedButton == 'Friday, Aug 25 Free Prime Delivery') {
            deliveryCost.innerText = 0;
            calculateTotalPrice();

        }
        else if (clickedButton == 'Friday, Aug 21 Delivery Charge $20') {
            deliveryCost.innerText = 20;
            calculateTotalPrice();
        }

        //promo code
        else {
            if (promoCode.value == 'stevekaku') {
                applyPromoCode();
                applyPromo.disabled = true;
            }
        }
    })
}
