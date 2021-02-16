import React, { useState, useEffect, useRef } from 'react';
import Peer from 'peerjs';
import {
  Container,
  Row,
  Col,
  Alert,
  Card,
  CardBody,
  Button,
  Badge,
  Tooltip,
} from "shards-react";

var peer = new Peer();

const App = () => {

  const [myID, setMyID] = useState('')
  const [friendID, setFriendID] = useState('')
  const [mystream, setsMytream] = useState()

  const [stateConnect, setStateConnect] = useState(false)
  const [stateButton, setSateButton] = useState(false)
  let [stateTooltip, setStateTooltip] = useState(false)
  let [stateCopy, setStateCopy] = useState(false)
  let [stateDisConnect, setSateDisConnect] = useState(false)

  const myVideo = useRef();
  const friendVideo = useRef();

  // Set Title
  document.title = myID

  useEffect(() => {

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setsMytream(stream);
      if (myVideo.current) {
        myVideo.current.srcObject = stream;
      }
    })

    peer.on('open', id => {
      setMyID(id);
    });

    peer.on('connection', conn => {
      setStateConnect(true)

      // Receive Data
      conn.on('data', data => {
        setFriendID(data)
      })

    });

    peer.on("disconnect", () => {
      setStateConnect(false)
    });

    // Answer
    peer.on('call', call => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          call.answer(stream)
          call.on('stream', stream => {
            friendVideo.current.srcObject = stream
          })
        })
        .catch((err) => {
          console.error('Failed to get local stream', err);
        });
    })

  }, []);


  function startConnection() {

    const conn = peer.connect(friendID);
    setStateConnect(true)

    // Send Friend ID
    conn.on('open', () => {
      conn.send(friendID)
    })

    peer.on('error', err => {
      if (err.type === 'peer-unavailable')
        alert("The id or peer you're trying to connect to does not exist.")
    })

    // Call
    let call = peer.call(friendID, mystream)
    call.on('stream', stream => {
      friendVideo.current.srcObject = stream
    })

  }

  // DisConnect Peer and Refresh Page
  const DisConnect = () => {
    peer.destroy()
    window.location.reload(false)
  }

  // My Video Conponent
  let MyVideo;
  if (mystream) {
    MyVideo = (
      <video playsInline muted ref={myVideo} autoPlay style={{ maxWidth: "100%" }} />
    );
  }

  // Friend Video Conponent
  let FriendVideo;
  if (friendVideo) {
    FriendVideo = (
      <video playsInline muted ref={friendVideo} autoPlay style={{ maxWidth: "100%" }} />
    );
  }

  const toggleTooltip = () => {
    setStateTooltip(stateTooltip ? false : true)
  }

  const copyMyID = () => {
    setStateCopy(stateCopy ? false : true)
    navigator.clipboard.writeText(myID)
  }

  const togleStateDisConnect = () => {
    setSateDisConnect(stateDisConnect ? false : true)
  }

  const handleChange = (e) => {

    setFriendID(e.target.value)

    if (e.target.value.length > 10)
      setSateButton(true)
    else
      setSateButton(false)

  }

  return (
    <>
      <Container>
        <Row className="mt-2">
          <Col md="6">
            <Alert style={{ marginBottom: "0" }}>
              My Video | Peer is {myID}
            </Alert>
            {MyVideo}
          </Col>

          <Col md="6" style={{ padding: stateConnect ? ('') : ("0"), border: stateConnect ? ('') : ("1px solid #ccc") }}>
            <Alert theme="secondary" style={{ marginBottom: "0" }}>
              Friend Video {friendID ? (`| Peer is ${friendID}`) : ('')}
            </Alert>
            {
              stateConnect ? FriendVideo : (<h3 className="text-center" style={{ marginTop: "20%", color: "#ccc" }}>No video yet</h3>)
            }
          </Col>
        </Row>


        <Card className="mt-5 mb-2">
          <CardBody>
            {
              stateConnect ?
                (
                  <Row>

                    <Col md="3">

                      {
                        stateDisConnect ? (
                          <Badge theme="danger" onMouseLeave={togleStateDisConnect} onClick={DisConnect} style={{ cursor: "pointer" }}>
                            <h4 style={{ marginBottom: "0", padding: "10px", color: "#FFF" }}>
                              DisConnect
                            </h4>
                          </Badge>
                        ) : (
                            <Badge theme="success" onMouseEnter={togleStateDisConnect} >
                              <h4 style={{ marginBottom: "0", padding: "10px", color: "#FFF" }}>
                                Connected Peer ID
                            </h4>
                            </Badge>
                          )
                      }



                    </Col>

                    <Col md="9">
                      <h4 style={{ margin: "0", padding: "10px" }}>
                        {friendID}
                      </h4>
                    </Col>

                  </Row>
                )
                :
                (
                  <Row>
                    <Row>
                      <Col>
                        <h4>

                          <Badge className="mr-3" theme="info">My ID</Badge>
                          <label style={{ cursor: "pointer" }} id="myId" onClick={copyMyID}>
                            {myID}
                          </label>

                        </h4>
                        <Tooltip
                          open={stateTooltip}
                          toggle={toggleTooltip}
                          target="#myId"
                        >
                          {
                            stateCopy ? ("Copied") : ("Clicke to Coppy")
                          }
                        </Tooltip>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="10">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="friendID" placeholder="Enter Friend ID" value={friendID} onChange={e => handleChange(e)} />
                          <label htmlFor="friendID">Enter Friend ID</label>
                        </div>
                      </Col>

                      <Col md="2">
                        {
                          stateButton ? (
                            <Button size="lg" pill theme="success" onClick={startConnection} >Connect</Button>
                          ) : (
                              <Button size="lg" pill theme="success" disabled >Connect</Button>
                            )
                        }
                      </Col>
                    </Row>
                  </Row>
                )
            }

          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default App;