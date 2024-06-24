//Switch is another form of if else statement: EG.
let familyName = 'usman';
/*if (familyName == 'Usman') {
    console.log('That is true');
} else {
    console.log('Unfortunately, That is wrong');
}
*/

switch (familyName) {
    case 'usman':
        console.log('That is true');
        break;
    case 'Katibi':
        console.log('That is my surname');
        break;
    default:
        console.log('That is false');
        break;
}

let passMark = 6;

switch (true){
    case passMark > 40:
        console.log('You passed');
        break;
    default:
        console.log('You failed');
        break;
}

// switch statement determines your evening routine based on the day of the week
let day = 'Sunday'
switch(day){
    case 'Monday':
    console.log('Free day');
    break;
    case 'Tuesday':
    console.log('Went to the Market');
    break;
    case 'Wednesday':
    console.log('coding!');
    break;
    case'Thursday':
    console.log('Go to school');
    break;
    case'Friday':
    console.log('Go to mosque');
    break;
    case'Saturday':
    console.log('Stay at home');
    break;
    case'Sunday':
    console.log('Go to madrasah');
    break;
    default:
    console.log('There is no such day')
    break;
}

function ucFirst(str) {
    return str[0].toUpperCase + str.slice(1)
  };
  function checkSpam(strr){
    if (strr.includes('ViAgRA')||strr.includes('xxx')) return true
  }
  function truncate(str, maxlength) {
    if (maxlength < str.length){
        return str.slice(0, maxlength - 1) + '...'
    } else {
        return str
    }
  }
  //let string = "What I'd like to tell on this topic is:";
  //console.log(string.length);
  console.log(truncate("What I'd like to tell on this topic is:", 20)); 