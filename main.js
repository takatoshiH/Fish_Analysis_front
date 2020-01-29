window.onload = () => {
  
  var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "http://127.0.0.1:3000/prefectures/";

  xhr.open(method, url, true);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      var prefectures = JSON.parse(xhr.responseText).data;
      var select_prefecture = this.document.getElementById("prefecture");
      prefectures.forEach((prefecture) => {
        var option = document.createElement("option");
        option.setAttribute("value", prefecture.id);
        option.innerText = prefecture.name;
        select_prefecture.appendChild(option);
      })
    } 
  };
  xhr.send();
};

window.getCities = () => {
  var prefecture_id = document.getElementById("prefecture").value;
  var xhr = new XMLHttpRequest(),
    method = "GET",
    url = `http://127.0.0.1:3000/cities/${prefecture_id}`;
  
    xhr.open(method, url, true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && xhr.status === 200) {
        var cities = JSON.parse(xhr.responseText).data;
        var select_prefecture = this.document.getElementById("city");
        cities.forEach((city) => {
          var option = document.createElement("option");
          option.setAttribute("value", city.id);
          option.innerText = city.name;
          select_prefecture.appendChild(option);
        })
      } 
    };
    xhr.send();
}

window.createFishingLog = () => {
  var started_at = document.getElementById("started_at").value;
  var finished_at = document.getElementById("finished_at").value;

  var data = { started_date: started_at, finished_date: finished_at };

  var xhr = new XMLHttpRequest(),
    method = "POST",
    url = "http://127.0.0.1:3000/fishing_logs";
  
    xhr.open(method, url, true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && xhr.status === 200) {
        var result = JSON.parse(xhr.responseText).data;
        console.log(result);
      } 
    };
  console.log(String(data));
  xhr.send(data.to_s);
}