let letter = "abcdefghijklmnopqrstuvqaxyz"
letter += letter.toUpperCase()
letter += "@#$&*(){}?|!^-+=/"
const lettersArray = Object.assign([], letter)
 let pw1 = document.getElementById("pw1")
 pw1.value = "Cake"

 let pw2 = document.getElementById("pw2")
 pw2.value = "is"

 let pw3 = document.getElementById("pw3")
 pw3.value = "a"

 let pw4 = document.getElementById("pw4")
 pw4.value = "Lie"
 

 function generatePassword(){
     var message1 = ""
     var message2 = ""
     var message3 = ""
     var message4 = ""
     for(let i = 0; i < 13; i++){
        message1 += lettersArray[Math.floor(Math.random() * letter.length)]
        message2 += lettersArray[Math.floor(Math.random() * letter.length)]
        message3 += lettersArray[Math.floor(Math.random() * letter.length)]
        message4 += lettersArray[Math.floor(Math.random() * letter.length)]
     }
     pw1.value = message1
     pw2.value = message2
     pw3.value = message3
     pw4.value = message4
 }