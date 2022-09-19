const videoSocket = () => {
  let peerConnections = [];
  let peerConnection = new RTCPeerConnection();
  peerConnections.push(peerConnection);
  console.log(peerConnection[0]);
  let localStream;
  let remoteStream;

  var socket = io("http://localhost:3001/");

  let text = window.location.href
  let locationResult = text.replace("#/", "");

  var url = new URL(locationResult);
  let room = url.searchParams.get("room");

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  if (room == "" || room == null){
    room = makeid(20)
  }

  socket.on("connect", () => {
    console.log(socket.id);

    console.log(room);
    socket.emit("join-room", room);
  });

  socket.on("room-connection", (data) => {
    createAnswer(data);
  });

  socket.on("room-connection-answer", (answer) => {
    // console.log('answer', JSON.stringify(answer))
    document.getElementById("answer-sdp").value = JSON.stringify(answer);
    addAnswer(answer);
  });

  let screenCount = 2;

  let init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    document.getElementById("user-1").srcObject = localStream;
    // document.getElementById('user-2').srcObject = remoteStream
    // const newDiv = "<video class='video-player' id='user-2' autoplay playsinline></video>"
    // newDiv.id = 'user-2'

    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        const newDiv = document.createElement("video");
        newDiv.setAttribute("autoplay", "true");
        newDiv.setAttribute("playsinline", "true");
        newDiv.setAttribute("id", `user-${screenCount}`);
        newDiv.className = "video-player"
        newDiv.setAttribute("style", `width: 200px;`);

        const vids = document.getElementById("videos");
        vids.appendChild(newDiv);

        let rs = new MediaStream();

        newDiv.srcObject = rs;

        screenCount++;

        rs.addTrack(track);
      });
    };

    createOffer();
  };

  let createOffer = async () => {
    peerConnection.onicecandidate = async (event) => {
      //Event that fires off when a new offer ICE candidate is created
      if (event.candidate) {
        document.getElementById("offer-sdp").value = JSON.stringify(
          peerConnection.localDescription
        );
        socket.emit("room-connection", {
          offer: peerConnection.localDescription,
          room,
          who: socket.id,
        });
      }
    };

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
  };

  let createAnswer = async (data) => {
    // let offer = JSON.parse(document.getElementById('offer-sdp').value)

    peerConnection.onicecandidate = async (event) => {
      //Event that fires off when a new answer ICE candidate is created
      if (event.candidate) {
        // console.log('Adding answer candidate...:', event.candidate)
        document.getElementById("answer-sdp").value = JSON.stringify(
          peerConnection.localDescription
        );
        socket.emit("room-connection-answer", {
          answer: peerConnection.localDescription,
          room,
          who: data.who,
        });
      }
    };

    await peerConnection.setRemoteDescription(data.offer);

    let answer = await peerConnection.createAnswer(data.offer);
    await peerConnection.setLocalDescription(answer);
    // console.log("answer")
  };

  let addAnswer = async (answer) => {
    // console.log('Add answer triggerd', JSON.stringify(answer))
    // let answer = JSON.parse(document.getElementById('answer-sdp').value)
    // answer = JSON.parse(answer)
    // console.log('answer:', answer)
    if (!peerConnection.currentRemoteDescription) {
      peerConnection.setRemoteDescription(answer);
    }
  };

  init();

  document
    .getElementById("create-offer")
    .addEventListener("click", createOffer);
  document
    .getElementById("create-answer")
    .addEventListener("click", createAnswer);
  document.getElementById("add-answer").addEventListener("click", addAnswer);

  return {room,socket};
};


export {
  videoSocket
}
