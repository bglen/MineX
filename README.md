MineX
=====

2.5D space shooter/open world iOS concept currently being worked on. Made with Unity 4.

Potential Features:
Gameplay:
  - player ship navigates randomly generated level of planets, asteroids, space stations, and other ai
  - player can mine asteroids for the chance of harvesting ores and materials, which they can sell for profit
    - rare ores are more valuable and occur less often
  - fuel limit causes player to have limited range away from planets
  - Sandbox Non - Linear Gameplay, similar to Minecraft
  - 3D projected as 2.5D shooter
  - enemy ai will seek you out as you noteriety goes up
  - space stations
    - Netural(yellow target box)
    - Friendly(blue target box)
    - Hostile(red target box)
    - modular construction
    - eventually players will be able to buy and place space stations
      - player will then be able to recruit piolts
      - able to keep more than one ship
      - advanced wingman features, and be able to control a fleet of ships
      - able to recruit a boarding party, to take over ai ships and space stations
      - hold hostages for ransom
    - friendly stations can be docked with and traded with
  - friendly planets can be landed on and traded with
  - blow up planets and shit
  - research weapons/tech(probably will require space station)
  - hold whole planets hostage(why not?)


Maps:
  - on creation, player can select size of map(big, medium, small) and player ship(more become unlocked as player progresses)
  - maps are set up on grids(technicly cubes, since it's 3d) for asteroids, planets, spacestaions, and other stationary stuff
    -moving entites(player ship, ai ships) are not restricted by the invisible grid
  - randomly generated via liner interpolated random number script(allows grouping, so not totally random, but yeilds better maps)
    - certain "rules" apply, keeping gameplay in order
  - No boundaries, limited by the point of no return on fuel
  - planets have small amount of gravity
  - 1 sun per map, 5x more gravitational pull than planets(relativyl unrealistic, but for gameplay purposes)

To Do:
  - basic models
    - 2 ship models(1 player)
    - 3 or 4 asteriod models
    - planet model(basicly a low poly sphere)
    - sun model will just be scaled up planet w/ sun texture & effects/animations
    - textures for all
  - basic effects(engine glare, weapon fire)
  - code in random level generation for:
    - asteriods, then
    - planets
      - boundaries of where planets can spawn change depending on map size
        - also result in slighty different map sizes each time
  - add in bottom skybox for starmap(selects randomly from a list)
  - touch controls for ship(add weapons control too since it is dependent on a touch control)
  - basic ai
  - 
