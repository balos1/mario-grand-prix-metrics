import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    return {
      cups: [
        {
          id: 1,
          title: 'Mushroom Cup',
          game: 'Mario Kart 64',
          photoURL: 'images/mushroomcup.png',
          courses: [
            {id: 1, title: 'Luigi Raceway', photoURL: 'images/LuigiRaceway.png'},
            {id: 2, title: 'Moo Moo Farms', photoURL: 'images/LuigiRaceway.png'},
            {id: 3, title: 'Koopa Troopa Beach', photoURL: 'images/LuigiRaceway.png'},
            {id: 4, title: 'Kalimari Desert', photoURL: 'images/LuigiRaceway.png'}
          ],
          completedCourses: []
        },
        {
          id: 2,
          title: 'Flower Cup',
          game: 'Mario Kart 64',
          photoURL: 'images/flowercup.png',
          courses: [
            {id: 1, title: 'Luigi Raceway', photoURL: 'images/LuigiRaceway.png'},
            {id: 2, title: 'Moo Moo Farms', photoURL: 'images/LuigiRaceway.png'},
            {id: 3, title: 'Koopa Troopa Beach', photoURL: 'images/LuigiRaceway.png'},
            {id: 4, title: 'Kalimari Desert', photoURL: 'images/LuigiRaceway.png'}
          ],
          completedCourses: []
        },
        {
          id: 3,
          title: 'Star Cup',
          game: 'Mario Kart 64',
          photoURL: 'images/starcup.png',
          courses: [
            {id: 1, title: 'Luigi Raceway', photoURL: 'images/LuigiRaceway.png'},
            {id: 2, title: 'Moo Moo Farms', photoURL: 'images/LuigiRaceway.png'},
            {id: 3, title: 'Koopa Troopa Beach', photoURL: 'images/LuigiRaceway.png'},
            {id: 4, title: 'Kalimari Desert', photoURL: 'images/LuigiRaceway.png'}
          ],
          completedCourses: []
        },
        {
          id: 4,
          title: 'Special Cup',
          game: 'Mario Kart 64',
          photoURL: 'images/specialcup.png',
          courses: [
            {id: 1, title: 'Luigi Raceway', photoURL: 'images/LuigiRaceway.png'},
            {id: 2, title: 'Moo Moo Farms', photoURL: 'images/LuigiRaceway.png'},
            {id: 3, title: 'Koopa Troopa Beach', photoURL: 'images/LuigiRaceway.png'},
            {id: 4, title: 'Kalimari Desert', photoURL: 'images/LuigiRaceway.png'}
          ],
          completedCourses: []
        }
      ]
    };
  }
});
