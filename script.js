let array = ["When you can\'t find the sunshine, be the sunshine\n , author: -unknown-",
            "Love is not finding someone to live with. Love is finding someone you can\'t live without.\n author: -unknown-",
            "Do not judge my story by the chapter you walked in on\n , author: -unknown",
            "Don\'t complain about things you\'re not willing to change\n , author: -unknown-",
            "Unless your name is Google, stop acting like you know everything\n, author: -unknown-",
            "Only those who care about you can hear you when you\'re quiet\n, author: -unknown-",
            "It doesn\'t matter what others are doing.It matter what you are doing.\n , author: -unknown-",
            "Women are made to be loved, not understood\n,author: -Oscar Wild-",
            "The less you give a damn the happier you will be.\n, author: -unknown-",
            "Either you run the day, or the day runs you.\n author: -unknown-",
            "Only dead fish go with the flow.\n, author: -unknown-",
            "If you can\'t do anything about it then let it go. Don\'t be a prisoner to things you can\'t change.\n, author: -Tony Gaskin-",
            "We mwt for a reason, either you\'re a blessing or a lesson.\n, author: -unknown-",
            "The elevator to success is out of order. You\'ll have to use the stairs... one step at a time.\n,author: -Joe Girard-"
            ];
//-------------------------------------------------------------------

const addQuote = (array, quote) => {
  array.push(quote);
  document.querySelector("#quoteInput").value = "";

  let ulId = document.querySelector("#quotesPrint");
  const li = document.createElement("li");
  const html = `
      <span>${quote}</span>
      `;
    li.innerHTML = html;
    ulId.appendChild(li);
}
//console.log(addQuote("quote4"));

const deleteQuote = (position) => {
  array.splice(position, 1);
  printAll(array)  //to refresh the page
}
//console.log(deleteQuote(0, array));

//-----color and quote generator---------------------------------------
const generateQuote = (array) => {
  let quote = array[(Math.floor(Math.random() * array.length))];
  return quote;
}
//console.log(generateQuote(array));

//-----print all the quotes--------------------------------
const printAll = (array) => {
  let ulId = document.querySelector("#quotesPrint");
  ulId.innerHTML = "";
  
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    const html = `
      <span>${array[i]}</span>
      <button class="btn-delete" onclick="deleteQuote(${i})"><i class="fas fa-trash-alt"></i></button>
    `;
    li.innerHTML = html;
    ulId.appendChild(li);
  }
}
//console.log(printAll(array, 0));

//-----------create random quote------------
const randomQuote = (generateQuote) => {
  let div = document.querySelector("#quoteToday");
  let innerdiv = document.createElement("div");
  innerdiv.className = "quoteInnerDiv";
  innerdiv.innerHTML = generateQuote;
  div.appendChild(innerdiv);
}

//-----------------setup event listeners---------------------------

const setUpEventListenerQuoteToday = (randomQuote) => {
  let btnId = document.querySelector("#quoteToday-btn");
  btnId.addEventListener("click", randomQuote);
}

const addQuoteEventListener = (addQuote) => {
  const btnId = document.querySelector("#add-btn");
  btnId.addEventListener("click", addQuote);
}

const printAllEventListener = (printAll) => {
  const btnID = document.querySelector("#printAll-btn");
  btnID.addEventListener("click", printAll);
}
//-------call Event Listeners----------------------------
setUpEventListenerQuoteToday(() => randomQuote(generateQuote(array)));

addQuoteEventListener(() => addQuote(array, document.querySelector("#quoteInput").value));

printAllEventListener(() => printAll(array));
