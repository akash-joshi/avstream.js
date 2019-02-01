const record = document.querySelector('#startbutton')
const stop = document.querySelector('#stopbutton')
const running = document.querySelector('#running')
const { MediaRecorder, Blob } = window

let num=1;
let flag=true
// disable stop button while not recording

stop.disabled = true

// main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported.')

  const constraints = { audio: true }
  let chunks = [];

  const onSuccess = (stream) => {
    //const mediaRecorder = new MediaRecorder(stream)
    const mediaStream = new AVStream(stream)
    console.log(mediaRecorder)

    const record_and_send = (mediaRecorder) => {
       console.log(num)

       if(mediaRecorder.state != 'recording')
        mediaRecorder.start()

       setTimeout(()=> {
        if(mediaRecorder.state != 'inactive'){
          mediaRecorder.stop()
        }
        }, 3000);
    }

    const startFunc = (mediaRecorder) => {
      console.log(mediaRecorder)
      repeat = setInterval(()=>{record_and_send(mediaRecorder)}, 3000);
    }

    const stopFunc = () => {
      clearInterval(repeat)
    }

    record.onclick = () => {
      if(mediaRecorder.state != 'recording')
        mediaRecorder.start(3000)
      setTimeout(()=> {
        if(mediaRecorder.state != 'inactive')
          mediaRecorder.stop()}, 3000);
      startFunc(mediaRecorder)
      console.log(mediaRecorder.state)
      console.log('recorder started')
      running.style.display = ""
      stop.disabled = false
      record.disabled = true
      record.style.display = "none"
    }

    stop.onclick = () => {
      stopFunc()
      console.log(mediaRecorder.state)
      console.log('recorder stopped')
      running.style.display = "none"
      record.style.display = ""
      stop.disabled = true
      record.disabled = false
    }

    mediaRecorder.onstop = () => {
      console.log('data available after MediaRecorder.stop() called.')
      console.log('recorder stopped')
      const blob = new Blob(chunks, { 'type' : 'audio/wav' })
      const fd = new FormData();
      fd.append('fname', num+'.wav');
      fd.append('data', blob);
      num++
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/voice-checker',
        data: fd ,
        processData: false,
        contentType: false
      }).done(function(data) {
           console.log(data);
      });
      chunks = [];
      mediaRecorder.start()
    }

    mediaRecorder.ondataavailable = e => chunks.push(e.data);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess).catch((err)=>{console.error(err)})
} else {
  console.error('getUserMedia not supported on your browser!')
}