export interface CheckListInterface {
  "id": number,
  "email": string,
  "subjectId": number
  "subjectTitle": string,
  "subTitle": string,
  "imageUrl": string,
  "checkListSections": Array<CheckListSectionInterface>
}

export interface CheckListSectionInterface {
  "id": number,
  "sectionTitle": string,
  "checkListElements": Array<CheckListElementInterface>
}

export interface CheckListElementInterface {
  "id": number,
  "elementTitle": string,
  "checked": boolean,
  "helpTitle": string,
  "helpDescription": string,
  "helpTopics": Array<HelpTopicsInterface>,
  "subElements": Array<SubElementInterface>
}

export interface SubElementInterface {
  "id": number,
  "iconUrl": string,
  "subElementTitle": string,
  "subElementDescription": string
}

export interface HelpTopicsInterface {
  "id": number,
  "helpTopic": string
}

