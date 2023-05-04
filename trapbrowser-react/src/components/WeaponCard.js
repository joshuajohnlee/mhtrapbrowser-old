import dataList from '../assets/data.json';

export default function WeaponCard({weapon}) {

    let imglink = "./images/weapons/" + weapon.name + ".png";
    let weppowerbonus = (weapon.power_bonus * 100) + "%";
    let attrbonus = (weapon.attr_bonus * 100)  + "%";
    let cheese_effect = (dataList.freshness[(weapon.cheese_effect + 6)]);
    let title_req = (dataList.title_req[weapon.title_req - 1]);
    let wiki_link = "https://mhwiki.hitgrab.com/wiki/index.php/" + weapon.name;
    let limited
    weapon.limited ? limited = "Yes" : limited = "No";

    return(
        <>
            <div className="card">
                <img src={imglink} alt={weapon.name} />
            <h4>{weapon.name}</h4>
            <h6>{weapon.power_type}</h6>
            <div className="stats-container">
                    <div className="stats-header" style={{"gridColumn" : "1", "gridRow": "1"}}>
                        <p>Power</p>
                    </div>
                    <div className="stats-value" style={{"gridColumn" : "2", "gridRow": "1"}}>
                        <p>{weapon.power}</p>
                    </div>
                    <div className="stats-header"  style={{"gridColumn" : "3", "gridRow": "1"}}>
                        <p>Power Bonus</p>
                    </div>
                    <div className="stats-value"  style={{"gridColumn" : "4", "gridRow": "1"}}>
                        <p>{weppowerbonus}</p>
                    </div>
                    <div className="stats-header"  style={{"gridColumn" : "1", "gridRow": "2"}}>
                        <p>Attraction <br/>Bonus</p>
                    </div>
                    <div className="stats-value"  style={{"gridColumn" : "2", "gridRow": "2"}}>
                        <p>{attrbonus}</p>
                    </div>
                    <div className="stats-header"  style={{"gridColumn" : "3", "gridRow": "2"}}>
                        <p>Luck</p>
                    </div>
                    <div className="stats-value"  style={{"gridColumn" : "4", "gridRow": "2"}}>
                        <p>{weapon.luck}</p>
                    </div>
                    <div className="stats-header" style={{"gridColumn" : "1", "gridColumnEnd": "span 2", "gridRow": "3"}}>
                        <p>Cheese effect</p>
                    </div>
                    <div className="stats-value" style={{"gridColumnstart" : "3", "gridColumnEnd": "span 4", "gridRow": "3"}}>
                        <p>{cheese_effect}</p>
                    </div>
                    <div className="stats-header" style={{"gridColumnstart" : "1", "gridColumnEnd": "span 2", "gridRow": "4"}}>
                        <p>Title Required</p>
                    </div>
                    <div className="stats-value" style={{"gridColumnstart" : "3", "gridColumnEnd": "span 4", "gridRow": "4"}}>
                        <p>{title_req}</p>
                    </div>
                    <div className="stats-header" style={{"gridColumnstart" : "1", "gridColumnEnd": "span 2", "gridRow": "5"}}>
                        <p>Limited Edition</p>
                    </div>
                    <div className="stats-value" style={{"gridColumnstart" : "3", "gridColumnEnd": "span 4", "gridRow": "5"}}>
                        <p>{limited}</p>
                    </div>
                </div>
                <a href={wiki_link} target="_blank"><button>Find on MHWiki</button></a>
                </div>

            </>
        )
}