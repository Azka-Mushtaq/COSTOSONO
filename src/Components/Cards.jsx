import img1 from "../Images/img4.jpg";
import img2 from "../Images/img5.jpg";
import img3 from "../Images/img6.jpg";


const Cards = () => {
    return ( 
        <>

        <div className="grid-3 gap-7 flex justify-center py-10">
            <div className="space-y-3">
            <img src={img1} className="w-96 h-96 rounded-xl"/>
            <h3 className="text-center font-semibold">Dining</h3>
            </div>
            <div className="space-y-3">
            <img src={img2} className="w-96 h-96 rounded-xl"/>
            <h3 className="text-center font-semibold">Living</h3>
            </div>
            <div className="space-y-3">
            <img src={img3} className="w-96 h-96 rounded-xl"/>
            <h3 className="text-center font-semibold">Kitchen</h3>
            </div>


        </div>
        </>
     );
}
 
export default Cards;