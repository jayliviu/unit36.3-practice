const url = `http://numbersapi.com`

async function getFact(){
   try{
      const response = await $.getJSON(`${url}/10?json`)
      const h1 = $(`<h1>${response.text}</h1>`)
      $(`body`).prepend(h1)
   } catch(e) {
      console.log(e)
   }
}

async function getManyFacts(){
   try{
      const response = await $.getJSON(`${url}/1..4?json`);
   
      for(let entry of Object.entries(response)){
         $(`body`).append(`<li>${entry[1]}</li>`)
      }
   } catch(e){
      console.log(e)
   }
   $(`body`).append(`<hr>`)
}

async function getFactsOnOne(){
   try{
      const response1 = $.getJSON(`${url}/10?json`)
      const response2 = $.getJSON(`${url}/10?json`)
      const response3 = $.getJSON(`${url}/10?json`)
      const response4 = $.getJSON(`${url}/10?json`)
   
      const one = await response1
      const two = await response2
      const three = await response3
      const four = await response4
   
      const resArray = [one, two, three, four]
   
      for(let res of resArray){
         $(`body`).append(`<li>${res.text}</li>`)
      }
   } catch(e){
      console.log(e)
   }
}


getFact()
getManyFacts()
getFactsOnOne()