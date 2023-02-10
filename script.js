// Global Variables
//const userName = prompt("What's your name?: ");
const cardContainer = document.querySelector('.cards-container');
const cart = {
    model: null,
    neck: null,
    tissue: null
}

// Let the user buy the shirt
function buyShirt(shirt) {
    addCart(shirt);
    console.log(cart);
}

// Add the shirt to the cart
function addCart(element) {
    //Verify if the selected shirt is the model, the neck or the tissue
    
    // Model
    if(element.classList.contains('model')) {
        console.log(element)
        if(cart.model === null) {
            cart.model = element;
            addStyle(cart.model)
        } else {
            if(element != cart.model) {
                addStyle(cart.model);
                cart.model = element;
                addStyle(cart.model);
            }
        }
    // Neck
    } else if(element.classList.contains('neck')) {
        if(cart.neck === null) {
            cart.neck = element;
            addStyle(cart.neck)
        } else {
            if(element != cart.neck) {
                addStyle(cart.neck);
                cart.neck = element;
                addStyle(cart.neck);
            }
        }
    // Tissue
    } else {
        if(cart.tissue === null) {
            cart.tissue = element;
            addStyle(cart.tissue)
        } else {
            if(element!= cart.tissue) {
                addStyle(cart.tissue);
                cart.tissue = element;
                addStyle(cart.tissue);
            }
        }
    }
}

// Get the lasts 10 shirts created by the users
function getAllShirts() {
    const data = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    data.then(response => {
        response = response.data
        
        for(i = 0; i < response.length; i++) {
            cardContainer.innerHTML += `
            <div class="card">
                    <div class="img-card-container">
                        <img src="${response[i].image}" alt="Blusa">
                    </div>

                    <div class="owner-container">
                        <span><strong>Criador:</strong> ${response[i].owner}</span>
                    </div>
            </div>
            `
        }

    })
    data.catch(error => {
        console.log(error)
    }) 
}

// Add the selected style to the shirt
function addStyle(element) {
    element.children[0].classList.toggle('selected');
}


// Run All Functions
getAllShirts()
