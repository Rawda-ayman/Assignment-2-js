var arr = [ 
    { 
        quote:"Resentment is like drinking poison and waiting for your enemies to die." ,
        author:"--Nelson Mandela"
    } ,

    {
         quote:"You miss 100% of the shots you don't take.", 
        author:"--Wayne Gretzy"
    },
    {
         quote:"The best revenge is massive success.",
        author:"--Frank Sinatra" 
    },
    {
         quote:"Resentment is like drinking poison and waiting for your enemies to die." ,
        author:"--Nelson Mandela"
    },
    {
         quote:"It's not what happens to you, but how you react to it that matters." ,
        author:"--Epictetus"
    },
    {
         quote:"The best way to get started is to quit talking and begin doing." ,
        author:"--Walt Disney"
    },
    {
         quote:"Act as if what you do makes a difference. It does." ,
        author:"--William James"
    },
    {
         quote:"Be yourself; everyone else is already taken." ,
        author:"--Oscar Wilde"
    },
] ; 
  var quotes =  document.getElementById('quote');
  var quote_author =  document.getElementById('author');

function random_quotes()
{
  var random_num = Math.floor(Math.random()*arr.length) ;   
         quotes.innerHTML = arr[random_num].quote;   
         quote_author.innerHTML = arr[random_num].author ; 
}