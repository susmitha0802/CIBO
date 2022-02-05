function available() {
  var cities={Hyderabad,Warangal,Mumbai,Pune};
  var city = document.getElementById("s2").value;
  for(i in cities)
  {
    if(document.getElementById(i).style.display=="block")
    {
      document.getElementById(i).style.display="none";
    }
  }
  document.getElementById(city).style.display="block";
}
