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
            <input type="datetime-local" id="date" placeholder="date" required>
            <input type="text" id="description" placeholder="Description of your event">


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
            //Check if the name of the event already exist

            var events = JSON.parse(localStorage.getItem("Event"));
            for(let i =0; i < events.length;i++){
                if(events[i][0]==name){
                    alert("This event name already exists please create another one");
                    return;
                }

            }




            var sport =  document.querySelector('#sport').value;
            var nplayers =  document.querySelector('#players').value;
            var splayers = 1; //joined players
            var date = document.querySelector('#date').value;
            var now = new Date(),
                    // minimum date the user can choose, in this case now and in the future
                    minDate = now.toISOString().substring(0,10);

            ('#date').prop('min', minDate);


            var description = document.querySelector('#description').value;
            var email = sessionStorage.getItem("user");


          
           


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
                    var location = [name,coord,sport,nplayers,loca,splayers,description,date,email]
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

                    var tampon = JSON.parse(localStorage.getItem('Customer'));
                    for(let i =0 ; i<tampon.length ; i++){
                        if(tampon[i][2] == sessionStorage.getItem('user')){
                            tampon[i][4].push(this.marker.name)
                        }
                    }
                    localStorage.setItem('Customer',JSON.stringify(tampon));

                    
                })

                .catch(function(error){
                    window.prompt("Your Adress is not supported please try again")
                    console.log(error)
                })
        this.$router.push({name:"Join"});

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