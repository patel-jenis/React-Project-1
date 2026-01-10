const Star = ({ isFill }) => {
    return (
        <span className="rating"><i class={isFill ? "ri-star-s-fill" : "ri-star-s-line"}></i></span>
    )
}

export default Star