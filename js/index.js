var audioCtx = new AudioContext();

function playSound(soundName) {
  // sources[soundName].stop(0);
  sources[soundName].start(0);
}
function loadSound(soundName) {
  var source = audioCtx.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', 'sounds/' + soundName + '.m4a', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        source.buffer = buffer;

        source.connect(audioCtx.destination);
        source.loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();
  return source;

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
  sources = {};
  for (var i=0; i<sounds.length; i++) {
    sources[sounds[i]] = loadSound(sounds[i]);
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




