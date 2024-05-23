import data from '../../data/db.json'
import './Tours.css'

function Tours() {
    return (
        <>
        <main>
            {
                data.map(ele=>{
                    return(
                    <div key={ele.id} className="tour-container">
                    <h3 className="tour-name">{ele.name}</h3>
                    <img src={ele.image} alt={ele.name} className="tour-image" />
                    <div className="tour-separator"></div>
                  </div>
                   )
                })
            }
        </main>
        </>
    );
}

export default Tours;