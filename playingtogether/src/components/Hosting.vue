<template>
    <div>
        Ready to Host a Game ? Enter the coordinates
        <form onsubmit="geocode()">
            <input type="text" id="adress" placeholder="Adress" required>
            <input type="text" id="name" placeholder="Event Name" required>
            <button @click='geocode()'>Create Event</button>
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

            axios.get('http://api.positionstack.com/v1/forward',{
                params:{
                    access_key: '7cd167337122857d22fa58a4c6a89e19',
                    query : loca
                }
                 })

                
                .then(function(response){
                    var coord = {lat:response.data.data[0].latitude,lng:response.data.data[0].longitude}
                    var location = [name,coord]
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
                    console.log(error)
                });

         },

        
}
}
</script>