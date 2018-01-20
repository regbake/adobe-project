module.exports = {
  matchNames: function(string, nameArray) {
    // var nameArray = data.names;
    console.log("nameArray", nameArray);

    var matchArray = [];

    //check if the name contains the search str
    nameArray.forEach(function(name){
      var check = name.toLowerCase().includes(string.toLowerCase());

      if (check) {
        matchArray.push(name);
      }
    });

    if (matchArray.length === 0){
      matchArray.push("no matches found");
    }

    return matchArray;
  }
}
