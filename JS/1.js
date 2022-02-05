var citiesByState =
{
  Telangana: ["-- Select a city --","Hyderabad","Warangal"],
  Maharashtra: ["-- Select a city --","Mumbai","Pune"]
}
function cityList(value)
{
  if(value.length == 0)
  {
    document.getElementById("s2").innerHTML = "<option></option>";
  }
  else
  {
    var citiesOptions="";
    for(i in citiesByState[value])
    {
      citiesOptions += "<option>"+citiesByState[value][i]+"</option>";
    }
    document.getElementById("s2").innerHTML = citiesOptions;
  }
}
