var name='Talha'
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  function UpperCase(str){
    return str.toUpperCase()
  }
  
  function LowerCase(str){
    return str.toLowerCase()
  }

  let ans1=titleCase("I'm a little tea pot");
  let ans2= UpperCase("I'm a little tea pot");
  let ans3= LowerCase("I'm a little tea pot");

  console.log(`title case : ${ans1} \nUpper case:  ${ans2} \nLower case:  ${ans3} `
  )