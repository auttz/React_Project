import '../MyTest.css'
type CustomButtonProps = {
    label: string;
    color: string;
}
function CustomButton({label,color}:CustomButtonProps){
    return(
        <div>
            <button className='my-btn' style={{backgroundColor:color}}>{label}</button>
        </div>
    )
}
export default CustomButton