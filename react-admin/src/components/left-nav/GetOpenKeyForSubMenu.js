import menu from './menuConfig';

export default function GetOpenKey(childrenKey) {
  let childrenItem;
  let openKey;

  menu.forEach(item => {
    if(item.children)
    {
      childrenItem = item.children.find(itemC => itemC.key === childrenKey);
      if(childrenItem) {
        openKey = item.key;
      }
    }
  })
  return openKey;
};