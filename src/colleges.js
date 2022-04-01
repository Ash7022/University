import universities from './data';
import './css/colleges.css'
import Card from './card'
import OpCard from './opcard';
const List = () => {
const tech = universities.odisha.technical;
console.log(tech)
return(
    <div>
   
    
            <div id='list-parent'>
                <OpCard name ="Ashutosh Tripathy" address="xyz"/>
                <OpCard name = "Sai" />
               

                <p>heyy</p>
            </div> 
        
    </div>
    


)
}

export default List;