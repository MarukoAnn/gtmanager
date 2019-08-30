export class Area {
  data?: Data;
  children?: Area[];
}
/*export class AddTreeArea {
  id?: number;
  label?: string;
  areaCode?: string;
  level?: string;
  enabled?: boolean;
  parentId?: number;
  children?: AddTreeArea[];
  cityType?: string;
  pids?: string;
  status?: boolean;
  parent?: AddTreeArea;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
}*/
export class AddTree {
  id?: number;
  areaName?: string;
  areaCode?: string;
  level?: string;
  enabled?: boolean;
  parentId?: number;
  children?: AddTree[];
  pids?: string;
  cityType?: string;
  idt?: string;
  status?: boolean;
  parent?: AddTree;
  icon?: any;
  expandedIcon?: any;
  collapsedIcon?: any;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
}

export class Data {
  areaLevel?: any;
  companyLevel: any;
  companyId: any;
  companyName: any;
  level: any;
  idt: any;
  areaCode: any;
  areaName: any;
  companyPrvcId: any;
}

