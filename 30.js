var username=['admin','talha','anas','jahanzaib','bilal']
for(let i=1;i<=4;i++){
    if(username[i].includes('admin')){
        console.log(`Hello ${username[i]}, would you like to see a status report?`)
    }
    else{
        console.log(` Hello ${username[i]}, thank you for logging in again.`)
    }
}7