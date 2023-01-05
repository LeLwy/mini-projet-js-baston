function getRandomFirstCharacter(){
    
    let randomizeCharacter = Math.floor(Math.random() * 3);
    
    if(randomizeCharacter === 0){
        
        return characters[0].type;
        
    }else if(randomizeCharacter === 1){
        
        return characters[1].type;
        
    }else{
        
        return characters[2].type;
    }
}

function getRandomSecondCharacter(){
    
    let randomizeCharacter = Math.floor(Math.random() * 3);
    
    if(randomizeCharacter === 0){
        
        return characters[0].type;
        
    }else if(randomizeCharacter === 1){
        
        return characters[1].type;
        
    }else{
        
        return characters[2].type;
    }
}

function getRandomWeapon(weapons){
    
    let randomizeWeapon = Math.floor(Math.random() * 3);
    
    if(randomizeWeapon === 0){
        
        return weapons[0];
        
    }else if(randomizeWeapon === 1){
        
        return weapons[1];
        
    }else{
        
        return weapons[2];
        
    }
}

let characters = [
    
        {
            type : "guerrier",
            health: 15,
            strength : 10,
            agility : 5,
            intelligence : 5,
            weapon : ""
        },
        
        {
            type : "archer",
            health: 15,
            strength : 5,
            agility : 10,
            intelligence : 5,
            weapon : ""
        },
        
        {
            type : "mage",
            health: 15,
            strength : 5,
            agility : 5,
            intelligence : 10,
            weapon : ""
        },
    
    ]
    
let weapons = ["sword","bow","stick"];

alert(getRandomFirstCharacter());

alert(getRandomSecondCharacter());