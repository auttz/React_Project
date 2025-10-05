import '../Profile.css';
function ProFile(){
    return(
        <div className="d-flex justify-content-end align-items-start Profile-container">
            <img src="/myimg.jpg"
            className="rounded-circle " 
            style={{ width: "350px", height: "350px", objectFit: "cover" }}
            alt="Profile"/>
        </div>
        
    )
}
export default ProFile;