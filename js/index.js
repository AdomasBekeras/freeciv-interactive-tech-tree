var dash=1;
var stroke='#005F6B';
var stroke_active='#00DFFC';
var things = {
    monarchy:{
      name:'Monarchy',
      type:'government',
      text:"Written laws and uniform religion offer the monarch power enough to support an active military while keeping corruption from overwhelming trade.",
      img: 'http://vignette3.wikia.nocookie.net/freeciv/images/4/46/Gov.monarchy.png/revision/latest?cb=20061222010411&format=webp'
    },
    communism:{
      name:'Communism',
      type:'government',
      text:"With science and industry come the tools to impose military control over the workers and implement a planned economy, while suffering only a slight but uniform level of corruption.",
      img: 'http://vignette2.wikia.nocookie.net/freeciv/images/9/91/Gov.communism.png/revision/latest?cb=20061222010432&format=webp'
    },
    the_republic:{
      name: 'The republic',
      type:'government',
      text:"The people respond to freedom with increased trade under this ancient form of government, but disapprove of military action.",
      img: 'http://vignette1.wikia.nocookie.net/freeciv/images/7/7e/Gov.republic.png/revision/latest?cb=20061222010517&format=webp'
    },
    democracy:{
      name: 'Democracy',
      type:'government',
      text:"Modern participatory government and free enterprise eliminate corruption, allowing trade and science to thrive -- but free citizens agitate most strongly against warfare.",
      img: 'http://vignette2.wikia.nocookie.net/freeciv/images/c/c5/Gov.democracy.png/revision/latest?cb=20061222010540&format=webp'
    },
    oracle:{
      name:'Oracle',
      type:'wonder',
      cost: 100,
      text:"<td>Makes two of your unhappy citizens content in every city with a temple.<ul><li>  The discovery of Theology will make Oracle obsolete.</li></ul></td>",
      img: 'http://vignette1.wikia.nocookie.net/freeciv/images/9/9e/B.oracle.png/revision/latest?cb=20070226033429'
    },
    temple: {
       name:'Temple',
       type:'building',
       cost: 30,
       upkeep:1,
       text:"Makes one unhappy citizen content. Both the Mysticism advance and the Oracle wonder double this effect. With both Mysticism and the Oracle, 4 citizens are made content.",
      img: 'http://vignette2.wikia.nocookie.net/freeciv/images/6/64/B.temple.png'
    },
    workers:{
       name:'Workers',
       type:'unit',
       cost:30,
       upkeep:0,
       hitpoints:10,
       movement:1,
       attack:0,
       firepower:1,
       defense:1,
       text:'<ul><li>  May be disbanded in a city to recover 50% of the production cost. </li><li>  Can build roads and railroads. </li><li>  Can build mines on tiles. </li><li>  Can build irrigation on tiles. </li><li>  Can build farmland (if Refrigeration is known). </li><li>Can buildfortresses (if Construction is known). </li><li>  Can clean pollution from tiles. </li><li>  Can clean nuclear fallout from tiles.</li><li>  Can build airbases (if Radio is known).</li><li>  May pillage to destroy infrastructure from tiles. </li><li>  A non-military unit (cannot attack; no martial law). </li><li>  Will never achieve veteran status. </li></ul>',
       img: 'http://vignette4.wikia.nocookie.net/freeciv/images/9/9e/U.worker.png',
    },
    granary:{
      name:'Granary',
      type:'building',
      cost:40,
      upkeep:1,
      text:"The amount of stored food will be set to half full whenever a city with a Granary shrinks or grows. This helps a city to grow faster and more easily withstand famine.",
      img: 'http://vignette1.wikia.nocookie.net/freeciv/images/e/ed/B.granary.png/revision/latest?cb=20141017025241'},
    hanging_gardens:{
      name:'Hanging Gardens',
      type:'wonder',
      cost:200,
      text:"Makes one content citizen happy in every city. Makes two extra content citizens happy in the city containing the Hanging Gardens (that is, a total of 3). In the unlikely event where there are no content citizens to get the effect of Hanging Gardens, the wonder applies to unhappy citizens (making them content instead).The discovery of Railroad will make Hanging Gardens obsolete.",
      img: 'http://vignette2.wikia.nocookie.net/freeciv/images/c/ce/B.hanging_gardens.png'
    },
    walls:{
      name:'City Walls',
      type:'building',
      cost: 60,
      upkeep:0,
      text:"City Walls make it easier to defend a city. They triple the defence strength of units within the city against land and helicopter units. They are ineffective against airborne and sea units as well as Howitzers. City Walls also prevent the loss of population which occurs when a defending unit is destroyed by a land unit.",
      img: 'http://vignette2.wikia.nocookie.net/freeciv/images/5/57/B.city_walls.png'
    },
    palace:{
      name:'Palace',
      type:'building',
      cost: 70,
      upkeep:0,
      text:"Makes a city the capital and the center of your government. Losing your current palace also results in losing whatever spaceship you might have. Under Despotism the city containing the palace gains a +75% production bonus, and under Monarchy a +50% production bonus.",
      img:   'http://vignette4.wikia.nocookie.net/freeciv/images/b/b7/B.palace.png'
    },
    great_wall:{
      name:'Great Wall',
      type:'wonder',
      cost: 300,
      text:"Works as a City Wall in all your cities. The discovery of Metallurgy will make Great Wall obsolete.",
      img: 'http://vignette1.wikia.nocookie.net/freeciv/images/b/b3/B.great_wall.png'
    },
    pyramids:{
      name:'Pyramids',
      type:'wonder',
      cost: 200,
      text:"The amount of stored food lost when one of your cities grows or shrinks is reduced by 25%. This helps a city to grow faster and more easily withstand famine. Cumulative with Granary.",
      img: 'http://vignette4.wikia.nocookie.net/freeciv/images/3/36/B.pyramids.png'
    },
    chariot:{
      name:'Chariot',
      type:'unit',
      cost:30,
      upkeep:1,
      hitpoints:10,
      movement:2,
      attack:3,
      firepower:1,
      defense:1,
      text:'<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Counts as "mounted" against certain defenders.</li><li>  May become veteran through training or combat.</li></ul>',
      img: 'http://vignette4.wikia.nocookie.net/freeciv/images/c/c7/U.chariot.png'
    },
    phalanx: {
      name:'Phalanx',
      type:'unit',
      cost:20,
      upkeep:1,
      hitpoints:10,
      movement:1,
      attack:1,
      firepower:1,
      defense:2,
      text:'<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>',
      img: 'http://vignette4.wikia.nocookie.net/freeciv/images/7/7b/U.phalanx.png'
    },
    colossus:{
      name:'Colossus',
      type:'wonder',
      cost: 100,
      text:"Each tile around the city where this wonder is built that is already generating some trade produces one extra trade resource. The discovery of Flight will make Colossus obsolete.",
      img: 'http://vignette2.wikia.nocookie.net/freeciv/images/f/fd/B.colossus.png'
    },
    archers:{
      name:'Archers',
      type:'unit',
      cost:30,
      upkeep:1,
      hitpoints:10,
      movement:1,
      attack:3,
      firepower:1,
      defense:2,
      text:'<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>',
      img: 'http://vignette1.wikia.nocookie.net/freeciv/images/8/86/U.archers.png'
    },
    horsemen:{
    name:'Horsemen',
    type:'unit',
    cost:20,
    upkeep:1,
    hitpoints:10,
    movement:2,
    attack:2,
    firepower:1,
    defense:1,
    text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Counts as 'mounted' against certain defenders.</li><li>  May become veteran through training or combat.</li></ul>",
    img: 'http://vignette3.wikia.nocookie.net/freeciv/images/3/3c/U.horsemen.png'
    },
    courthouse:{
      name:'Courthouse',
      type:'building',
      cost: 60,
      upkeep:1,
      text:"Reduces the corruption and waste in a city by 50%. Under a Democracy, a Courthouse makes 1 unhappy citizen content. Also makes the revolt cost of the city 4 times bigger.",
      img: 'http://vignette4.wikia.nocookie.net/freeciv/images/4/4a/B.courthouse.png'
    },
    library:{
      name:'Library',
      type:'building',
      cost: 60,
      upkeep:1,
      text:"Increases the science output in a city by 100%. Allows University (with University).",
      img: 'http://vignette4.wikia.nocookie.net/freeciv/images/5/53/B.library.png'
    },
     diplomat:{
      name:'Diplomat',
      type:'unit',
      cost:30,
      upkeep:0,
      hitpoints:10,
      movement:2,
      attack:0,
      firepower:1,
      defense:0,
      text:'<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Can perform diplomatic actions.</ul>',
       img: 'http://vignette1.wikia.nocookie.net/freeciv/images/f/fc/U.diplomat.png'
     },
     bomber:{
       name:'Bomber',
       type:'unit',
      cost:120,
      upkeep:1,
      hitpoints:20,
      movement:8,
      attack:12,
      firepower:2,
      defense:1,
      text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  Making an attack ends this unit's turn.</li><li>  A field unit: one unhappiness applies even when non-aggressive.</li><li>  May become veteran through training or combat.</li><li>  Unit has to be in a city, or on a Carrier after 2 turns.</li></ul>",
       img: 'http://vignette4.wikia.nocookie.net/freeciv/images/e/e7/U.bomber.png/revision/latest?cb=20061222000618&format=webp'
     },
     stock_exchange:{
       name:'Stock Exchange',
       type:'building',
       cost: 120,
       upkeep:3,
       text:"Together with a Bank, a Stock Exchange boosts tax and luxury production in a city by 50%. Together with a Marketplace and a Bank, a Stock Exchange boosts tax and luxury production in a city by 150%.",
       img: 'http://vignette2.wikia.nocookie.net/freeciv/images/5/5e/B.stock_exchange.png/revision/latest?cb=20141017031522&format=webp'
     },
     carrier:{
       name:'Carrier',
       type:'unit',
      cost:160,
      upkeep:1,
      hitpoints:40,
      movement:5,
      attack:1,
      firepower:2,
      defense:9,
       text:"<ul><li>  Can carry and refuel 8 air units.</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
       img: 'http://vignette1.wikia.nocookie.net/freeciv/images/c/c1/U.carrier.png/revision/latest?cb=20061222000744&format=webp'
     },
     awacs:{
       name:'AWACS',
       type:'unit',
      cost:140,
      upkeep:1,
      hitpoints:20,
      movement:16,
      attack:0,
      firepower:1,
      defense:1,
      text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li><li>  Unit has to be in a city, or on a Carrier after 2 turns.</li></ul><p>The AWACS (Airborne Warning and Control System) is an airplane with an advanced radar that can determine the location of enemy units over a wide area.</p>",
       img: 'http://vignette3.wikia.nocookie.net/freeciv/images/4/4e/U.awacs.png/revision/latest?cb=20061222005528&format=webp'
     },
      marines:{
       name:'Marines',
       type:'unit',
      cost:60,
      upkeep:1,
      hitpoints:20,
      movement:1,
      attack:8,
      firepower:1,
      defense:5,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Can attack from aboard sea units: against enemy cities and onto land squares.</li><li>  May become veteran through training or combat.</li></ul>",
       img: 'http://vignette3.wikia.nocookie.net/freeciv/images/4/4e/U.awacs.png/revision/latest?cb=20061222005528&format=webp'
      },
      port_facility:{
        name:'Port Facility',
        type:'building',
        cost: 60,
        upkeep:3,
        text:"Allows a city to build veteran sea units. Also, damaged sea units which stay in town for one full turn without moving are completely restored.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/c/c5/B.port_facility.png/revision/latest?cb=20141017030428&format=webp'
      },
      copernicus_observatory:{
        name:'Copernicus Observatory',
        type:'wonder',
        cost: 200,
        text: "Boosts science production by 100% in the city where it is built.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/c/c5/B.port_facility.png/revision/latest?cb=20141017030428&format=webp'
      },
      battleship:{
        name:'Battleship',
        type:'unit',
      cost:160,
      upkeep:1,
      hitpoints:40,
      movement:4,
      attack:12,
      firepower:2,
      defense:12,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/b/be/U.battleship.png/revision/latest?cb=20061222000525&format=webp'
      },
      super_highways:{
        name:'Super Highways',
        type:'building',
        upkeep:3,
        cost: 120,
        text:"Increases trade resources by 50% on all tiles with roads or railroads.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/0/09/B.super_highways.png/revision/latest?cb=20141017031608&format=webp'
      },
      leonardos_workshop:{
        name:"Leonardo's Workshop",
        type:'wonder',
        cost: 400,
        text:"Upgrades one obsolete unit per game turn. The discovery of Automobile will make Leonardo's Workshop obsolete.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/1/1c/B.leonardos_workshop.png/revision/latest?cb=20070226033306&format=webp'
      },
      bank:{
        name:'Bank',
        type:'building',
        cost: 80,
        upkeep: 2,
        text:"Together with the Marketplace improvement, a Bank increases the luxury and tax production within a city by 100%. Allows Stock Exchange (with Economics).",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/8/87/B.bank.png/revision/latest?cb=20141017024411&format=webp'
      },
      knights:{
        name:'Knights',
        type:'unit',
      cost:40,
      upkeep:1,
      hitpoints:10,
      movement:2,
      attack:4,
      firepower:1,
      defense:2,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Counts as 'mounted' against certain defenders.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/4/43/U.knights.png/revision/latest?cb=20061222001114&format=webp'
      },
      paratroopers:{
        name:'Paratroopers',
        type:'unit',
      cost:60,
      upkeep:1,
      hitpoints:20,
      movement:1,
      attack:6,
      firepower:1,
      defense:4,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Can be paradropped from a friendly city or airbase (Range: 10).</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/a/a2/U.paratroopers.png/revision/latest?cb=20061222005331&format=webp'
      },
      helicopter:{
        name:'Helicopter',
        type:'unit',
      cost:100,
      upkeep:1,
      hitpoints:20,
      movement:6,
      attack:10,
      firepower:2,
      defense:3,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  Making an attack ends this unit's turn.</li><li>  A field unit: one unhappiness applies even when non-aggressive.</li><li>  May become veteran through training or combat.</li></ul><p>The Helicopter is a very powerful unit, as it can both fly and conquer cities.  Care must be exercised, because Helicopters lose a small amount of health for every turn not spent in a city, unless you have the United Nations wonder. Helicopters may be attacked by ground units.</p>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/b/bd/U.helicopter.png/revision/latest?cb=20061222005143&format=webp'
      },
      submarine:{
        name:'Submarine',
        type:'unit',
      cost:50,
      upkeep:1,
      hitpoints:30,
      movement:5,
      attack:12,
      firepower:2,
      defense:2,
        text:"<ul><li>  Can carry and refuel 8 missile units.</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  Is invisible except when next to an enemy unit or city.</li><li>  Can only attack units on ocean squares (no land attacks).</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/5/5e/U.submarine.png/revision/latest?cb=20061222003620&format=webp'
      },
      police_station:{
        name:'Police Station',
        type:'building',
        cost: 50,
        upkeep:2,
        text:"Reduces the unhappiness caused by aggressively deployed military units owned by the city by 2 under Democracy and 1 under Republic -- in other words, it neutralises the unhappiness caused by a single military unit. This improvement has no effect under other governments.",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/1/1e/B.police_station.png/revision/latest?cb=20141017030333&format=webp'
      },
      united_nations:{
        name:'United Nations',
        type:'wonder',
        cost: 600,
        text: 'All your units regain two extra hitpoints per turn.',
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/1/17/B.united_nations.png/revision/latest?cb=20070226033529&format=webp'
      },
      marco_polos_embassy:{
        name:"Marco Polo's embassy",
        type:'wonder',
        cost: 200,
        text:"The player who owns it gets an embassy with all players.The discovery of Communism will make Marco Polo's Embassy obsolete.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/5/5b/B.marco_polos_embassy.png/revision/latest?cb=20070226033422&format=webp'
      },
      research_lab:{
        name:'Research Lab',
        type:'building',
        cost: 120,
        upkeep:3,
        text:"Together with a Library, a Research Lab increases the science production of a city by 200%. Together with a Library and a University, a Research Lab increases the science production of a city by 450%",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/4/4a/B.research_lab.png/revision/latest?cb=20141017030720&format=webp'
      },
      seti_program:{
        name:'SETI Program',
        type:'wonder',
        cost: 600,
        text:"Boosts science production in each city with a Research Lab by 100%.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/f/fe/B.seti_program.png/revision/latest?cb=20070226033517&format=webp'
      },
      riflemen:{
        name:'Riflemen',
        type:'unit',
      cost:40,
      upkeep:1,
      hitpoints:20,
      movement:1,
      attack:5,
      firepower:1,
      defense:4,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/5/50/U.riflemen.png/revision/latest?cb=20061222003508&format=webp'
      },
      musketeers:{
        name:'Musketeers',
        type:'unit',
      cost:30,
      upkeep:1,
      hitpoints:20,
      movement:1,
      attack:3,
      firepower:1,
      defense:3,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/2/25/U.musketeers.png/revision/latest?cb=20061222001237&format=webp'
      },
      aqueduct:{
        name:'Aqueduct',
        type:'building',
        cost: 60,
        upkeep:2,
        text:"Allows a city to grow larger than size 8. A Sewer System is also required for a city to grow larger than size 12. Allows Sewer System (with Sanitation).",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/8/85/B.aqueduct.png/revision/latest?cb=20141017024332&format=webp'
      },
      colosseum:{
        name:'Colosseum',
        type:'building',
        cost: 70,
        upkeep:4,
        text:"Entertains the citizens of a city, making 3 unhappy citizens content. (Four after the discovery of Electricity.)",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/3/38/B.colosseum.png/revision/latest?cb=20141017025002&format=webp'
      },
      marketplace:{
        name:'Marketplace',
        type:'building',
        cost: 60,
        upkeep:0,
        text:"Increases the luxury and tax output in a city by 50%. Allows Bank (with Banking).",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/6/6a/B.marketplace.png/revision/latest?cb=20141017025719&format=webp'
      },
      statue_of_liberty:{
        name:'Statue of Liberty',
        type:'wonder',
        cost: 400,
        text:"Allows you to choose any government, including those that have not yet been researched by your civilization, and without the transition period of Anarchy.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/3/38/B.statue_of_liberty.png/revision/latest?cb=20070226033522&format=webp'
      },
      asmiths_trading_co:{
        name:"A.Smith's Trading Co",
        type:'wonder',
        cost: 400,
        text:"City improvements which would normally have an upkeep of 1 are free of upkeep, for all your cities.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/8/8d/B.asmiths_trading_co.png/revision/latest?cb=20070226032936&format=webp'
      },
      destroyer:{
        name:'Destroyer',
        type:'unit',
      cost:60,
      upkeep:1,
      hitpoints:30,
      movement:6,
      attack:4,
      firepower:1,
      defense:4,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/4/4c/U.destroyer.png/revision/latest?cb=20061222004611&format=webp'
      },
      ironclad:{
        name:'Ironclad',
        type:'unit',
      cost:60,
      upkeep:1,
      hitpoints:30,
      movement:4,
      attack:4,
      firepower:1,
      defense:4,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/e/e7/U.ironclad.png/revision/latest?cb=20061222001049&format=webp'
      },
      great_library:{
        name:'Great Library',
        type:'wonder',
        cost: 300,
        text:"The civilization which builds the Great Library gets every advance that at least two other civilizations have achieved. The discovery of Electricity will make Great Library obsolete.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/5/54/B.great_library.png/revision/latest?cb=20070226033134&format=webp'
      },
      hydro_plant:{
        name:'Hydro Plant',
        type:'building',
        cost: 180,
        upkeep:4,
        text:"Increases the effect of Factory and Mfg. Plant on the shield production of a city, and also reduces the amount of pollution generated by that production. A Hydro Plant in combination with either a Factory or Mfg. Plant gives a 75% production bonus over the level without any of these improvements.a Hydro Plant, Factory, and Mfg. Plant together give a 150% production bonus. In each city, only one Power Plant, Hydro Plant, Nuclear Plant, or Solar Plant can take effect at any one time. A city can only build a Hydro Plant if it is next to (or on) a River tile.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/4/44/B.hydro_plant.png/revision/latest?cb=20141017025538&format=webp'
      },
      hoover_dam:{
        name:'Hoover Dam',
        type:'wonder',
        cost:600,
        text:"Works as if you had a Hydro Plant in every city. (This reduces pollution and increases the effects of Factories and Mfg. Plants.) Requires the River terrain special. Must be built by a city on or adjacent to a river tile.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/3/37/B.hoover_dam.png/revision/latest?cb=20070226033222&format=webp'
      },
      king_richards_crusade:{
        name:"King Richard's Crusade",
        type:'wonder',
        cost: 150,
        text:"Adds one extra shield resource on every tile around the city where it is built. The discovery of Robotics will make King Richard's Crusade obsolete.",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/8/8b/B.king_richards_crusade.png/revision/latest?cb=20070226033255&format=webp'
      },
      solar_plant:{
        name:'Solar Plant',
        type:'building',
        cost: 320,
        upkeep:4,
        text:"Increases the effect of Factory and Mfg. Plant on the shield production of a city, and also greatly reduces the amount of pollution generated by that production. A Solar Plant in combination with either a Factory or Mfg. Plant gives a 75% production bonus over the level without any of these improvements, while giving pollution only 50% of the equivalent combination with a Power Plant; a Solar Plant, Factory, and Mfg. Plant together give a 150% production bonus, and eliminates all pollution generated by production in that city. In each city, only one Power Plant, Hydro Plant, Nuclear Plant, or Solar Plant can take effect at any one time.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/3/38/B.solar_plant.png/revision/latest?cb=20100523173751&format=webp'
      },
      spy:{
        name:'Spy',
        type:'unit',
      cost:30,
      upkeep:0,
      hitpoints:10,
      movement:3,
      attack:0,
      firepower:1,
      defense:0,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Can perform diplomatic actions, plus special spy abilities.</li><li>  Ignores zones of control.</li><li>  A non-military unit (cannot attack; no martial law).</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/d/db/U.spy.png/revision/latest?cb=20061222005048&format=webp'
      },
      engineers:{
        name:'Engineers',
        type:'unit',
      cost:40,
      upkeep:1,
      hitpoints:10,
      movement:3,
      attack:0,
      firepower:1,
      defense:1,
        text:"Engineers are similar to Workers, but they work twice as fast and move twice as fast. Engineers may also perform major terrain transformations (for example, converting Tundra into Desert) which are beyond the capabilities of Workers.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/5/55/U.engineers.png/revision/latest?cb=20061222005102&format=webp'
      },
      pikemen:{
        name:'Pikemen',
        type:'unit',
      cost:20,
      upkeep:1,
      hitpoints:10,
      movement:1,
      attack:12,
      firepower:1,
      defense:2,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Gets double defense against units specified as 'mounted'.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/1/14/U.pikemen.png/revision/latest?cb=20061222004854&format=webp'
      },
      sun_tzus_war_academy:{
        name:"Sun Tzu's War Academy",
        type:'wonder',
        cost: 300,
        text:"All your new land units start at the first veteran level. The chance of a land unit getting the next veteran level after a battle increases by half. The discovery of Mobile Warfare will make Sun Tzu's War Academy obsolete.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/2/26/B.sun_tzus_war_academy.png/revision/latest?cb=20070226033539&format=webp'
      },
      warriors:{
        name:'Warriors',
        type:'unit',
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/e/ee/U.warriors.png/revision/latest?cb=20061222001218&format=webp'
      },
      fighter:{
        name:'Fighter',
        type:'unit',
      cost:60,
      upkeep:1,
      hitpoints:20,
      movement:10,
      attack:4,
      firepower:2,
      defense:3,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  Can attack enemy air units.</li><li>  May become veteran through training or combat.</li><li>  Unit has to be in a city, or on a Carrier after 1 turn.</li><li>  Cannot capture enemy city</li></ul>",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/3/32/U.fighter.png/revision/latest?cb=20061222001012&format=webp'
      },
      cure_for_cancer:{
        name:'Cure for Cancer',
        type:'wonder',
        cost: 200,
        text:"This stunning technological achievement makes one unhappy citizen content in all your cities.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/2/20/B.cure_for_cancer.png/revision/latest?cb=20070226033013&format=webp'
      },
      partisan: {
        name:'Partisan',
        type:'unit',
      cost:50,
      upkeep:1,
      hitpoints:20,
      movement:1,
      attack:4,
      firepower:2,
      defense:4,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Ignores terrain effects (treats all squares as roads).</li><li>  Ignores zones of control.</li><li>  May become veteran through training or combat.</li></ul><p>A number of Partisans are granted free when an enemy conquers your city, but only under these conditions:</p><ul><li>  Guerilla Warfare must be known by at least 1 player.</li><li>  You must be the player who originally built the city.</li><li>  You must know about Communism and Gunpowder.</li><li>  You must run either a Democracy or a Communist government.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/7/76/U.partisan.png/revision/latest?cb=20061222004829&format=webp'
      },
      barracks2:{
        name:'Baracks2',
        type:'building',
        cost: 30,
        upkeep: 1,
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/7/7e/B.barracks_ii.png/revision/latest?cb=20141017032146&format=webp'
      },
      coastal_defense:{
        name:'Coastal Defense',
        type:'building',
        cost: 60,
        upkeep:1,
        text:"Increases the defence strength of units within a city by a factor of 2 when defending against bombardments from enemy ships.",
        text:"With a Barracks, each new land unit built in a city will automatically have Veteran status, which means that its attack and defence strengths are increased by 50%. Also, damaged land units which stay in town for one full turn without moving are completely restored. The discovery of Mobile Warfare will make Barracks II obsolete.",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/0/02/B.coastal_defense.png/revision/latest?cb=20141017024757&format=webp'
      },
      barracks:{
        name:'Barracks',
        type:'building',
        cost: 30,
        upkeep: 1,
        text:"With a Barracks, each new land unit built in a city will automatically have Veteran status, which means that its attack and defence strengths are increased by 50%. Also, damaged land units which stay in town for one full turn without moving are completely restored. The discovery of Gunpowder will make Barracks obsolete.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/d/d9/B.barracks_i.png/revision/latest?cb=20141017032028&format=webp'
      },
      transport:{
        name:'Transport',
        type:'unit',
      cost:50,
      upkeep:1,
      hitpoints:30,
      movement:5,
      attack:0,
      firepower:1,
      defense:3,
        text:"<ul><li>  Can carry 8 ground units across water.</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/a/a5/U.transport.png/revision/latest?cb=20061222003639&format=webp'
      },
      factory:{
        name:'Factory',
        type:'building',
        cost: 140,
        upkeep:4,
        text:"Increases the shield production in a city by 50%. This increase may also contribute significantly to pollution. Allows Hydro Plant (with Electronics, River). Allows Mfg. Plant (with Robotics). Allows Nuclear Plant (with Nuclear Power). Allows Power Plant (with Refining). Allows Solar Plant (with Environmentalism). Allows Spaceship parts (with their respective tech requirements).",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/4/40/B.factory.png/revision/latest?cb=20141017025159&format=webp'
      },
      womens_suffrage:{
      name:"Women's suffrage",
      type:'wonder',
      cost:600,
      text:"Counts as a Police Station in every city. (That is, for each city, it reduces the unhappiness caused by aggressively deployed military units owned by that city by 2 under Democracy and 1 under Republic -- in other words, it neutralises the unhappiness caused by a single military unit per city. This wonder has no effect under other governments.)",
      img: 'http://vignette2.wikia.nocookie.net/freeciv/images/6/65/B.womens_suffrage.png/revision/latest?cb=20070226033527&format=webp'
      },
      legion:{
        name:'Legion',
        type:'unit',
      cost:40,
      upkeep:1,
      hitpoints:10,
      movement:1,
      attack:4,
      firepower:1,
      defense:2,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/d/d0/U.legion.png/revision/latest?cb=20061222001141&format=webp'
      },
      mech_inf:{
        name:'Mech inf',
        type:'unit',
      cost:50,
      upkeep:1,
      hitpoints:30,
      movement:3,
      attack:6,
      firepower:1,
      defense:6,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul><p>Mechanized Infantry; this unit has the strongest defence strength of any land unit, but is only available near the end of the technology tree.</p>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/0/0f/U.mech_inf.png/revision/latest?cb=20061222001203&format=webp'
      },
      sdi_defense:{
        name:'SDI Defense',
        type:'building',
        cost: 140,
        upkeep:4,
        text:"Protects a city and its environs (up to 2 tiles away) from attacks by Nuclear units. A Nuclear unit attacking a city with SDI Defense, or attacking a unit (or deliberately exploded) within range, is shot down and simply has no effect. Also, doubles defence for units in the city against non-nuclear missiles.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/c/c4/B.sdi_defense.png/revision/latest?cb=20141017030859&format=webp'
      },
      dragoons:{
        name:'Dragoons',
        type:'unit',
      cost:50,
      upkeep:1,
      hitpoints:20,
      movement:2,
      attack:5,
      firepower:1,
      defense:2,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Counts as 'mounted' against certain defenders.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/2/23/U.dragoons.png/revision/latest?cb=20061222004632&format=webp'
      },
      artillery:{
        name:'Artillery',
        type:'unit',
      cost:50,
      upkeep:1,
      hitpoints:20,
      movement:1,
      attack:10,
      firepower:2,
      defense:1,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/a/a9/U.artillery.png/revision/latest?cb=20061222005123&format=webp'
      },
      cannon:{
        name:'Cannon',
        type:'unit',
      cost:160,
      upkeep:1,
      hitpoints:40,
      movement:4,
      attack:12,
      firepower:2,
      defense:12,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/0/00/U.cannon.png/revision/latest?cb=20061222000655&format=webp'
      },
      galleon:{
        name:'Galleon',
        type:'unit',
        cost:40,
      upkeep:1,
      hitpoints:20,
      movement:4,
      attack:0,
      firepower:1,
      defense:2,
        text:"<ul><li>  Can carry 4 ground units across water.</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/e/ef/U.galleon.png/revision/latest?cb=20061222004738&format=webp'
      },
      frigate:{
        name:'Frigate',
        type:'unit',
      cost:50,
      upkeep:1,
      hitpoints:20,
      movement:4,
      attack:4,
      firepower:1,
      defense:2,
        text:"<ul><li>  Can carry 2 ground units across water.</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/1/13/U.frigate.png/revision/latest?cb=20061222001031&format=webp'
      },
      caravel:{
        name:'Caravel',
        type:'unit',
      cost:40,
      upkeep:1,
      hitpoints:10,
      movement:3,
      attack:2,
      firepower:1,
      defense:1,
        text:"<ul><li>  Can carry 3 ground units across water.</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/9/93/U.caravel.png/revision/latest?cb=20061222003733&format=webp'
      },
      lighthouse:{
        name:'Lighthouse',
        type:'wonder',
        cost:200,
        text:"Gives all your sea units 1 additional movement point and eliminates the risk of losing Triremes on the high seas. Makes all your new sea units veterans (for all your cities). Requires the Ocean terrain. The discovery of Magnetism will make Lighthouse obsolete.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/7/72/B.lighthouse.png/revision/latest?cb=20070226033332&format=webp'
      },
       trireme:{
         name:'Trireme',
         type:'unit',
      cost:40,
      upkeep:1,
      hitpoints:10,
      movement:3,
      attack:1,
      firepower:1,
      defense:1,
         text:"<ul><li>  Can carry 2 ground units across water.</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li><li>  Must end turn in a city or next to land, or has a 50% risk of being lost at sea.</li><li>  The discovery of Seafaring reduces the risk to 25%.</li><li>  Navigation reduces the risk to 12%.</li></ul>",
         img: 'http://vignette2.wikia.nocookie.net/freeciv/images/e/e9/U.trireme.png/revision/latest?cb=20061222003755&format=webp'
       },
      mass_transit:{
        name:'Mass Transit',
        type:'building',
        cost: 120,
        upkeep:4,
        text:"Neutralizes the pollution generated by the population. The population simply has no effect on the pollution generated in the city.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/c/c0/B.mass_transit.png/revision/latest?cb=20141017025823'
      },
      catapult:{
        name:'Catapult',
        type:'unit',
      cost:40,
      upkeep:1,
      hitpoints:10,
      movement:1,
      attack:6,
      firepower:1,
      defense:1,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/7/77/U.catapult.png/revision/latest?cb=20061222000809'
      },
      shakespeares_theatre:{
        name:"Shakespeare's Theatre",
        type:'wonder',
        cost: 200,
        text:"	Makes all unhappy citizens content, in the city where it is located.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/2/2e/B.shakespeares_theatre.png/revision/latest?cb=20070226033520'
      },
      offshore_platform:{
        name:'Offshore Platform',
        type:'building',
        cost: 120,       
        upkeep:3,
        text:"Adds 1 extra shield resource on all Ocean tiles worked by a city. The city needs to be coastal to build this improvement.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/a/ae/B.offshore_platform.png/revision/latest?cb=20141017030201'
      },
      armor:{
        name:'Armor',
        type:'unit',
      cost:80,
      upkeep:1,
      hitpoints:30,
      movement:3,
      attack:10,
      firepower:1,
      defense:5,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/5/57/U.armor.png/revision/latest?cb=20061222000313'
      },
      barracks3:{
        name:'Barracks3',
        type:'building',
        cost: 30,
        upkeep:1,
        text:"With a Barracks, each new land unit built in a city will automatically have Veteran status, which means that its attack and defence strengths are increased by 50%. Also, damaged land units which stay in town for one full turn without moving are completely restored.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/c/c1/B.barracks_iii.png/revision/latest?cb=20141017032252' 
      },
      cavalry:{
        name:'Cavalry',
        type:'unit',
      cost:60,
      upkeep:1,
      hitpoints:20,
      movement:2,
      attack:8,
      firepower:1,
      defense:3,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/1/14/U.cavalry.png/revision/latest?cb=20061222004120'
      },
      cathedral:{
        name:'Cathedral',
        type:'building',
        cost: 80,
        upkeep:3,
        text:"A Cathedral makes 3 unhappy citizens content in a city, making it easier to maintain order in that city. The discovery of Theology increases the effect of a Cathedral, making an additional unhappy citizen content. The discovery of Communism lessens the effect of a Cathedral, reducing by one the number of unhappy citizens made content. Requires the Temple building.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/3/3d/B.cathedral.png/revision/latest?cb=20141017024611'
      },
      michelangelos_chapel:{
        name:"Michelangelo's Chapel",
        type:'wonder',
        cost:400,
        text:"Counts as having a Cathedral in each of your cities. This makes 3 unhappy citizens content in each city. The discovery of Theology increases the effect of a Cathedral, making an additional unhappy citizen content. The discovery of Communism lessens the effect of a Cathedral, reducing by one the number of unhappy citizens made content.",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/7/7b/B.michelangelos_chapel.png/revision/latest?cb=20070318234725'
      },
      magellans_expedition:{
        name:"Magellan's Expedition",
        type:'wonder',
        cost:400,
        text:"Gives all your sea units 2 additional movement points. Requires the Ocean terrain.",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/b/bd/B.magellans_expedition.png/revision/latest?cb=20070226033340'
      },
      manhattan_project:{
        name:'Manhattan Project',
        type:'wonder',
        cost: 600,
        text:"Allows all players with knowledge of Rocketry to build Nuclear units.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/4/42/B.manhattan_project.png/revision/latest?cb=20070226033351'
      },
      nuclear_plant:{
        name:'Nuclear Plant',
        type:'building',
        cost:120,
        upkeep:2,
        text:"Increases the effect of Factory and Mfg. Plant on the shield production of a city, and also reduces the amount of pollution generated by that production. A Nuclear Plant in combination with either a Factory or Mfg. Plant gives a 75% production bonus over the level without any of these improvements, while giving pollution only 75% of the equivalent combination with a Power Plant; a Nuclear Plant, Factory, and Mfg. Plant together give a 150% production bonus with pollution only 50% of the equivalent combination with a Power Plant. In each city, only one Power Plant, Hydro Plant, Nuclear Plant, or Solar Plant can take effect at any one time.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/2/2d/B.nuclear_plant.png/revision/latest?cb=20141017030048'
      },
      space_component:{
        name:'Space Component',
        type:'building',
        cost: 160,
        upkeep:0,
        text:"Space Components can be differentiated into Propulsion and Fuel Components. Each pair of them reduces your spaceship's travel time. You can build up to 8 pairs. Before you can build any spaceship parts, the Apollo Program wonder must have been built by any player, and a factory in the city ordering the Component.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/1/11/B.space_component.png/revision/latest?cb=20141017031150'
      },
      airport:{
        name:'Airport',
        type:'building',
        cost: 120,
        upkeep:3,
        text:"Allows a city to produce veteran air units (including helicopters). Also, damaged air units (including helicopters) which stay in town for one full turn without moving are completely restored.Two cities with Airports can airlift one unit per turn. Airlifting instantly transports the unit from one city to another and will use all of the unit's movement points. A unit must have some movement points left to be airlifted.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/4/4a/B.airport.png/revision/latest?cb=20141017024143'
      },
      darwins_voyage:{
        name:"Darwin's Voyage",
        type:'wonder',
        cost: 300,
        text:"Charles Darwin's voyage sparked the discovery of the evolution of the species, which inspired greater confidence in science. Gives two immediate technology advances.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/3/32/B.darwins_voyage.png/revision/latest?cb=20070226033034'
      },
      recycling_center:{
        name:'Recycling Center',
        type:'building',
        cost: 140,
        upkeep:2,
        text:"Building a Recycling Center reduces the amount of pollution generated by production in a city by 66%.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/b/b6/B.recycling_center.png/revision/latest?cb=20141017030639'
      },
      power_plant:{
        name:'Power Plant',
        type:'building',
        cost: 130,
        upkeep:4,
        text:"Increases the effect of Factory and Mfg. Plant on the shield production of a city. A Power Plant in combination with either a Factory or Mfg. Plant gives a 75% production bonus over the level without any of these improvements; a Power Plant, Factory, and Mfg. Plant together give a 150% production bonus. The extra production may lead to the city generating more pollution. In each city, only one Power Plant, Hydro Plant, Nuclear Plant, or Solar Plant can take effect at any one time.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/8/82/B.power_plant.png/revision/latest?cb=20141017030527'
      },
      supermarket:{
        name:'Supermarket',
        type:'building',
        cost: 80,
        upkeep:3,
        text:"Increases the food resources by 50% on each farmland tile which is being used around the city. Farmland squares are those which have been irrigated a second time.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/a/a8/B.supermarket.png/revision/latest?cb=20141017031700'
      },
      howitzer:{
        name:'Howitzer',
        type:'unit',
      cost:70,
      upkeep:1,
      hitpoints:30,
      movement:2,
      attack:12,
      firepower:2,
      defense:2,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Ignores the effects of city walls.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/7/72/U.howitzer.png/revision/latest?cb=20061222000414',
      },
      mfg_plant:{
        name:'Mfg plant',
        type:'building',
        cost: 220,
        upkeep:6,
        text:"Together with a Factory, a Manufacturing Plant increases the shield production in a city by 100%",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/8/87/B.mfg_plant.png/revision/latest?cb=20141017025932'
      },
      aegis_cruiser:{
        name:"Aegis Cruiser",
        type:'unit',
      cost:100,
      upkeep:1,
      hitpoints:30,
      movement:5,
      attack:8,
      firepower:2,
      defense:8,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  Gets quintuple defence against missiles and aircraft.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/f/ff/U.aegis_cruiser.png/revision/latest?cb=20061222005307'
      },
      cruise_missile:{
        name:'Cruise Missile',
        type:'unit',
      cost:60,
      upkeep:1,
      hitpoints:10,
      movement:12,
      attack:18,
      firepower:3,
      defense:0,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  A missile unit: gets used up in making an attack.</li><li>  A field unit: one unhappiness applies even when non-aggressive.</li><li>  May become veteran through training (but not combat).</li><li>  Unit has to be in a city, or on a Carrier or Submarine after 1 turn.</li></ul>",       
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/8/8e/U.cruise_missile.png/revision/latest?cb=20061222004537'
      },
      nuclear:{
        name:'Nuclear',
        type:'unit',
      cost:160,
      upkeep:1,
      hitpoints:10,
      movement:16,
      attack:99,
      firepower:1,
      defense:0,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  A missile unit: gets used up in making an attack.</li><li>  This unit's attack causes a nuclear explosion.</li><li>  A field unit: one unhappiness applies even when non-aggressive.</li><li>  May become veteran through training (but not combat).</li><li>  Unit has to be in a city, or on a Carrier or Submarine after 1 turn.</li></ul><p>You can build Nuclear units when you have the required advance, and the Manhattan Project wonder has been built by any player.</p><pOn impact, the blast will destroy any unit in a 3x3-square area, including friendly units. When striking a city, the city size is halved, and the surrounding squares are subject to nuclear fallout.</p>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/f/f8/U.nuclear.png/revision/latest?cb=20061222003312'
      },
      sam_battery:{
        name:'SAM battery',
        type:'building',
        cost: 70,
        upkeep:2,
        text:"Doubles the defense of all units inside the city when attacked by aircraft (not including helicopters or missiles).",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/8/86/B.sam_battery.png/revision/latest?cb=20141017030812'
      },
      sewer_system:{
        name:'Sewer System',
        type:'building',
        cost: 80,
        upkeep:2,
        text:"Allows a city to grow larger than size 12. An Aqueduct is first required for a city to grow larger than size 8.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/3/38/B.sewer_system.png/revision/latest?cb=20141017030946'
      },
      space_structural:{
        name:'Space Structural',
        type:'building',
        cost: 80,
        upkeep:0,
        text:"Space Structurals form the base of your spaceship. All other spaceship parts need to be connected to Structurals in order to function. You can build up to 32 Space Structurals. Before you can build any spaceship parts, the Apollo Program wonder must have been built by any player, and a factory in the city ordering the Structural.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/b/b0/B.space_structural.png/revision/latest?cb=20141017031427'
      },
      apollo_program:{
        name:'Apollo Program',
        type:'wonder',
        cost: 600,
        text:"The entire map becomes permanently visible to the player who owns it -- the player always has up-to-date knowledge of all terrain and cities (but not units) despite fog-of-war. It allows all players to start building spaceship parts (assuming they have researched the necessary technologies).",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/6/65/B.apollo_program.png/revision/latest?cb=20070226032937'
      },
      stealth_fighter:{
        name:'Stealth Fighter',
        type:'unit',
      cost:80,
      upkeep:1,
      hitpoints:20,
      movement:14,
      attack:8,
      firepower:2,
      defense:4,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  Can attack enemy air units.</li><li>  Is invisible except when next to an enemy unit or city.</li><li>  May become veteran through training or combat.</li><li>  Unit has to be in a city, or on a Carrier after 1 turn.</li></ul>",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/b/be/U.stealth_fighter.png/revision/latest?cb=20061222005236'
      },
      stealth_bomber:{
        name:'Stealth Bomber',
        type:'unit',
      cost:160,
      upkeep:1,
      hitpoints:20,
      movement:12,
      attack:18,
      firepower:2,
      defense:5,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  Is invisible except when next to an enemy unit or city.</li><li>  Making an attack ends this unit's turn.</li><li>  A field unit: one unhappiness applies even when non-aggressive.</li><li>  May become veteran through training or combat.</li><li>  Unit has to be in a city, or on a Carrier after 2 turns.</li></ul>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/6/61/U.stealth_bomber.png/revision/latest?cb=20061222005221'
      },
      eiffel_tower:{
        name:'Eiffel Tower',
        type:'wonder',
        cost: 100,
        text:"Your reputation and goodwill among other nations is recovered twice as fast.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/3/3b/B.eiffel_tower.png/revision/latest?cb=20070226033126'
      },
      cruiser:{
        name:'Cruiser',
        type:'unit',
      cost:80,
      upkeep:1,
      hitpoints:30,
      movement:5,
      attack:6,
      firepower:2,
      defense:6,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/4/4f/U.cruiser.png/revision/latest?cb=20061222000917'
      },
      space_module:{
        name:'Space Module',
        type:'building',
        cost: 320,
        upkeep:0,
        text:"Space Modules are the most expensive parts of spaceships. There are three different types of Space Module: Habitation Module: provides living space for 10,000 people. Life Support Module: provides food and water for the population of one Habitation Module. Solar Panels: provides the energy needed for any two of the other Modules. You can build up to 4 Space Modules of each kind. Before you can build any spaceship parts, the Apollo Program wonder must have been built by any player, and a factory in the city ordering the Module.",
        img: 'http://vignette1.wikia.nocookie.net/freeciv/images/3/3c/B.space_modules.png/revision/latest?cb=20141017031338'
      },
      alpine_troops:{
        name:'Alpine Troops',
        type:'unit',
      cost:50,
      upkeep:1,
      hitpoints:20,
      movement:1,
      attack:5,
      firepower:1,
      defense:5,
        text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Ignores terrain effects (treats all squares as roads).</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette4.wikia.nocookie.net/freeciv/images/9/96/U.alpine_troops.png/revision/latest?cb=20061222005200'
      },
      freight:{
        name:'Freight',
        type:'unit',
      cost:50,
      upkeep:0,
      hitpoints:10,
      movement:2,
      attack:0,
      firepower:1,
      defense:1,
        text:"<ul><li>  Can establish trade routes (must travel to target city and must be at least 9 tiles in Manhattan distance from this unit's home city).</li><li>  Can help build wonders (adds 50 production).</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Ignores zones of control.</li><li>  A non-military unit (cannot attack; no martial law).</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/e/ee/U.freight.png/revision/latest?cb=20061222004715'
      },
      jsbachs_cathedral:{
        name:"J.S.Bach's Cathedral",
        type:'wonder',
        cost: 400,
        text:"Makes two unhappy citizens content in every city.",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/9/94/B.js_bachs_cathedral.png/revision/latest?cb=20070226033244'
      },
      isaac_newtons_college:{
        name:"Isaac Newton's College",
        type:'wonder',
        cost: 300,
        text:"	Boosts science production by 100% in every city you control that has a University.",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/c/cd/B.isaac_newtons_college.png/revision/latest?cb=20070319003232'
      },
      caravan:{
      name:'Caravan',
      type:'unit',
      cost:50,
      upkeep:0,
      hitpoints:10,
      movement:1,
      attack:0,
      firepower:1,
      defense:1,
      text:"<ul><li>  Can establish trade routes (must travel to target city and must be at least 9 tiles in Manhattan distance from this unit's home city).</li><li>  Can help build wonders (adds 50 production).</li><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Ignores zones of control.</li><li>  A non-military unit (cannot attack; no martial law).</li><li>  May become veteran through training or combat.</li></ul>",
        img: 'http://vignette3.wikia.nocookie.net/freeciv/images/6/63/U.caravan.png/revision/latest?cb=20061222000724&format=webp'
      },
      university:{
        name:'University',
        type:'building',
        cost:120,
        upkeep:3,
        text:"Together with a Library, a University increases the science production of a city by 250%. Allows Research Lab (with Computers).",
        img: 'http://vignette2.wikia.nocookie.net/freeciv/images/0/08/B.university.png/revision/latest?cb=20141017031850&format=webp'
      },
    explorer:{
      name:'Explorer',
      type:'unit',
      cost:30,
      upkeep:0,
      hitpoints:10,
      movement:1,
      attack:0,
      firepower:1,
      defense:1,
      text:"<ul><li>  May be disbanded in a city to recover 50% of the production cost.</li><li>  May fortify, granting a 50% defensive bonus.</li><li>  May pillage to destroy infrastructure from tiles.</li><li>  Ignores terrain effects (treats all squares as roads).</li><li>  Ignores zones of control.</li><li>  A non-military unit (cannot attack; no martial law).</li><li>  May become veteran through training or combat.</li></ul>",
      img: 'http://vignette3.wikia.nocookie.net/freeciv/images/b/b9/U.explorer.png'
    },
  
     harbour:{
       name:'Harbour',
       type:'building',
       cost: 40,
       upkeep:1,
       text:"Gives one extra food resource on all Ocean tiles. The city needs to be coastal to build this improvement.",       
       img: 'http://vignette1.wikia.nocookie.net/freeciv/images/b/be/B.harbour.png/revision/latest?cb=20141017025443'
     }
    }
     
var nodes = {

    alphabet:{
              name: 'Alphabet',
              things:'',
              requires: [],
              layerx: 0,
              layery: 0,
    },
    ceremonial_burial:{
              name:'Ceremonial Burial',
              things:[things.temple],
              requires: [],
              layerx: 0,
              layery: 1
  },
    pottery: {
              name: 'Pottery',
              things: [things.granary, things.workers,things.hanging_gardens],
              requires: [],
              layerx: 0,
              layery: 2
    },
    masonry:{
            name: 'Masonry',
            things: [things.walls,things.palace,things.great_wall, things.pyramids],
            requires: [],
            layerx: 0,
            layery: 3
    },
    
    horseback_riding:{
            name:'Horseback Riding',
            things:[things.horsemen],
            requires: [],
            layerx: 0,
            layery: 4
    },
    bronze_working:{
            name:'Bronze Working',
            things:[things.phalanx,things.colossus],
            requires: [],
            layerx: 0,
            layery: 5,
    },
    warrior_code:{
            name:'Warrior Code',
            things:[things.archers],
            requires: [],
            layerx: 0,
            layery: 6
    },
    writing:{
            name:'Writing',
            things:[things.diplomat, things.library],
            requires:['alphabet'],
            layerx: 1,
            layery:0,
    },
    code_of_laws:{
            name: "Code Of laws",
            things:[things.courthouse],
            requires:['alphabet'],
            layerx: 1,
            layery:1
    },
    mysticism:{
            name: 'Mysticism',
            things: [things.oracle],
            requires:['ceremonial_burial'],
            layerx:1,
            layery:2,
    },
    mathematics:{
            name: 'Mathematics',
            things: [things.catapult],
            requires:['masonry', 'alphabet'],
            layerx: 1,
            layery: 3
    },
    map_making:{
            name: 'Map Making',
            things:[things.lighthouse, things.trireme],
            requires:['alphabet'],
            layerx: 1,
            layery: 4
    },
    polytheism:{
            name: 'Polytheism',
            things: '',
            requires:['alphabet', 'horseback_riding'],
            layerx: 1,
            layery: 5,
            },
    the_wheel:{
            name:'The Wheel',
            things: [things.chariot],
            requires: ['horseback_riding'],
            layerx: 1,
            layery: 6
    },      
    currency:{
            name:'Currency',
            things:[things.marketplace],
            requires:['bronze_working'],
            layerx: 1,
            layery: 7,
    },
    iron_working:{
            name: 'Iron Working',
            things:[things.legion],
            requires:['warrior_code', 'bronze_working'],
            layerx: 1,
            layery: 8
    },
    literacy:{
              name: 'Literacy',
      things:[things.great_library],
      requires:['writing','code_of_laws'],
      layerx:2,
      layery:0
    },
    trade:{
      name:'Trade',
      things:[things.caravan,things.marco_polos_embassy],
      requires:['code_of_laws','masonry'],
      layerx:2,
      layery:1
    },
    monarchy:{
      name:'Monarchy',
      things:[things.monarchy],
      requires:['code_of_laws','ceremonial_burial'],
      layerx:2,
      layery:2
    },
    astronomy:{
      name:'Astronomy',
      things:[things.copernicus_observatory],
      requires: ['mysticism','mathematics'],
      layerx:2,
      layery:3
    },
    seafaring: {
      name: 'Seafaring',
      things: [things.explorer, things.harbour],
      requires: ['pottery','map_making'],
      layerx: 2,
      layery:4
    },
    construction:{
      name: 'Construction',
      things:[things.aqueduct,things.colosseum],
      requires:['masonry','currency'],
      layerx:2,
      layery:5
    },
    the_republic:{
      name: 'The Republic',
      things:[things.the_republic],
      requires:['code_of_laws','literacy'],
      layerx:3,
      layery:0
    },
    philosophy:{
      name: 'Philosophy',
      things: '',
      requires:['mysticism','literacy'],
      layerx:3,
      layery:1
    },
    navigation:{
      name:'Navigation',
      things:[things.caravel,things.magellans_expedition],
      requires:['seafaring','astronomy'],
      layerx:3,
      layery:2
    },
    engineering:{
      name:'Engineering',
      things:[things.king_richards_crusade],
      requires:['the_wheel','construction'],
      layerx:3,
      layery:3
    },
    feudalism:{
      name:'Feudalism',
      things:[things.pikemen, things.sun_tzus_war_academy],
      requires:['warrior_code','monarchy'],
      layerx:3,
      layery:4
    },
    bridge_building:{
      name:'Bridge Building',
      things:'',
      requires:['iron_working','construction'],
      layerx:3,
      layery:5
    },
    banking:{
      name:'Banking',
      things:[things.bank],
      requires:['trade','the_republic'],
      layerx:4,
      layery:0
    },
    medicine:{
      name:'Medicine',
      things:[things.shakespeares_theatre],
      requires:['philosophy','trade'],
      layerx:4,
      layery:1
    },
    university:{
      name: 'University',
      things:[things.university],
      requires:['mathematics','philosophy'],
      layerx:4,
      layery:2
    },
    physics:{
      name:'Physics',
      things:'',
      requires:['literacy','navigation'],
      layerx:4,
      layery:3
    },
    monotheism:{
      name:'Monotheism',
      things:[things.cathedral,things.michelangelos_chapel],
      requires:['philosophy','polytheism'],
      layerx:4,
      layery:4
    },
    invention:{
      name:'Invention',
      things:[things.leonardos_workshop],
      requires:['engineering','literacy'],
      layerx:4,
      layery:5
    },
    chivalry:{
      name:'Chivalry',
      things:[things.knights],
      requires:['feudalism','horseback_riding'],
      layerx:4,
      layery:6
    },
    economics:{
      name:'Economics',
      things: [things.stock_exchange, things.asmiths_trading_co],
      requires:['banking','university'],
      layerx:5,
      layery:0
    },
    chemistry:{
      name:'Chemistry',
      things:'',
      requires:['university','medicine'],
      layerx:5,
      layery:1
    },
    democracy:{
      name:'Democracy',
      things:[things.statue_of_liberty,things.democracy],
      requires:['banking','invention'],
      layerx:5,
      layery:2
    },
    theory_of_gravity:{
      name:'Theory of Gravity',
      things:[things.isaac_newtons_college],
      requires:['currency','code_of_laws'],
      layerx:5,
      layery:3
    },
    steam_engine:{
      name:'Steam Engine',
      things:[things.ironclad,things.eiffel_tower],
      requires:['physics','invention'],
      layerx:5,
      layery:4
    },
    sanitation:{
      name:'Sanitation',
      things:[things.sewer_system],
      requires:['engineering','medicine'],
      layerx:5,
      layery:5
    },
    magnetism:{
      name:'Magnetism',
      things:[things.galleon, things.frigate],
      requires:['iron_working','physics'],
      layerx:5,
      layery:6
    },
    theology:{
      name:'Theology',
      things:[things.jsbachs_cathedral],
      requires:['feudalism','monotheism'],
      layerx:5,
      layery:7
    },
    gunpowder:{
      name:'Gunpowder',
      things:[things.musketeers,things.barracks2,things.coastal_defense],
      requires:['invention','iron_working'],
      layerx:5,
      layery:8
    },
    atomic_theory:{
      name:'Atomic Theory',
      things:'',
      requires:['theory_of_gravity','physics'],
      layerx:6,
      layery:1
    },
    explosives:{
      name:'Explosives',
      things:[things.engineers],
      requires:['gunpowder','chemistry'],
      layerx:6,
      layery:2
    },
    railroad:{
      name:'Railroad',
      things:[things.darwins_voyage],
      requires:['steam_engine', 'bridge_building'],
      layerx:6,
      layery:3
    },
    metallurgy:{
      name:'Metallurgy',
      things:[things.cannon],
      requires: ['invention','iron_working'],
      layerx:6,
      layery:4
    },
    leadership:{
      name:'Leadership',
      things:[things.dragoons],
      requires:['chivalry','gunpowder'],
      layerx:6,
      layery:5
    },
    industrialization:{
      name:'Industrialization',
      things:[things.transport, things.factory, things.womens_suffrage],
      requires:['railroad','banking'],
      layerx:7,
      layery:0
    },
    electricity:{
      name:'Electricity',
      things:[things.destroyer],
      requires:['metallurgy','magnetism'],
      layerx:7,
      layery:1
    },
    conscription:{
      name:'Conscription',
      things:[things.riflemen],
      requires:['democracy','metallurgy'],
      layerx:7,
      layery:2
    },
    the_corporation:{
      name:'The Corporation',
      things: [things.freight],
      requires:['economics','industrialization'],
      layerx:8,
      layery:1
    },
    communism:{
      name:'Communism',
      things:[things.police_station, things.united_nations,things.communism],
      requires:['philosophy','industrialization'],
      layerx:8,
      layery:2
    },
    steel:{
      name:'Steel',
      things: [things.cruiser],
      requires:['electricity','industrialization'],
      layerx:8,
      layery:3
    },
    refrigeration:{
      name:'Refrigeration',
      things: [things.supermarket],
      requires:['sanitation','electricity'],
      layerx:8,
      layery:4
    },
    tactics:{
      name:'Tactics',
      things:[things.alpine_troops, things.cavalry],
      requires:['conscription','leadership'],
      layerx:8,
      layery:5
    },
    genetic_engineering:{
      name:'Genetic Engineering',
      things:[things.cure_for_cancer],
      requires:['medicine','the_corporation'],
      layerx:9,
      layery:0
    },
    refining:{
      name:'Refining',
      things:[things.power_plant],
      requires:['chemistry','the_corporation'],
      layerx:9,
      layery:1
    },
    espionage:{
      name:'Espionage',
      things:[things.spy],
      requires:['communism','democracy'],
      layerx:9,
      layery:2
    },
    electronics:{
      name:'Electronics',
      things:[things.hydro_plant, things.hoover_dam],
      requires:['the_corporation','electricity'],
      layerx:9,
      layery:3
    },
    guerilla_warfare:{
      name:'Guerilla Warfare',
      things:[things.partisan],
      requires:['communism','tactics'],
      layerx:9,
      layery:4
    },
    machine_tools:{
      name:'Machine Tools',
      things:[things.artillery],
      requires:['steel','tactics'],
      layerx:9,
      layery:5
    },
    amphibious_warfare:{
      name:'Amphibious Warfare',
      things:[things.marines],
      requires:['navigation','tactics'],
      layerx:9,
      layery:6
    },
    combustion:{
      name:'Combustion',
      things: [things.submarine],
      requires:['refining','explosives'],
      layerx:10,
      layery:0
    },
    miniaturization:{
      name:'Miniaturization',
      things:[things.offshore_platform],
      requires:['machine_tools','electronics'],
      layerx:10,
      layery:1
    },
    automobile:{
      name:'Automobile',
      things:[things.battleship, things.super_highways],
      requires:['combustion','steel'],
      layerx:11,
      layery:0
    },
    flight:{
      name:'Flight',
      things:[things.fighter],
      requires:['combustion','theory_of_gravity'],
      layerx:11,
      layery:1
    },
    mass_production:{
      name:'Mass Production',
      things:[things.mass_transit],
      requires:['automobile','the_corporation'],
      layerx:12,
      layery:1
    },
    mobile_warfare:{
      name:'Mobile Warfare',
      things:[things.armor, things.barracks3],
      requires:['automobile','tactics'],
      layerx:12,
      layery:2
    },
    radio:{
      name:'Radio',
      things:[things.airport],
      requires:['flight','electricity'],
      layerx:12,
      layery:3
    },
    recycling:{
      name:'Recycling',
      things:[things.recycling_center],
      requires:['mass_production','democracy'],
      layerx:13,
      layery:0
    },
    nuclear_fission:{
      name:'Nuclear Fission',
      things:[things.manhattan_project],
      requires:['mass_production','atomic_theory'],
      layerx:13,
      layery:1
    },
    labor_union:{
      name:'Labor Union',
      things:[things.mech_inf],
      requires:['mass_production', 'guerilla_warfare'],
      layerx:13,
      layery:2
    },
    computers:{
      name:'Computers',
      things:[things.research_lab, things.seti_program],
      requires:['mass_production', 'miniaturization'],
      layerx:13,
      layery:3
    },
    advanced_flight:{
      name:'Advanced Flight',
      things:[things.bomber, things.carrier,things.awacs],
      requires:['radio','machine_tools'],
      layerx:13,
      layery:4
    },
    nuclear_power:{
      name:'Nuclear Power',
      things:[things.nuclear_plant],
      requires:['nuclear_fission','electronics'],
      layerx:14,
      layery:0
    },
    rocketry:{
      name:'Rocketry',
      things:[things.aegis_cruiser, things.cruise_missile, things.nuclear, things.sam_battery],
      requires:['advanced_flight', 'electronics'],
      layerx:14,
      layery:1
    },
    robotics:{
      name:'Robotics',
      things:[things.howitzer, things.mfg_plant],
      requires:['mobile_warfare', 'computers'],
      layerx:14,
      layery:2
    },
    combined_arms:{
      name:'Combined Arms',
      things:[things.paratroopers, things.helicopter],
      requires:['mobile_warfare', 'advanced_flight'],
      layerx:14,
      layery:3
    },
    laser:{
      name:'Laser',
      things:[things.sdi_defense],
      requires:['mass_production', 'nuclear_power'],
      layerx:15,
      layery:0
    },
    space_flight:{
      name:'Space Flight',
      things:[things.space_structural, things.apollo_program],
      requires:['computers','rocketry'],
      layerx:15,
      layery:1
    },
    superconductors:{
      name:'Superconductors',
      things:[things.space_module],
      requires:['nuclear_power','laser'],
      layerx:16,
      layery:1
    },
    plastics:{
      name:'Plastics',
      things:[things.space_component],
      requires:['refining','space_flight'],
      layerx:16,
      layery:2
    },
    fusion_power:{
      name:'Fusion Power',
      things:'',
      requires:['nuclear_power','superconductors'],
      layerx:17,
      layery:0
    },
    stealth:{
      name:'Stealth',
      things:[things.stealth_fighter,things.stealth_bomber],
      requires:['superconductors','advanced_flight'],
      layerx:17,
      layery:1
    }
    
    
  }

var box_lengths = {
    //defines the width of boxes of a specific layer
    0: 5,
    1:3,
    2:3,
    3:3,
    4:3,
    5:4,
    6:3,
    7:4,
    8:4,
    9:4,
    10:3,
    11:3,
    12:4,
    13:4,
    14:4,
    15:3,
    16:4,
    17:3
  }

     //vertical scroll
$('body').on('mousewheel DOMMouseScroll', function(event){
        var delta = Math.max(-1, Math.min(1, (event.originalEvent.wheelDelta || -event.originalEvent.detail)));

        $(this).scrollLeft( $(this).scrollLeft() - delta*20  );
        event.preventDefault();
    });

$('#svg').on('click', function(){
    //reset everything when clicked on empty space

    $('.node').removeClass('inactive');
    $('line').removeClass('inactive');
    $('.node').removeClass('active');
    $('line').removeClass('inactive');
    $('line').css('stroke',stroke);
    $('line').css('stroke-dasharray', dash);
  })


$( window ).on( "load", function(){
  
      var doc_height = $(document).height()
  $('svg').css({height:doc_height})
  function drawNodes(){
    for(let node in nodes){
      var div = document.createElement( "div" );
      var title = document.createElement('div');
      div.className='node';
      div.id=nodes[node].name.replace(/ /gi,'_').toLowerCase();
      div.style.width = box_lengths[nodes[node].layerx]*48+'px';
      div.style.marginLeft=  (nodes[node].layerx+1)*400-400+'px';
      div.style.marginTop= nodes[node].layery*59+'px';
      title.innerHTML=nodes[node].name;
      title.className='title';
      div.appendChild(title);
      
      for(let i=0; i<nodes[node].things.length;i++){
       
      var img=document.createElement('img');
      var img_id = nodes[node].things[i].name.replace(/ /gi,'_').replace(/[.']/gi,'').toLowerCase();
      img.src=nodes[node].things[i].img;
      img.id=img_id;
      div.appendChild(img);
      var pop_up_img=img.cloneNode()
      var pop_up = document.createElement('div');
      var pop_up_title = document.createElement('div');
      var pop_up_text=document.createElement('p');
      pop_up_text.className='pop_up_text';
      pop_up_title.innerHTML=nodes[node].things[i].name;
      pop_up_title.className='pop_up_title';
      pop_up.id='pop_up_'+img_id;
      pop_up.className='pop_up';
      pop_up.style.display='none';
      
      pop_up_img.className='pop_up_img';
      pop_up.appendChild(pop_up_title);
      pop_up.appendChild(pop_up_img);
      if(nodes[node].things[i].type === 'government' ){
        
        pop_up.appendChild(pop_up_title);
        pop_up.appendChild(pop_up_img);
        pop_up_text.innerHTML = nodes[node].things[i].text;
      }
        
      else if(nodes[node].things[i].type === 'wonder' ){
        
        var table = document.createElement('table');
        var title_row = table.insertRow(0);
        var title_cost=title_row.insertCell(0);
        var val_row = table.insertRow(1);
        var val_cost = val_row.insertCell(0);
        
        title_cost.innerHTML='Cost';
        val_cost.innerHTML=nodes[node].things[i].cost;
        pop_up_text.innerHTML = nodes[node].things[i].text;

      }
      else if(nodes[node].things[i].type === 'building' ){
        
        var table = document.createElement('table');
        var title_row = table.insertRow(0);
        var title_cost=title_row.insertCell(0);
        var title_upkeep=title_row.insertCell(1);
        var val_row = table.insertRow(1);
        var val_cost = val_row.insertCell(0);
        var val_upkeep = val_row.insertCell(1);
        
        title_cost.innerHTML='Cost';
        title_upkeep.innerHTML='Upkeep';
        val_cost.innerHTML=nodes[node].things[i].cost;
        val_upkeep.innerHTML=nodes[node].things[i].upkeep;
        pop_up_text.innerHTML = nodes[node].things[i].text;

      }
      
      else if(nodes[node].things[i].type === 'unit' ){
        
        var table = document.createElement('table');        
        var title_row = table.insertRow(0);
        var title_cost=title_row.insertCell(0);
        var title_upkeep=title_row.insertCell(1);
        var title_hitpoints=title_row.insertCell(2);
        var title_movement=title_row.insertCell(3);
        var title_attack=title_row.insertCell(4);
        var title_firepower=title_row.insertCell(5);
        var title_defense=title_row.insertCell(6);
        
        var val_row = table.insertRow(1);
        var val_cost=val_row.insertCell(0);
        var val_upkeep=val_row.insertCell(1);
        var val_hitpoints=val_row.insertCell(2);
        var val_movement=val_row.insertCell(3);
        var val_attack=val_row.insertCell(4);
        var val_firepower=val_row.insertCell(5);
        var val_defense=val_row.insertCell(6);
        
        title_cost.innerHTML='Cost';
        title_upkeep.innerHTML='Upkeep';
        title_hitpoints.innerHTML='HP';
        title_movement.innerHTML='Movement';
        title_attack.innerHTML='Attack';
        title_firepower.innerHTML='FP';
        title_defense.innerHTML='Defense';
        
        val_cost.innerHTML=nodes[node].things[i].cost;
        val_upkeep.innerHTML=nodes[node].things[i].upkeep;
        val_hitpoints.innerHTML=nodes[node].things[i].hitpoints;
        val_movement.innerHTML=nodes[node].things[i].movement;
        val_attack.innerHTML=nodes[node].things[i].attack;
        val_firepower.innerHTML=nodes[node].things[i].firepower;
        val_defense.innerHTML=nodes[node].things[i].defense;
        pop_up_text.innerHTML = nodes[node].things[i].text;
        
       

      }
        pop_up.appendChild(table);
        pop_up.appendChild(pop_up_text);
      
      $('body').append(pop_up);

      }

      $('#tree').append(div);
      

      var coords=$('#'+div.id).offset();
      var x1=coords.left;
      var y1=coords.top+5;
      
      for(let i=0;i<nodes[node].requires.length;i++)
      {
      var offset =box_lengths[nodes[nodes[node].requires[i]].layerx]*48-7;
      
      var coords2=$('#'+nodes[node].requires[i]).offset();
      var x2=coords2.left+offset;
      var y2=coords2.top+5;
      
      var line_svg = document.createElementNS("http://www.w3.org/2000/svg", 'line');
      line_svg.setAttribute('x1',x1);
      line_svg.setAttribute('x2',x2);
      line_svg.setAttribute('y1',y1);
      line_svg.setAttribute('y2',y2);
      line_svg.classList.add(div.id);

      $('svg').append(line_svg);

      }
      
    }
    $("body").html($("body").html());
  }
  drawNodes();
    
  })


$('.node').off('click').on('click',function(){
    
    var line_class = $(this).attr('id');
    var req=nodes[line_class].requires;
    var all_req=[line_class]; //innit
    var next_level=[];
    var current_req;
    
    
    function highlight_req(req_list){
      //recursion! 
     
      next_level=[];
      if(req_list.length===0){
        return;
      }
      for(var i=0;i<req_list.length;i++){
        current_req=nodes[req_list[i]].requires;
        next_level=next_level.concat(current_req);
      }
      all_req=all_req.concat(next_level);;
      highlight_req(next_level);
    }  
      
    highlight_req(req);
   
   /* while(new_req.length!=0){
    for(var i=0;i<req.length;i++){
      all_req=all_req.concat(req);
      new_req=nodes[req[i]].requires;
      console.log(new_req);
      all_req=all_req.concat(new_req);
      
    }
    req=new_req;
    }
    }*/
    
    all_req=all_req.concat(nodes[line_class].requires); //push reqs for first node since its skipped by the recursive function
    all_req=Array.from(new Set(all_req));

      
    $('line').css('stroke',stroke);//reset 
    $('line').css('stroke-dasharray',dash);//reset 
    $('.node').addClass('inactive');
    $('line').addClass('inactive');
    $('.node').removeClass('active');
    $('line').removeClass('active');
      
    for(var z=0;z<all_req.length;z++){
    $('.'+all_req[z]).css('stroke-dasharray',0);  
    $('#'+all_req[z]).addClass('active');
    $('.'+all_req[z]).addClass('active');
    $('#'+all_req[z]).removeClass('inactive');
    $('.'+all_req[z]).removeClass('inactive');
    $('svg').append($('.'+all_req[z])); //z-indx
    $('.'+all_req[z]).css('stroke',stroke_active);
    }
    })


$('img').mouseenter(function(){
   var pop_id='pop_up_'+this.id;
  $('#'+pop_id).show();
                    })

$('img').mousemove(function(e){
  var pop_id='pop_up_'+this.id; 
  var div_height=$('#'+pop_id).height();
  if(e.pageY<340){
     $('#'+pop_id).css({
                   top: e.pageY,
                   left: e.pageX,
                      })
  }
  else{
    $('#'+pop_id).css({
                   top: e.pageY-div_height,
                   left: e.pageX,
                      })}

})

$('img').mouseleave(function(){
  var pop_id='pop_up_'+this.id;
  $('#'+pop_id).hide();
})