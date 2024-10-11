import "./Kiskep.css";
function Kiskep(props){
    function indexVisszaAd(){
        let index = props.adat.id;
        console.log(props);
        props.szuloMetodus(index);
    }
    return (
        <div className="kiskep">
            <img src={props.adat.src} alt={props.adat.alt} onClick={indexVisszaAd}/>
        </div>
    )
}
export default Kiskep