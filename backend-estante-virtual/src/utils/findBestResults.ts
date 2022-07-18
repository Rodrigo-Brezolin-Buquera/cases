import { CompetitionResults } from "../model/CompetitionsResults";

export const findBestResults = (resultsList: CompetitionResults[]): any => {
  const athletesNames: string[] = [];
  resultsList.forEach((item) => {
    athletesNames.push(item.athlete);
  });

  const filteredList: string[] = athletesNames.filter(
    (elem: any, index: any, self: any) => {
      return index === self.indexOf(elem);
    }
  );

  const athletesList = filteredList.map((item) => {
    const list = resultsList.filter((res) => res.athlete === item);
    return list[0];
  });

  return athletesList;
};
