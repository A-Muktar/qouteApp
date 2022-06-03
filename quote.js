// This array contains the qoutes that will be displayed in the output 
var arrayOfQuotes =
    [
        {
            "author": "Aliyu Muktar",
            "quote": "Run the day before the day runs you."
        },

        {
             "author": "Malcolm X",
             "quote":"Be peacefull, be courteous, obey the law; respectfull everyone  but if someone puts his hands on you, send him to cemetery."
        },

        {
          "author": "Prophet Muhammad (SAW)",
          "quote": "When you have see a person who has been given more than you in money and beauty, then look to those who have been given less than you."
        },

        {
            "author": "The Noble Quran",
            "quote": "There is no God but Allah and Muhammad is the messenger of Allah."
        },

        {
             "author": "Sahih Bukhari and Muslim",
             "quote": "The Prophet (peace and blessings of Allāh be upon him) said: 'It is also charity to utter a good word.'"
        },

         {
             "author": "Sahih Bukhari and Muslim",
             "quote": "None of you truly believes( in Allah and His religion) until he loves for his brother what he loves for himself."
        },
         
          {
              "author": "Sahih Bukhari",
              "quote": "There are two blessings which many people lose: (They are) health and free time for doing good."
        },
          
           {
               "author": "Rumi",
               "quote": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself."
        },
           
            {
                "author": "Via Islamic Thoughts",
                "quote": "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
             },
            
             {
                 "author": "Albaz Poetry",
                 "quote": "After asking Allah to guide you to the straight path, don’ t just stand there… start walking"
             },

              {
                  "author": " [Qur’an, 13:11]",
                  "quote": "Indeed, Allah will not change the condition of a people until they change what is in themselves."
        },
              
              {
                  "author": "Iman Ash-shafi",
                  "quote": "To be able to thank Allah for a blessing is a blessing within itself."
              }
    ]
// This function check throungh arrayOfQoutes randomly  and shuffle the output
function randomSelector(arrayLength)
{
    return Math.floor(Math.random() * arrayLength);
}
    /* This function generate the qoute which will be selected randomly
        the var randomNumber is assigned to the function randomSelector.
    */
function generateQuote()
{
    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML = ' " ' + arrayOfQuotes[randomNumber].quote + ' " ';

    document.getElementById("authorOutput").innerHTML = ' - ' + arrayOfQuotes[randomNumber].author + ' - ';

}


 