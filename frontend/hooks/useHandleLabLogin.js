import { useEffect, useRef, useState } from "react";

export default function useHandleLabLogin() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [labTime, setLabTime] = useState(3600);
  const [isLabAvailable, setIsLabAvailable] = useState("");
  const [activateTimer, setActivateTimer] = useState("");
  const leftDoor = useRef();
  const rightDoor = useRef();

  // set the time left of the user
  useEffect(() => {
    fetch("/api/getLabTime")
      .then((res) => res.json())
      .then((res) => setLabTime(res.labTime));
  }, []);

  // timer for lab time
  useEffect(() => {
    let timer;
    if (activateTimer === "activate") {
      timer = setInterval(() => {
        setLabTime((t) => t - 1);
      }, 1000);
    }

    return () => {
      if (activateTimer === "activate") {
          console.log("sdscdawe");
          alert(323)
      }
      clearInterval(timer);
    };
  }, [activateTimer]);

  // for logging user in the user
  const handlePassword = function (e) {
    e.preventDefault();

    fetch("/api/loginToLab", {
      method: "post",
      body: JSON.stringify({
        password: e.target[0].value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          setTimeout(() => {
            setErrorMessage("");
          }, 2000);
          return setErrorMessage(res.error);
        }

        setIsPasswordCorrect(true);
        setIsLabAvailable(res.isLabAvailable);
        setLabTime(res.labTime);

        // delay for setting the UI if internet or browser is not fast
        setTimeout(() => {
          setActivateTimer("activate");
        }, 1000);

        if (!res.isLabAvailable) {
          setTimeout(() => {
            setIsLabAvailable("");
          }, 2000);
        }
      });
  };

  // close the lab and reset the page
  const exitLab = function () {
    setActivateTimer("");
    setIsLabAvailable("");
    setIsPasswordCorrect("");
    setErrorMessage("");

    fetch("/api/exitLab", {
      method: "post",
      body: JSON.stringify({
        timeLeft: labTime,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log("updated");
      });
  };

  return {
    isPasswordCorrect,
    leftDoor,
    rightDoor,
    handlePassword,
    errorMessage,
    isLabAvailable,
    activateTimer,
    labTime,
    exitLab,
  };
}
