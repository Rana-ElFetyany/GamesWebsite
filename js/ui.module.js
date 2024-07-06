export class Ui {
    displayDataGame(data) {
       let gamesBox = ``;
       for (let i = 0; i < data.length; i++) {
          gamesBox += `
          <div class="col">
          <div data-id="${data[i].id}"  class="card h-100 bg-transparent shadow " role="button" ">
             <div  class="card-body">
                <div class="position-relative mb-3">
                   <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" />
                
                </div>
    
                <div>
    
                   <div class="hstack justify-content-between">
                      <h3 class="h6 small">${data[i].title}</h3>
                      <span class="badge  text-bg-primary p-2">Free</span>
                   </div>
    
                   <p class="card-text text-light small text-center opacity-50 py-2">
                      ${data[i].short_description.split(" ", 8)}
                   </p>
    
                </div>
             </div>
    
             <footer class="card-footer small hstack justify-content-between">
    
                <span class="badge bg-dark text-white ">${data[i].genre}</span>
                <span class="badge bg-dark text-white">${data[i].platform}</span>
    
             </footer>
          </div>
       </div>
          `;
       }
 
       document.getElementById("gameData").innerHTML = gamesBox;
    }
 
    displayDetails(data) {
       const content = `
       <div class="col-md-4">
       <img src="${data.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
       <h3>Title: ${data.title}</h3>
       <p class=" mt-4">Category: <span class="badge text-bg-warning"> ${data.genre}</span> </p>
       <p>Platform: <span class="badge text-bg-warning"> ${data.platform}</span> </p>
       <p>Status: <span class="badge text-bg-warning"> ${data.status}</span> </p>
       <p class="small mt-5">${data.description}</p>
       <a class="btn btn-outline-warning mt-4" target="_blank" href="${data.game_url}">Show Game</a>
    </div>
       
       `;
 
       document.getElementById("detailsContent").innerHTML = content;
    }
 }
 