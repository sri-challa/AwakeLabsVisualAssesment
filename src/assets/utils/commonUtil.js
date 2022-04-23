import { Colors } from "./colors";

export function anxietyStateColor(anxietyState) {
  let color = "";
  switch (anxietyState) {
    case "LOW":
      color = Colors.low;
      break;
    case "NORMAL":
      color = Colors.normal;
      break;
    case "MEDIUM":
      color = Colors.medium;
      break;
    case "HIGH":
      color = Colors.high;
      break;
  }
  return color;
}

export function heartRateColor(heartRate) {
  if (heartRate < 70) {
    return Colors.high;
  } else if (heartRate > 120) {
    return Colors.high;
  } else {
    return Colors.black;
  }
}

export function dateAndTime(inputDate) {
  const time = new Date(inputDate);
  const timeString = time.toLocaleTimeString("en-US");
  const dateSting = time.toLocaleDateString("en-US");
  const expandedDate = new Date(dateSting).toDateString();
  const updatedTimeAndDate = {
    updatedTime: timeString,
    updatedDate: expandedDate,
  };

  return updatedTimeAndDate;
}
