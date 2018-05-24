<script type="text/javascript" charset="utf-8">
var Key = {
  _pressed: {},

  A: 65,
  D: 68,

  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },

  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },

  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

function gamePlay() {
  if (Key.isDown(Key.A)) return "A";
  if (Key.isDown(Key.B)) return "B";
}
</script>
