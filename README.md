MineX
=====

2.5D space shooter/open world iOS concept currently being worked on. Made with Unity 4.

Features:
Gameplay:
- player ship navigates randomly generated level of planets, asteroids, space stations, and other ai
- Sandbox Non - Linear Gameplay, similar to Minecraft
- 3D projected as 2.5D shooter
- enemy ai will seek you out as you noteriety goes up
- space stations
  - Netural(yellow target box)
  - Friendly(blue target box)
  - Hostile(red target box)
  - modular construction

Maps:
  - maps are set up on grids(technicly cubes, since it's 3d) for asteroids, planets, spacestaions, and other stationary stuff
    -moving entites(player ship, ai ships) are not restricted by the invisible grid
  - randomly generated via liner interpolated random number script(allows grouping, so not totally random, but yeilds better maps)
    - certain "rules" apply, keeping gameplay in order
  - No boundaries, limited by fuel
  - planets have small amount of grtavity
  - 1 sun per map, 5x more gravitational pull than planets(unrealistic, but for gameplay purposes)
  - 
