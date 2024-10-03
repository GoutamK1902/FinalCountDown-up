import { useState, useEffect, useRef } from "react";
import "./styles.css";

interface CountdownProps {
  startFrom: number;
}

const CountDown = ({ startFrom }: CountdownProps) => {
  const [counter, setCounter] = useState<number>(startFrom);
  const [showTimer, setShowTimer] = useState(false);
  const [showButton, setShowButton] = useState(true); // New state for button visibility
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start the countdown effect
  useEffect(() => {
    if (showTimer) {
      setCounter(3); // Reset counter each time countdown starts
      intervalRef.current = setInterval(() => {
        setCounter((prev) => {
          if (prev > 0) {
            return prev - 1; // Decrement counter
          } else {
            clearInterval(intervalRef.current!);
            setShowTimer(false); // Hide the timer
            redirectToWebsite(); // Redirect to the website immediately
            // Stop the interval inside setCounter
          }
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [showTimer, startFrom]); // Adding startFrom to dependencies

  const startCountdown = () => {
    setShowTimer(true); // Start the countdown
    setShowButton(false); // Hide the button after click
  };

  const redirectToWebsite = () => {
    window.location.href = "https://www.amazon.in/"; // Change this to your desired URL
  };

  return (
    <div className="countDownCard">
      {showButton && ( // Conditional rendering for the button
        <button onClick={startCountdown} className="btn ">
          Engine Start
        </button>
      )}
      {showTimer && <h1 className="countdown">{counter}</h1>}{" "}
      {/* Show counter */}
    </div>
  );
};

export default CountDown;
