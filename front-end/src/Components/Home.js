import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        console.log(auth);
        if(!auth)
        {
            navigate('/SignUp');
        }
    })
    useEffect(()=>{
        collect1();
    },[])
    const [products, setProducts] = useState([]);
    const collect1 = async ()=>{
        let result = await fetch("http://localhost:3050/songs-find/a")
        result = await result.json();
        setProducts(result);
    }
    const collect = async (event) => {
        if (!event.target.value) {
            let result = await fetch("http://localhost:3050/songs-find/a")
            result = await result.json();
            setProducts(result);
        }
        let key = event.target.value;
        key = key.toLowerCase();
        let result = await fetch("http://localhost:3050/songs-find/" + key)
        result = await result.json();
        console.log(result);
        setProducts(result);
    }
    const mover=()=>{
        refreshPage();
    }
    const refreshPage=()=>{
        window.location.reload();
    }
    return (
        <div className="backer">
            <div className="Searcher">
                <input type="text" placeholder="Enter Song you want to hear" className="Searchermain" onChange={collect} />
                <div className="setting-height">
                    {
                        products.length > 0 ?
                            products.map((item, index) =>
                                <ul key={item.title}>
                                    <li className="item-css">{item.title}</li>
                                    <button className="play123" onClick={mover}>
                                        <Link style={{ 'color': 'black', 'textDecoration': 'none',"paddingTop":"10px","paddingBottom":"10px","paddingLeft":"10px","paddingRight":"10px"}}
                                            to={"/Player123"}
                                            state={{title: item.title, src:item.src , imgL:item.imgL }}
                                    >Play</Link></button>
                                </ul>
                ) : <h1 className="Noresult">No result found</h1>
                    }
            </div>
        </div>
        </div >
    );

}
export default Home;