let beatles = [
  {
    name: null,
    nickname: "The Smart One"
  },
  {
    name: null,
    nickname: "The Funny One"
  },
  {
    name: null,
    nickname: "The Cute One"
    },
  {
    name: null,
    nickname: "The Quiet One"
  }
];

beatles.forEach( beatle => {
 switch(beatle.nickname) {
    case "The Smart One":
        beatle.name = "John";
        break;
    case "The Funny One":
        beatle.name = "Ringo";
        break;
    case "The Cute One":
        beatle.name = "Paul";
        break;
    case "The Quiet One":
        beatles.name = "George";
        break;
}
}) ;

beatles.forEach( beatle => {
  console.log( "Hi, I'm " + beatle.name + ".  I'm " + beatle.nickname + "!" );
});