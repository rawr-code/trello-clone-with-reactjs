export function changePositionIntoArray(arr: any[], from: number, to: number) {
  const arrData = [...arr];
  const elm = arrData.splice(from, 1)[0];
  arrData.splice(to, 0, elm);

  return arrData;
}

export function pushItemIntoArray(arr: any[], position: number, item: any) {
  const arrData = [...arr];
  arrData.splice(position, 0, item);

  return arrData;
}

export function removeItemFromArray(arr: any[], key: string, id: string) {
  const arrData = arr.filter((item) => item[key] !== id);

  return arrData;
}
