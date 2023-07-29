export const getPassedDateByTimeStamp = (currentTimestamp: number): string => {
  if (currentTimestamp === 0) {
    return "-";
  }
  const today = new Date();
  const current = new Date(currentTimestamp);
  const passedDate = (today.getTime() - current.getTime()) / 1000;
  const date = Math.floor(passedDate / 86400);
  const hours = Math.floor((passedDate % 86400) / 3600);
  const minutes = Math.floor((passedDate % 3600) / 60);
  return `${date}일 ${hours}시간 ${minutes}분`;
};
export const convertTimestampToTimelineFormatSplitDotYearToMonth = (
  currentTimestamp: string | number
): string => {
  if (currentTimestamp === "") {
    return "-";
  }
  const current = new Date(
    typeof currentTimestamp === "number"
      ? currentTimestamp
      : Number.parseInt(currentTimestamp, 10)
  );
  const mm = (current.getMonth() + 1).toString().padStart(2, "0");
  const yyyy = current.getFullYear();

  return `${yyyy}.${mm}.`;
};
