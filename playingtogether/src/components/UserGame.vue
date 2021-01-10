<template>
    <div id="games">
        <p>Hello</p>
    </div>
</template>

<script>
export default {
    
    created(){
        var customerEvents = null;
        var tampon = JSON.parse(localStorage.getItem('Customer'));
        for (let i=0; i<tampon.length;i++){
            if(tampon[i][2]==sessionStorage.getItem('user')){
                customerEvents = tampon[i][4];
                break
            }
        }
        var customerEventsInfo=[];
        var allEvents = JSON.parse(localStorage.getItem('Event'));
        for (let i = 0 ; i<customerEvents.length; i++){
            var evName = customerEvents[i];
            alert(evName);
            for(let j=0;j<allEvents.length;j++){
                if(allEvents[j][0]==evName){
                    customerEventsInfo.push(allEvents[j]);
                    break
                }
            }
        }
        for(let i = 0 ; i<customerEventsInfo.length ; i++){
            const div = document.createElement('div');
            
            for (var j=0;j<customerEventsInfo[i].length;j++){
                if(j==0){ 
                    let tag = document.createElement('p');
                    let text = document.createTextNode('Name : ' + customerEventsInfo[i][j]);
                    tag.appendChild(text);
                    iDiv.appendChild(tag);
                }
                else if(j==2){
                    let tag = document.createElement('p');
                    let text = document.createTextNode('Sport : ' + customerEventsInfo[i][j]);
                    tag.appendChild(text);
                    iDiv.appendChild(tag);
                }
                else if(j==5){
                    let tag = document.createElement('p');
                    let text = document.createTextNode('Number of player : ' + customerEventsInfo[i][j]);
                    tag.appendChild(text);
                    iDiv.appendChild(tag);
                }
                else if(j==3){
                    let tag = document.createElement('p');
                    let text = document.createTextNode('Number of player max : ' + customerEventsInfo[i][j]);
                    tag.appendChild(text);
                    iDiv.appendChild(tag);
                }
                else if(j==6){
                    let tag = document.createElement('p');
                    let text = document.createTextNode('Description : ' + customerEventsInfo[i][j]);
                    tag.appendChild(text);
                    iDiv.appendChild(tag);
                }
                else if(j==7){
                    let tag = document.createElement('p');
                    let text = document.createTextNode('Date : ' + customerEventsInfo[i][j]);
                    tag.appendChild(text);
                    iDiv.appendChild(tag);
                }
                else if(j==4){
                    let tag = document.createElement('p');
                    let text = document.createTextNode('Address : ' + customerEventsInfo[i][j]);
                    tag.appendChild(text);
                    iDiv.appendChild(tag);
                }
            
            }
        }
    }
}

</script>