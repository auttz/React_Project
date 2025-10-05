type ClickableButtonProps = {
    label: string;
    onClick: () => void;
}
function ClickableButton({label,onClick}:ClickableButtonProps){
    return(
        <div>
            <button className="btn btn-primary m-2" onClick={onClick}>{label}</button>
        </div>
    )
}
export default ClickableButton;