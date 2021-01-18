<template>
    <div id="usergame">
        <div v-for="(event,idx) in events" v-bind:key="idx">
            <div class="usergame">
                <p>Name : {{ event.name}}</p>
                <p>Sport : {{ event.sport}}</p>
                <p>Date : {{ event.date}}</p>
                <p>Address : {{ event.place}}</p>
                <p>Number of player : {{ event.nbPlayer}}</p>
                <p>Number of maximum player : {{ event.nbPlayerMax}}</p>
                <p>Description : {{ event.description}}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            events:[],
        }
    },

    created(){
        
        var customerData = null;
        var tampon = JSON.parse(localStorage.getItem('Customer'));
        for (let i=0; i<tampon.length;i++){
            if(tampon[i][2]==sessionStorage.getItem('user')){
                customerData = tampon[i];
                break
            }
        }


        var customerEvents = customerData[4]
        if(customerEvents!==""){
            var customerEventsInfo=[];
            var allEvents = JSON.parse(localStorage.getItem('Event'));
            for (let i = 0 ; i<customerEvents.length; i++){
                var evName = customerEvents[i];
                for(let j=0;j<allEvents.length;j++){
                    if(allEvents[j][0]==evName){
                        customerEventsInfo.push(allEvents[j]);
                        break
                    }
                }
            }
            for(let i=0;i<customerEventsInfo.length;i++){
                var myEvent = customerEventsInfo[i];
                const event = {
                    name : myEvent[0],
                    sport: myEvent[2],
                    date : myEvent[7],
                    place : myEvent[4],
                    nbPlayer: myEvent[5],
                    nbPlayerMax:myEvent[3],
                    description:myEvent[6]
                }
                this.events.push(event);
            }  
            

            //Check if the user is hosting any game
            var customerEmail = sessionStorage.getItem("user");
            var Event = JSON.parse(localStorage.getItem("Event"));
            for(let j=0;j<Event.length;j++){
                if(Event[j][8]==customerEmail){
                    var IEvent = Event[j];
                    const event = {
                        name : IEvent[0],
                        sport: IEvent[2],
                        date : IEvent[7],
                        place : IEvent[4],
                        nbPlayer: IEvent[5],
                        nbPlayerMax:IEvent[3],
                        description:IEvent[6]
                }
                this.events.push(event);


                }
            }


           



        }
        else{
            alert('You are not currently registered to any games !')
        }
    }
}
</script>