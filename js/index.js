var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var buffers = {};
var sources = {};

function playSound(soundName) {
  if (sources[soundName]) {
    sources[soundName].stop(0);
    delete sources[soundName];
    return;
  }

  var source = audioCtx.createBufferSource();
  source.buffer = buffers[soundName];
  source.loop = false;
  source.connect(audioCtx.destination);

  source.start(0);
  source.onended = function() {
    delete sources[soundName];
  };

  sources[soundName] = source;
}
function loadSound(soundName) {
  var request = new XMLHttpRequest();

  request.open('GET', 'sounds/' + soundName + '.m4a', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        buffers[soundName] = buffer;
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();

}

window.onload = function soundsBootstrap() {
  var sounds = [
    'alexOhNo',
    'andrewKeyboard',
    'colbyLookIntoIt',
    'colbyNights',
    'danniNo',
    'danniOhMatt',
    'donOhGod',
    'gibronJustThinking',
    'jeffHuh',
    'jeffNope',
    'jeffWat',
    'jk2Bugs1',
    'jk2Bugs2',
    'jk2Cookie',
    'joBeerOclock',
    'jordan',
    'markBadGateway',
    'mikeOkGuy',
    'rachAskYou',
    'rossGoTeam',
    'devonTheFuture',
    'devonItWorks'
  ];
  for (var i=0; i<sounds.length; i++) {
    loadSound(sounds[i]);
  }

}


/*
List of sounds

Jeff - wat
Mark - ayyooo
Danni - your mums (face)
Devon - oh noes
devon - the future
jk2 - it is buuug
jk2 - grover noise
ross - go team
ross - laptop fan
ryan - hey
ahmed -
chelsea -
colby - ? motocycle?
jordan - "guys"
jordan - "deadline... 2 days"
matt
jov - language
andrew - aws or proxie?
nino - hawaiian or analagy
joao - ppop in portugeuse
thai - punching with noise
rachel - starwars light saber








*/




