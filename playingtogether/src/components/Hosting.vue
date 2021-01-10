<template>
    <div>
       <h1>Please Enter the Following to create an Event !</h1>
        <form onsubmit="geocode()">
            <select id="sport" name="Sport" placeholder="Sport" required>
                <option value="FootBall">FootBall</option>
                <option value="BasketBall">BasketBall</option>
                <option value="VolleyBall">VolleyBall</option>
                <option value="Tennis">Tennis</option>
            </select>
            <input type="text" id="adress" placeholder="Adress" required>
            <input type="text" id="name" placeholder="Event Name" required>
            <input type="number" id="players" placeholder="Number of Players" required>


            <p></p>
            <button @click="geocode()">Create Event</button>
        </form>

    </div>
</template>

<script>


const axios = require('axios');

export default {
    

    methods:{
        
        geocode(){
            
            var loca =  document.querySelector('#adress').value;
            var name =  document.querySelector('#name').value;
            var sport =  document.querySelector('#sport').value;
            var nplayers =  document.querySelector('#players').value;
          
           


            axios.get('http://api.positionstack.com/v1/forward',{
                params:{
                    access_key: '7cd167337122857d22fa58a4c6a89e19',
                    query : loca
                }
                 })

                
                .then(function(response){
               
                    var coord = {lat:response.data.data[0].latitude,lng:response.data.data[0].longitude}
                 
                    if(response.data.data[0].latitude == undefined)
                    {alert("We have difficulites catching your adress please try again")
                                return}
                    var location = [name,coord,sport,nplayers,loca]
                    if (localStorage.getItem("Event") === null) {
                        //Then we add a section event to it
                        
                        const events = [];
                        events.push(location);
                        localStorage.setItem("Event",JSON.stringify(events));
                    }   
                    else{
                        const events = JSON.parse(localStorage.getItem("Event"));
                        events.push(location);
                        localStorage.setItem("Event",JSON.stringify(events));
            }

                    
                })
                .catch(function(error){
                    window.prompt("Your Adress is not supported please try again")
                    console.log(error)
                });

         },

        
}
}
</script>

<style scoped>
#sport{
    width:50%;
    border: solid 1px black;
    padding:15px 10px;
    margin:5px;
}
</style>