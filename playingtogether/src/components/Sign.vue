<template>
    <div>
        <form>
                <input type="email" id="email-signin" placeholder="michel.durant@exemple.com" required>
                <button v-on:click="signin()" id="signinButton">Sign In</button>
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
                    sessionStorage.setItem('user',mail);
                    test = false;
                    alert('You are now logged in !')
                    document.querySelector('#email-signin').value = "";
                    break
                }
            }
            if(test){
                sessionStorage.setItem('check','nok');
                this.$router.push({ name: 'Account' });
                alert('You are not yet registered, please do so in the ACCOUNT section !')
            }
            }
        }
    }
</script>