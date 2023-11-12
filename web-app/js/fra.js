// jsCalendar
// author: Tournier Guillaume
// Lang file: French

Object.extend(Date, {
  firstDayOfWeek: 1,
  NOW: 'maintenant', TODAY: 'aujourd\'hui', AM_PM: ['AM', 'PM'],
  MONTHS: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  SHORT_MONTHS: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  DAYS: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  SHORT_DAYS: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.']
});
DateFormat.DEFAULT_PATTERN = 'dd/MM/yyyy';