type EvenBtn = {
    icon: JSX.Element,
    isHoverEffectNeeded: boolean,
    hoverTailwindColor:string
}

function EvenBtn(props: EvenBtn) {
    console.log(props)
    return (
        <div className={`border-border-color border-[1px] btn-transition cursor-pointer rounded-full p-2 ${props.isHoverEffectNeeded && `${props.hoverTailwindColor } hover:text-primary hover:border-second-color`} w-fit h-fit`}>
            {props.icon}
        </div>
    )
}

export default EvenBtn