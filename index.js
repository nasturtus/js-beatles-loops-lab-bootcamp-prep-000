function theBeatlesPlay(musicians, instruments) {
  var musiciansInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansInstruments;
}