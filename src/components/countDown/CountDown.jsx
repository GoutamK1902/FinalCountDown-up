// import { useState, useEffect, useRef } from "react";
// import "./styles.css";

// interface CountdownProps {
//   startFrom: number;
// }

// const CountDown = ({ startFrom }: CountdownProps) => {
//   const [counter, setCounter] = useState<number>(startFrom);
//   const [showTimer, setShowTimer] = useState(false);
//   const [showButton, setShowButton] = useState(true); // New state for button visibility
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   // Start the countdown effect
//   useEffect(() => {
//     if (showTimer) {
//       setCounter(3); // Reset counter each time countdown starts
//       intervalRef.current = setInterval(() => {
//         setCounter((prev) => {
//           if (prev > 0) {
//             return prev - 1; // Decrement counter
//           } else {
//             clearInterval(intervalRef.current!);
//             setShowTimer(false); // Hide the timer
//             redirectToWebsite(); // Redirect to the website immediately
//             return prev; // Return prev to ensure a number is always returned
//           }
//         });
//       }, 1000);
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [showTimer, startFrom]); // Adding startFrom to dependencies

//   const startCountdown = () => {
//     setShowTimer(true); // Start the countdown
//     setShowButton(false); // Hide the button after click
//   };

//   const redirectToWebsite = () => {
//     window.location.href = "https://enigma.jimsd.org/"; // Change this to your desired URL
//   };

//   return (
//     <div className="countDownCard">
//       {showButton && ( // Conditional rendering for the button
//         <button onClick={startCountdown} className="btn ">
//           Launch Now!
//         </button>
//       )}
//       {showTimer && <h1 className="countdown">{counter}</h1>}{" "}
//       {/* Show counter */}
//     </div>
//   );
// };

// export default CountDown;

import { useState, useEffect, useRef } from "react";
import "./styles.css";

const CountDown = ({ startFrom }) => {
  const [counter, setCounter] = useState(startFrom);
  const [showTimer, setShowTimer] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (showTimer) {
      setCounter(3);
      intervalRef.current = setInterval(() => {
        setCounter((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(intervalRef.current);
            setShowTimer(false);
            redirectToWebsite();
            return prev;
          }
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [showTimer, startFrom]);

  const startCountdown = () => {
    setShowTimer(true);
    setShowButton(false);
  };

  const redirectToWebsite = () => {
    window.location.href = "https://enigma.jimsd.org/";
  };

  return (
    <div className="countDownCard">
      {showButton && (
        <button onClick={startCountdown} className="btn">
          Launch Now
        </button>
      )}
      {showTimer && <h1 className="countdown">{counter}</h1>}
    </div>
  );
};

export default CountDown;
