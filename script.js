// Global Variables
//const userName = prompt("What's your name?: ");
const cardContainer = document.querySelector('.cards-container');

// Get the lasts 10 shirts created by the users
function getAllShirts() {
    const data = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    data.then(response => {
        response = response.data
        
        for(i = 0; i < response.length; i++) {
            console.log(response[i])
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

// Run All Functions
getAllShirts()