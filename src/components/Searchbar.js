import Button from 'react-bootstrap/Button';

export default function Searchbar({recipes, setRecipes}){


    return(
        <div style={{display:'flex', backgroundSize:'cover', justifyContent:'center', alignItems:'center', height:"500px",marginBottom:"5%", backgroundImage: `url("https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <form>
                
                <input name="searchInput" type="text" />
                <Button variant="light">search</Button>{' '}
            </form>
        </div>
    )
}