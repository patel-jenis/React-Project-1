const Star = ({ isFill }) => {
    return (
        <div>
            <span className="rating"><i className={isFill ? "ri-star-s-fill" : "ri-star-s-line"}></i></span>
        </div>
    )
}

export default Star