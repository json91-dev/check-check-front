import {useQuery} from "react-query";
import {getUserCheckListBySubjectId} from "@query/useUserCheckList";
import {defaultQueryOptions} from "@query/options";

const getTotalChecked = (checkList) => {
  const {checkListSections} = checkList
  let total = 0;
  let current = 0;

  for (const section of checkListSections ) {
    for (const element of section.checkListElements) {
      if (element.checked) {
        current = current + 1;
      }
      total = total + 1
    }
  }

  return {total, current}
}

const useCheckProgress = (subjectId) => {
  const { data: checkList, isFetching } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);

  if (checkList) {
    const { total, current } = getTotalChecked(checkList)
    return {
      total,
      current,
    }
  }
  return {
    total: 0,
    current: 0
  }
}

export default useCheckProgress;
