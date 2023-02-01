fetch('actors.json')
.then(response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response.json();
})
.then(data => {
    // we have the data 
    console.log(data); 
    handleData(data);
})
.catch (e => {
    // something went wrong
    console.error("An error has occured.", e.message);
})

// FUNCTION 

function handleData(data){
    
    
    data.forEach(actor => {

        // make template

        // grab it

         // add data only if the type of the element's category is "BRACELET"

            let actorsTemplate = document.querySelector('.actors-template').content;

            // clone it

            let actorsClone = actorsTemplate.cloneNode(true);


            // add the name of the actor

            actorsClone.querySelector('h2').textContent = actor.fullname; 
            
            // add the movie

            actorsClone.querySelector('p').textContent = actor.movie; 

            let uniqueA = actorsClone.querySelector('h2');

            let movieName = actorsClone.querySelector('p');
            
            uniqueA.addEventListener('click', () => {
                movieName.style.opacity = 1;
            })

            uniqueA.addEventListener('mouseout', () => {
                movieName.style.opacity = 0;
            })


            // append to parent

            let actorDaddy = document.querySelector(".actor-parent");

            actorDaddy.appendChild(actorsClone);

        
    }) 
}


