'use strict'
const daysOnWeek = 7;
const dayIndex = new Map([
   ['Sunday', 0],
   ['Monday', 1],
   ['Tuesday', 2],
   ['Wednesday', 3],
   ['Thursday', 4],
   ['Friday', 5],
   ['Saturday', 6],
]);
export const meetupDay = (year, month, dayOfWeek, occ) => {
   var firstDayOnMonth = new Date(year, month, 1);
   var indexOfFirstDay = firstDayOnMonth.getDay()

   var i = 0;
   while ((indexOfFirstDay + i) % daysOnWeek != dayIndex.get(dayOfWeek)) {
      i++;
   }
   return occHandler.get(occ)(firstDayOnMonth, i);
};
const handle1st = (first, daytoGo) => handleXOcc(first, daytoGo, 0);

const handle2nd = (first, daytoGo) => handleXOcc(first, daytoGo, 1);

const handle3rd = (first, daytoGo) => handleXOcc(first, daytoGo, 2);

const handle4ht = (first, daytoGo) => handleXOcc(first, daytoGo, 3);

const handle5ht = (first, daytoGo) => handleXOcc(first, daytoGo, 4);

const occHandler = new Map(
   [
      [
         '1st', handle1st
      ],
      [
         '2nd', handle2nd
      ],
      [
         '3rd', handle3rd
      ],
      [
         '4th', handle4ht
      ],
      [
         '5th', handle5ht
      ],
      [
         'teenth', handleTeenth
      ],
      [
         'last', handleLast
      ]
   ]);
function handleTeenth(first, daytoGo) {
   var j = -1;
   do {
      j++;
      var d = new Date(first.getTime() + ((((7 * j) + daytoGo) * 24 * 3600 * 1000)));
   } while ((d.getDate() < 10));
   return d;
}
function handleLast(first, daytoGo) {
   var currentMonth = first.getMonth();
   var j = -1;
   do {
      j++;
      var d = new Date(first.getTime() + ((((7 * j) + daytoGo) * 24 * 3600 * 1000)));
   } while ((d.getMonth() == currentMonth));
   j--;
   return new Date(first.getTime() + ((((7 * j) + daytoGo) * 24 * 3600 * 1000)));
}

const handleXOcc = (first, daytoGo, OccIndex) => {
   var d = new Date(first.getTime() + (((OccIndex * 7) + daytoGo) * 24 * 3600 * 1000));
   if (d.getMonth() != first.getMonth())
      throw new Error(`${OccIndex + 1} for ${daytoGo} don't exist`);
   return d
}

