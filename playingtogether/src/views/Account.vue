<template>
    <div id="registration">
        <div>
            <form onsubmit="register()" class="container">
                <input type="text" id="name" placeholder="Name" required>
                <input type="text" id="fname" placeholder="First Name" required>
                <input type="email" id="email" placeholder="Email" required>         
                <input type="text" id="address" placeholder="Address" required>
                <p></p>
                <button  v-on:click="register()"> REGISTER</button>
            </form>
            <p></p>
            <button v-on:click="clean()"> CLEAN</button>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            name:"",
            fname:"",
            email:"",
            address:""
        }
    },
    methods:{
        register(){ 
            var Custom=[document.querySelector('#name').value,
                    document.querySelector('#fname').value,
                    document.querySelector('#email').value,
                    document.querySelector('#address').value]
            if(localStorage.getItem('Customer')!==null){
                var tampon = JSON.parse(localStorage.getItem('Customer'));
                tampon.push(Custom);
                localStorage.setItem('Customer',JSON.stringify(tampon))
            }
            else{
                localStorage.setItem('Customer',JSON.stringify(Custom))
            }
        },

        clean(){
            document.querySelector('#name').value = "",
            document.querySelector('#fname').value ="",
            document.querySelector('#email').value="",
            document.querySelector('#address').value=""
        }
    }
}

</script>


<style>
.mar-top{
    margin-top: 5px;
}

.container{
    margin: 10px 50px;
}

input{
    width:50%;
    border: solid 1px #eee;
    padding:15px 10px;
    margin:5px;
}

button{
    width: 200px;
    padding:15px;
    margin-top:5px;
    border:solid 1px dodgerblue;
    border-radius: 33px;
    cursor:pointer;
    transition: all .38s case-in-out;
}

button:hover{
    background:dodgerblue;
    color:#fff;
}


</style>