<template>
    <div id="Information">
    <p>{{marker.name}}</p>

    <p>{{marker.sport}} <br>
        {{marker.adress}} <br>
        
    </p>

    
    <button v-on:click="join()">Join the Game</button>
    </div>


</template>

<script>
export default {
    name : 'ShortInfo',
    props:["marker"],


    methods:{

        join(){

            var userEmail = sessionStorage.getItem("user");
            var customers = JSON.parse(localStorage.getItem("Customer"));

            for(let i=0;i<customers.length;i++){
                if(customers[i][2]==userEmail){
                    var userEvents = customers[i][4]
                    if(userEvents!==""){
                        for(let j=0;j<userEvents.length;j++){
                            if(userEvents[j]==this.marker.name){
                                alert('You are already registered for this event!');
                                return
                            }
                        }
                    }
                    else{
                        break
                    }
                }
            }
            
            for(let i = 0; i < customers.length; i++ ){

                if(customers[i][2] == userEmail){
                    customers[i][4].push(this.marker.name);
                    break;
                }

            }
            localStorage.setItem("Customer",JSON.stringify(customers));

            var events = JSON.parse(localStorage.getItem('Event'));
            for(let i=0;i<events.length;i++){
                if(events[i][0]==this.marker.name){
                    events[i][5]+=1
                }
            }
            localStorage.setItem('Event',JSON.stringify(events));


            this.$router.push({name:"Game"});

        }

    }
    
}
</script>

<style >
    #Information{
        background-color: rgb(0, 247, 255);
    }
</style>