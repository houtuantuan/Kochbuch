import Button from 'react-bootstrap/Button';

export default function Searchbar({recipes, setRecipes}){


    return(
        <div style={{display:'flex', backgroundSize:'cover', justifyContent:'center', alignItems:'center', height:"500px", backgroundImage: `url("https://plus.unsplash.com/premium_photo-1661902604046-63b7a66981fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")` }}>
            <form>
                <input name="searchInput" type="text" />
                <Button variant="light">Light</Button>{' '}
            </form>
        </div>
    )
}