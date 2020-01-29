var id = location.search.split('=').pop();

var xhr = new XMLHttpRequest(),
          method = "GET",
          url = `http://127.0.0.1:3000/fishing_logs/${id}`;
    
xhr.open(method, url, true);
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  } 
};

xhr.send();