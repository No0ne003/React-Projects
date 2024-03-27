import MenuList from "./MenuList"

function TreeView({menus = []})  {
  return (
    <div className="container">
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView
