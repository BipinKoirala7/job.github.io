type filterlabel = {
  name: string,
  id:string
}

function FilterLabelComponent(props:filterlabel) {
  return (
    <div className="flex gap-4 items-center">
        <input type="checkbox" name={props.name} id={props.id} className="accent-primary" />
        <label htmlFor={props.id}>{props.name}</label>
    </div>
  )
}

export default FilterLabelComponent