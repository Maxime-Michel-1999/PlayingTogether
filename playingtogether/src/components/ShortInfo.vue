<template>
    <div>
    <p>Game {{marker.sport}} </p>

    
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
            var customers = JSON.parse(localStorage.getItem("Customers"));
            for(let i = 0; i < customers.length; i++ ){

                if(customers[i][2] == userEmail){
                    customers[i][4].append(this.marker.name);
                    break;
                }

            }
            localStorage.setItem("Customers",JSON.stringify(customers));

        }

    }
    
}
</script>