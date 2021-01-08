<template>
    <div>
        <form>
                <input type="email" id="email-signin" placeholder="michel.durant@exemple.com" required>
                <button v-on:click="signin()">Sign In</button>
        </form>
    </div>
</template>

<script>
    export default{
        methods: {
            signin(){
            var mail = document.querySelector('#email-signin').value;
            var tampon = JSON.parse(localStorage.getItem('Customer'));
            var test = true;
            for(var i=0;i<tampon.length;i++){
                if(mail == tampon[i][2]){
                    sessionStorage.setItem('check','ok');
                    test = false;
                    alert('You are now logged in !')
                    break
                }
            }
            if(test){
                sessionStorage.setItem('check','nok');
                alert('You are not yet registered, please go to the ACCOUNT section !')
            }
            }
        }
    }
</script>