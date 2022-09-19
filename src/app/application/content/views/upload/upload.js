
// var io = require('socket.io-client');
// var ss = require('socket.io-stream');


const socket = io('http://localhost:3000/upload');

// var stream = ss.createStream();

// ss(socket).emit('profile-image', stream, {name: filename});
// fs.createReadStream(filename).pipe(stream);

const upload = (files,videoStream,videoDescription,videoTitle) => {

  socket.on("connect", () => {
    console.log(socket.id);
  });

  files.videoDescription = videoDescription;
  files.videoTitle = videoTitle;

  socket.on("thumbnailUploadReply", (doc) => {
    console.log("thumbnailUploadReply", videoStream)
    if (doc){
      uploadProceed(videoStream, doc)
    }
  })


  uploadProceed(files)

}

const uploadProceed = (files,pulledData) => {

  socket.on("connect", () => {
    console.log(socket.id);
  });

  // socket.on("thumbnailUploadReply", (doc) => {
  //   console.log("thumbnailUploadReply", videoStream)
  //   upload(videoStream)
  // })

  var file = files;
  var stream = ss.createStream();

  console.log(file)
  // upload a file to the server.
  // ss(socket).emit('file', stream, {size: file.size});
  // ss.createBlobReadStream(file).pipe(stream);

  socket.on("videoUpload", file)

  ss(socket).emit('upload', stream,
  {
    size: file.size,
    name: file.name,
    videoTitle: file.videoTitle,
    videoDescription: file.videoDescription,
    pull: pulledData
  });

  ss.createBlobReadStream(file).pipe(stream);

  // socket.emit("upload", files[0], (status) => {
  //   console.log(status);

  // });

  // $('#file').change(function(e) {
  //   var file = e.target.files[0];
  //   var stream = ss.createStream();

  //   // upload a file to the server.
  //   ss(socket).emit('file', stream, {size: file.size});
  //   ss.createBlobReadStream(file).pipe(stream);
  // });



}

export { upload }
