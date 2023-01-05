function getRandomFirstCharacter(){
    
    let randomizeCharacter = Math.floor(Math.random() * 3);
    
    if(randomizeCharacter === 0){
        
        return characters[0];
        
    }else if(randomizeCharacter === 1){
        
        return characters[1];
        
    }else{
        
        return characters[2];
    }
}

function getRandomSecondCharacter(){
    
    let randomizeCharacter = Math.floor(Math.random() * 3);
    
    if(randomizeCharacter === 0){
        
        return characters[0];
        
    }else if(randomizeCharacter === 1){
        
        return characters[1];
        
    }else{
        
        return characters[2];
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

function firstCharGetWeapon(){
    
    return `${getRandomFirstCharacter().type}, he got a ${getRandomWeapon(weapons)}`;
    
}

function secondCharGetWeapon(){
    
    return `${getRandomFirstCharacter().type}, he got a ${getRandomWeapon(weapons)}`;
    
}

let characters = [
    
        {
            type : "warrior",
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

alert(`First character is a ${firstCharGetWeapon()}`);
alert(`Second character is a ${secondCharGetWeapon()}`);