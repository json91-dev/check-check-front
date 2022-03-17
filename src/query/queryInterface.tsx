export interface CheckListInterface {
  "id": number,
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
  "elementName": string,
  "subElements": Array<SubElementInterface>,
  "helpTitle": string,
  "helpDescription": string,
  "helpTopics": Array<HelpTopicsInterface>
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

export interface HelpModalState {
  isOpenModal: boolean,
  helpTitle?: string,
  helpDescription?: string,
  helpTopics?: Array<HelpTopicsInterface>
}
