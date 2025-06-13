

function Col({image,head,pgh}){
    return(
        <>
        <section className="pr">
            <img src={image}/>
            <h2 className="off mt-2 mb-2">{head}</h2>
            <p>{pgh}</p>
        </section>

        </>
    )
}
export  default Col;