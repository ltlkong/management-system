import menu from '../left-nav/menuConfig';

export default function getPageHeaderContent(path) {
  let content;
  menu.forEach(item => {
    if(!item.children) {
      if(item.key === path)
        content = item.content;
    }else {
      item.children.forEach(itemc => {
        if(itemc.key === path)
          content = itemc.content;
      })
    }
  })

  return content;
}