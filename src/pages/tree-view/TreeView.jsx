import MenuList from "./MenuList"

function TreeView({menus = []})  {
  return (
    <div className="container bg-secondary/50 w-[260px] flex flex-1 py-5 mr-[100%]">
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView
