import { IStatus } from "./statuses";
const mockColumns = [
    {
      id: IStatus.OPEN,
      title: 'Open',
      cardsIds: ['5be53f27-a69c-4128-bf40-86cd572267a5', '6ed5a4b0-1e2c-4b71-ab42-e740f02da496', '55cac86b-c223-4eed-992a-e231e9232d42']
    },
    {
      id: IStatus.CONTACTED,
      title: 'Contacted',
      cardsIds: ['a04170d8-5f03-4a97-bbd7-cbc9516d0840']
    },
    {
      id: IStatus.WRITTENTEST,
      title: 'Written test',
      cardsIds: ['2fab1909-0b9f-4783-976c-4ffecb805ac5']
    },
    {
      id: IStatus.WRITTENTESTCOMPLETED,
      title: 'writtentestcompleted',
      cardsIds: ['32eb3393-eddc-487a-abc3-1c199b86c4a2']
    }
  ];
  
export default mockColumns;