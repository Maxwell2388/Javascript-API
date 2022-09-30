const $city = document.getElementById("city");
const Btn = document.getElementById("search_button");

Btn.addEventListener("click", () => {
    let inputword = document.getElementById("input_city").value;
    const api_key = "52c11b98d795a397529d2ce9778d08ba"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputword}&appid=${api_key}`;

    fetch(`${url}`).then((response) => response.json()).then((data)=>{
        console.log(data);
        $city.innerHTML = `


        <div class="word">
        <h3>${data["name"]}</h3>
    </div>

         <div class="details">
        <p>Tempearture </p>
        <p>Humidity </p>
        <p> Wind </p>
    </div>
        `
     
        
    }).catch(() => {
        Result.innerHTML = `<h3 class="error">Couldn't Find The City</h3>`
    })
})