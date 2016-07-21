# livecode.snake
The classic Snake game implemented in LiveCode 8.0.

THE CLASSIC SNAKE GAME

Fully playable with scores

Implementation

The snake is made of a simple array (gcARR) where we keep track on the tail (the last pixel) and generate new pixels for
the head that we add first to the array. For collission detection the code uses simple coordinate checks  and check the
array for the snake's all pixel to see if the snake collides with itself.

To move the snake we only add new pixel for the head and remove the last pixel for the tail and update the array.

* Compiled and tested on OSX El Capitan and Linux (Debian 8 , Ubuntu/Peppermint 16.0.4/7, Fedora 23
* Icons included for OSX and for Linux.
* Use keys "A" to move snake in a left pattern and "D" to move snake in a right pattern.


TODO:

* Make code hopefully compatible with HTML5 so it can be used with a browser.
* Save your highscores not implemented yet.
* Implement support for playing on iOS device.


![My image](https://cloud.githubusercontent.com/assets/188215/17019034/cb0d9be2-4f3a-11e6-8e08-1f3bc7b03342.png)
