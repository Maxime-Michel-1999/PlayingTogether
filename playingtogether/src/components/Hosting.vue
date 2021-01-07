<template>
    <div>
        Ready to Host a Game ? Enter the coordinates
        <form onsubmit="sendCoordinates">

            <input type="number">
            <input type="number">
            <button>Send Info</button>
        </form>

    </div>
</template>

<script>

const locaTest1 = ["Max",{lat:43.6990670,lng:7.25823092}];
const locaTest2 = ["Mat",{lat:43.4990670,lng:7.25823092}];



export default {
    
    data(){

    },

    methods:{
        sendCoordinates(){
            if (localStorage.getItem("Events") === null) {
                //Then we add a section event to it
                const events = [];
                events.push(locaTest1);
                events.push(locaTest2);
                localStorage.setItem("Event",JSON.stringify(events));
            }   
            else{
                const events = JSON.parse(localStorage.getItem("Events"));
                events.push(locaTest1);
                events.push(locaTest2);
                localStorage.setItem("Event",JSON.stringify(events));
            }

    }
}
}
</script>