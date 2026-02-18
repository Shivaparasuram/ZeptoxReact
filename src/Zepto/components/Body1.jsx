const Body1=(props)=>
    {
            const {title,img1,img2,img3,img4,img5} =props.women1

    return(
        <div className="body">
            <h3>{title}</h3>
            <div className="images">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>
            </div>
        </div>
        )
    }

export default Body1;