// 基础弹窗
export class DialogModel {
  type: any; // add/modify/detail
  title: any; // title
  width: any;
  dialog: boolean;
}
export class FromData {
  label?: any; // 名字
  type?: any;  // 类型
  name?: any;  //
  placeholder?: any; // 提示
  option?: any; // 下拉框的列表
  value?: any;  // 单选，多选的列表
  disable?: any;  // 单选，多选的列表
}
export class FormValue {
  key: any;
  disabled?: any;
  required?: any;
  value: any;
}
export class DataTree {
  code?: any;
  name?: any;
  pid?: any;
  villageChoose2DTO?: DataTree[];
}

// 详情弹窗
export class PopData {
  popContent?: any;
  popTitle?: any;
}
export class TableOption {
  width: any;
  title: any;
  tableHeader: {
    data: any;
    style: any;
  };
  tableContent: {
    data: any;
    styleone: any;
    styletwo: any;
  };
}

// 文件弹窗
export class FileOption {
  dialog?: boolean;
  files?: any;
  width?: any;
}
