export default function ListSheetItem({ name, info }) {
  return (
    <div className="flex flex-row gap-2 items-center border-t border-gray-400 py-1">
      <input className=" cursor-pointer" type="checkbox" name={name} />
      <li className="capitalize text-sm" key={name}>
        {info}
      </li>
    </div>
  )
}
