import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const userWon = remainingTime > 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>Time's up!</h2>}
        {userWon && (
          <h2>
            Congratulations! <br></br>Your score is {score}
          </h2>
        )}
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with <strong>{formattedRemainingTime}.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;
