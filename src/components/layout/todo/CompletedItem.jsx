import { FcCheckmark } from "react-icons/fc";

export default function CompletedItem({ doneItem }) {
  const { task, date, time } = doneItem;
  return (
    <div className="block p-3">
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <FcCheckmark />
          </div>
          <div className="level-item">
            <p className="subtitle is-6">{task}</p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item px-3">
            <p className="subtitle is-6">{time + " | " + date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
