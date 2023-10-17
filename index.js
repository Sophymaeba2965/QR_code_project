/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import QRCode from "qr-image-generator";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"Type in your URL",
        name:URL,
    }


  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
       console.log("Prompt couldn't be rendered in the current environment");
    } else {
       console.log("Something else went wrong");
    }
  });



  //fs.writeFile("message.txt",answers,(err)=>{
   //if (err) throw Error;
   //console.log("My name is "+ answers);
   //} );
   


   //QRCode.toDataURL(answers, function (err, url) {
  //console.log(url)
//})



