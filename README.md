# Chess-Like Game

This project is a web-based, turn-based chess-like game that allows two players to compete in real-time using a server-client architecture. The game is built with a combination of HTML, CSS, JavaScript, and Socket.IO for real-time communication.

## Instructions

- **Search for second player:** The game uses websockets to enable real-time communication between two players. Enter your name and search for second player.
- **Player characters:** Each player gets 5 characters- 3 pawns, 1 hero1 and 1 hero2. 
- **Valid moves:**
1. Pawn:
Moves one block in any direction (Left, Right, Forward, or Backward).
Move commands: L (Left), R (Right), F (Forward), B (Backward)
2. Hero1:
Moves two blocks straight in any direction.
Kills any opponent's character in its path.
Move commands: L (Left), R (Right), F (Forward), B (Backward)
3. Hero2:
Moves two blocks diagonally in any direction.
Kills any opponent's character in its path.
Move commands: FL (Forward-Left), FR (Forward-Right), BL (Backward-Left), BR (Backward-Right)
- **Winning the game:** The game ends when one player eliminates all of their opponent's characters.


