var peer = new Peer('test1', {host: 'localhost', port: 9000}); 

var conn = peer.connect('test2');
conn.on('open', function(){
  conn.send('hi!');
  console.log("test");
});

var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
getUserMedia({video: true, audio: true}, function(stream) {
  var call = peer.call('another-peers-id', stream);
  call.on('stream', function(remoteStream) {
    // Show stream in some video/canvas element.
  });
}, function(err) {
  console.log('Failed to get local stream' ,err);
});