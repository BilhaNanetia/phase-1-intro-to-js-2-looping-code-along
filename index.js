
 function writeCards (names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(Thank you, ${names[i]}, for the wonderful ${event} gift!);
 }
 return thankYouMessages;
 }

 //Using a while loop to countDown 
 function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;     //Decrements the counter for the next iteraton
    }
}
