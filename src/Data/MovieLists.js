import React from 'react';

import IronMan2008 from '../Img/Posters/MCU/IronMan2008.png';
import IronMan22010 from '../Img/Posters/MCU/IronMan22010.png';
import IronMan32013 from '../Img/Posters/MCU/IronMan32013.png';
import TheIncredibleHulk2008 from '../Img/Posters/MCU/TheIncredibleHulk2008.png'
import AntMan2015 from '../Img/Posters/MCU/Ant-Man2015.png'
import AntManandtheWasp2018 from '../Img/Posters/MCU/Ant-ManandtheWasp2018.png'
import Avengers2012 from '../Img/Posters/MCU/Avengers2012.png'
import AvengersAgeOfultron2015 from '../Img/Posters/MCU/AvengersAgeOfultron2015.jpg'
import AvengersEndgame2019 from '../Img/Posters/MCU/AvengersEndgame2019.jpg'
import AvengersInfinityWar2018 from '../Img/Posters/MCU/AvengersInfinityWar2018.jpg'
import BlackPanther2018 from '../Img/Posters/MCU/BlackPanther2018.png'
import CaptainAmericaCivilWar2016 from '../Img/Posters/MCU/CaptainAmericaCivilWar2016.png'
import CaptainAmericaTheFirstAvenger2011 from '../Img/Posters/MCU/CaptainAmericaTheFirstAvenger2011.jpg'
import CaptainAmericaTheWinterSoldier2014 from '../Img/Posters/MCU/CaptainAmericaTheWinterSoldier2014.png'
import CaptainMarvel2019 from '../Img/Posters/MCU/CaptainMarvel2019.png'
import DoctorStrange2016 from '../Img/Posters/MCU/DoctorStrange2016.png'
import GuardiansoftheGalaxy2014 from '../Img/Posters/MCU/GuardiansoftheGalaxy2014.png'
import GuardiansoftheGalaxyVol22017 from '../Img/Posters/MCU/GuardiansoftheGalaxyVol22017.png'
import SpiderManFarFromHome2019 from '../Img/Posters/MCU/Spider-ManFarFromHome2019.png'
import SpiderManHomecoming2017 from '../Img/Posters/MCU/Spider-ManHomecoming2017.jpg'
import Thor2011 from '../Img/Posters/MCU/Thor2011.png'
import ThorRagnarok2017 from '../Img/Posters/MCU/ThorRagnarok2017.png'
import ThorTheDarkWorld2013 from '../Img/Posters/MCU/ThorTheDarkWorld2013.png'

import FantasticBeastsandWheretoFindThem from '../Img/Posters/HP/FantasticBeastsandWheretoFindThem.png'
import FantasticBeastsTheCrimesofGrindelwald from '../Img/Posters/HP/FantasticBeastsTheCrimesofGrindelwald.png'
import HarryPotterandtheChamberofSecrets from '../Img/Posters/HP/HarryPotterandtheChamberofSecrets.png'
import HarryPotterandtheDeathlyHallowsPart1 from '../Img/Posters/HP/HarryPotterandtheDeathlyHallowsPart1.png'
import HarryPotterandtheDeathlyHallowsPart2 from '../Img/Posters/HP/HarryPotterandtheDeathlyHallowsPart2.png'
import HarryPotterandtheGobletofFire from '../Img/Posters/HP/HarryPotterandtheGobletofFire.png'
import HarryPotterandtheHalfBloodPrince from '../Img/Posters/HP/HarryPotterandtheHalfBloodPrince.png'
import HarryPotterandtheOrderofthePhoenix from '../Img/Posters/HP/HarryPotterandtheOrderofthePhoenix.png'
import HarryPotterandthePrisonerofAzkaban from '../Img/Posters/HP/HarryPotterandthePrisonerofAzkaban.jpg'
import HarryPotterandtheSorcerersStone from '../Img/Posters/HP/HarryPotterandtheSorcerersStone.png'

import EpisodeIIAttackoftheClones from '../Img/Posters/SW/EpisodeIIAttackoftheClones.png'
import EpisodeIIIRevengeoftheSith from '../Img/Posters/SW/EpisodeIIIRevengeoftheSith.png'
import EpisodeIThePhantomMenace from '../Img/Posters/SW/EpisodeIThePhantomMenace.png'
import EpisodeIVANewHope from '../Img/Posters/SW/EpisodeIVANewHope.png'
import EpisodeIXTheRiseofSkywalker from '../Img/Posters/SW/EpisodeIXTheRiseofSkywalker.png'
import EpisodeVIIITheLastJedi from '../Img/Posters/SW/EpisodeVIIITheLastJedi.png'
import EpisodeVIITheForceAwakens from '../Img/Posters/SW/EpisodeVIITheForceAwakens.png'
import EpisodeVIReturnoftheJedi from '../Img/Posters/SW/EpisodeVIReturnoftheJedi.png'
import EpisodeVTheEmpireStrikesBack from '../Img/Posters/SW/EpisodeVTheEmpireStrikesBack.png'



class movie_list {
    constructor(list_title, description, movies) {
      this.list_title = list_title;
      this.description = description;
      this.movies = movies;
    }
  }
  
  const MCU_list = new movie_list(
    'Marvels Infinity Saga', 'MCU movies ordered by release',
    [
      {
        'title': 'Iron Man',
        'year': '2008',
        'poster': IronMan2008
      },
      {
        'title': 'The Incredible Hulk ',
        'year': '2008',
        'poster': TheIncredibleHulk2008
      },
      {
        'title': 'Iron Man 2',
        'year': '2010',
        'poster': IronMan22010
      },
      {
        'title': 'Thor',
        'year': '2011',
        'poster': Thor2011
      },
      {
        'title': 'Captain America: The First Avenger',
        'year': '2011',
        'poster': CaptainAmericaTheFirstAvenger2011
      },
      {
        'title': 'The Avengers',
        'year': '2012',
        'poster': Avengers2012
      },
      {
        'title': 'Iron Man 3',
        'year': '2013',
        'poster': IronMan32013
      },
      {
        'title': 'Thor: The Dark World',
        'year': '2013',
        'poster': ThorTheDarkWorld2013
      },
      {
        'title': 'Captain America: The Winter Soldier',
        'year': '2014',
        'poster': CaptainAmericaTheWinterSoldier2014
      },
      {
        'title': 'Guardians of the Galaxy',
        'year': '2014',
        'poster': GuardiansoftheGalaxy2014
      },
      {
        'title': 'Avengers: Age of Ultron',
        'year': '2015',
        'poster': AvengersAgeOfultron2015
      },
      {
        'title': 'Ant-Man',
        'year': '2015',
        'poster': AntMan2015
      },
      {
        'title': 'Captain America: Civil War',
        'year': '2016',
        'poster': CaptainAmericaCivilWar2016
      },
      {
        'title': 'Doctor Strange',
        'year': '2016',
        'poster': DoctorStrange2016
      },
      {
        'title': 'Guardians of the Galaxy Vol. 2',
        'year': '2017',
        'poster': GuardiansoftheGalaxyVol22017
      },
      {
        'title': 'Spider-Man: Homecoming',
        'year': '2017',
        'poster': SpiderManHomecoming2017
      },
      {
        'title': 'Thor: Ragnarok',
        'year': '2017',
        'poster': ThorRagnarok2017
      },
      {
        'title': 'Black Panther',
        'year': '2018',
        'poster': BlackPanther2018
      },
      {
        'title': 'Avengers: Infinity War',
        'year': '2018',
        'poster': AvengersInfinityWar2018
      },
      {
        'title': 'Ant-Man and the Wasp',
        'year': '2018',
        'poster': AntManandtheWasp2018
      },
      {
        'title': 'Captain Marvel',
        'year': '2019',
        'poster': CaptainMarvel2019
      },
      {
        'title': 'Avengers: Endgame',
        'year': '2019',
        'poster': AvengersEndgame2019
      },
      {
        'title': 'Spider-Man: Far From Home',
        'year': '2019',
        'poster': SpiderManFarFromHome2019
      }
    ]
  );

  const MCU_list_Chrono = new movie_list(
    'Marvels Infinity Saga', 'MCU movies ordered by release',
    [
      {
        'title': 'Captain America: The First Avenger',
        'year': '2011',
        'poster': CaptainAmericaTheFirstAvenger2011
      },
      {
        'title': 'Captain Marvel',
        'year': '2019',
        'poster': CaptainMarvel2019
      },
      {
        'title': 'Iron Man',
        'year': '2008',
        'poster': IronMan2008
      },
      {
        'title': 'Iron Man 2',
        'year': '2010',
        'poster': IronMan22010
      },
      {
        'title': 'The Incredible Hulk ',
        'year': '2008',
        'poster': TheIncredibleHulk2008
      },
      {
        'title': 'Thor',
        'year': '2011',
        'poster': Thor2011
      },
      {
        'title': 'The Avengers',
        'year': '2012',
        'poster': Avengers2012
      },
      {
        'title': 'Iron Man 3',
        'year': '2013',
        'poster': IronMan32013
      },
      {
        'title': 'Thor: The Dark World',
        'year': '2013',
        'poster': ThorTheDarkWorld2013
      },
      {
        'title': 'Guardians of the Galaxy',
        'year': '2014',
        'poster': GuardiansoftheGalaxy2014
      },
      {
        'title': 'Guardians of the Galaxy Vol. 2',
        'year': '2017',
        'poster': GuardiansoftheGalaxyVol22017
      },
      {
        'title': 'Captain America: The Winter Soldier',
        'year': '2014',
        'poster': CaptainAmericaTheWinterSoldier2014
      },
      {
        'title': 'Avengers: Age of Ultron',
        'year': '2015',
        'poster': AvengersAgeOfultron2015
      },
      {
        'title': 'Ant-Man',
        'year': '2015',
        'poster': AntMan2015
      },
      {
        'title': 'Captain America: Civil War',
        'year': '2016',
        'poster': CaptainAmericaCivilWar2016
      },
      {
        'title': 'Black Panther',
        'year': '2018',
        'poster': BlackPanther2018
      },
      {
        'title': 'Spider-Man: Homecoming',
        'year': '2017',
        'poster': SpiderManHomecoming2017
      },
      {
        'title': 'Doctor Strange',
        'year': '2016',
        'poster': DoctorStrange2016
      },
      {
        'title': 'Thor: Ragnarok',
        'year': '2017',
        'poster': ThorRagnarok2017
      },
      {
        'title': 'Ant-Man and the Wasp',
        'year': '2018',
        'poster': AntManandtheWasp2018
      },
      {
        'title': 'Avengers: Infinity War',
        'year': '2018',
        'poster': AvengersInfinityWar2018
      },
      {
        'title': 'Avengers: Endgame',
        'year': '2019',
        'poster': AvengersEndgame2019
      },
      {
        'title': 'Spider-Man: Far From Home',
        'year': '2019',
        'poster': SpiderManFarFromHome2019
      }
    ]
  );


  const Wizarding_World = new movie_list(
    'Wizarding World', 'Harry Potter movies ordered chronologically',
    [
      {
        'title': 'Fantastic Beasts and Where to Find Them',
        'year': '2016',
        'poster': FantasticBeastsandWheretoFindThem
      },
      {
        'title': 'Fantastic Beasts The Crimes of Grindelwald',
        'year': '2018',
        'poster': FantasticBeastsTheCrimesofGrindelwald
      },
      {
        'title': 'Harry Potter and the Sorcerers Stone',
        'year': '2001',
        'poster': HarryPotterandtheSorcerersStone
      },
      {
        'title': 'Harry Potter and the Chamber of Secrets',
        'year': '2002',
        'poster': HarryPotterandtheChamberofSecrets
      },
      {
        'title': 'Harry Potter and the Prisoner of Azkaban',
        'year': '2004',
        'poster': HarryPotterandthePrisonerofAzkaban
      },
      {
        'title': 'Harry Potter and the Goblet of Fire',
        'year': '2005',
        'poster': HarryPotterandtheGobletofFire
      },
      {
        'title': 'Harry Potter and the Order of the Phoenix',
        'year': '2007',
        'poster': HarryPotterandtheOrderofthePhoenix
      },
      {
        'title': 'Harry Potter and the Half Blood Prince',
        'year': '2009',
        'poster': HarryPotterandtheHalfBloodPrince
      },
      {
        'title': 'Harry Potter and the Deathly Hallows Part 1',
        'year': '2010',
        'poster': HarryPotterandtheDeathlyHallowsPart1
      },
      {
        'title': 'Harry Potter and the Deathly Hallows Part 2',
        'year': '2011',
        'poster': HarryPotterandtheDeathlyHallowsPart2
      }
    ]
  );


  


  const Skywalker_Saga = new movie_list(
    'Star Wars Skywalker Saga', 'Star Wars movies by release date',
    [
      {
        'title': 'Episode IV – A New Hope',
        'year': '1977',
        'poster': EpisodeIVANewHope
      },
      {
        'title': 'Episode V – The Empire Strikes Back',
        'year': '1980',
        'poster': EpisodeVTheEmpireStrikesBack
      },
      {
        'title': 'Episode VI – Return of the Jedi',
        'year': '1983',
        'poster': EpisodeVIReturnoftheJedi
      },
      {
        'title': 'Episode I – The Phantom Menace',
        'year': '1999',
        'poster': EpisodeIThePhantomMenace
      },
      {
        'title': 'Episode II – Attack of the Clones',
        'year': '2002',
        'poster': EpisodeIIAttackoftheClones
      },
      {
        'title': 'Episode III – Revenge of the Sith',
        'year': '2005',
        'poster': EpisodeIIIRevengeoftheSith
      },
      {
        'title': 'Episode VII – The Force Awakens',
        'year': '2015',
        'poster': EpisodeVIITheForceAwakens
      },
      {
        'title': 'Episode VIII – The Last Jedi',
        'year': '2017',
        'poster': EpisodeVIIITheLastJedi
      },
      {
        'title': 'Episode IX – The Rise of Skywalker	',
        'year': '2019',
        'poster': EpisodeIXTheRiseofSkywalker
      }
    ]
  );
  

export {MCU_list, MCU_list_Chrono, Wizarding_World, Skywalker_Saga}