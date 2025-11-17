function calculateAward (points) {
  if (points > 99) {
    return "First Place";
  }

  if (points > 49 && points < 100){
    return "Second Place";
  } 

  if (points <= 49 && points >= 0){
    return "Participation Award";
  }
}








