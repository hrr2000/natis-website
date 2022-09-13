import {FaRegClock} from "react-icons/fa";
import moment from "moment";

export default function RelativeDate({date_string, icon}: any) {
  return (
    <span className={`flex items-center`}>
      {icon && (
        <span className={`me-2`}>
          <FaRegClock />
        </span>
      )}
      <span>
        {date_string && moment(date_string).fromNow()}
      </span>
    </span>
  )
}
