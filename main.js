var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

function domainGenerator(pronoun, adj, noun){

    let ol = document.createElement("ol");

    let newDomain = "";
    for(let i = 0 ; i < pronoun.length; i++){
        for (let j = 0 ; j < adj.length; j++){
            for (let k = 0 ; k < noun.length; k++){
                newDomain = pronoun[i]+adj[j]+noun[k]+".com";
                console.log(newDomain)

                let li = document.createElement("li");
                
                li.innerHTML = newDomain;

                ol.append(li);
            }
        }
    }
      
    document.body.append(ol);
}

domainGenerator(pronoun, adj, noun);

