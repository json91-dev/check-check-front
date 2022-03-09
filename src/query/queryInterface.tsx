export interface CheckListInterface {
  "id": number,
  "subjectTitle": string,
  "subTitle": string,
  "imageUrl": string,
  "checkListSections": Array<CheckListSectionsInterface>
}

export interface CheckListSectionsInterface {
  "id": number,
  "sectionTitle": string,
  "checkListElements": Array<CheckListElementsInterface>
}

export interface CheckListElementsInterface {
  "id": number,
  "elementName": string,
  "subElements": Array<SubElementsInterface>,
  "helpTitle": string,
  "helpDescription": string,
  "helpTopics": Array<HelpTopicsInterface>
}

export interface SubElementsInterface {
  "id": number,
  "iconUrl": string,
  "subElementTitle": string,
  "subElementDescription": string
}

export interface HelpTopicsInterface {
  "id": number,
  "helpTopic": string
}
