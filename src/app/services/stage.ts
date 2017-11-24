import {Notice} from '../reducer/notice';
export {Notice}

export interface AppStage {
  notices: Notice[];
  visualFilter: string;
}
