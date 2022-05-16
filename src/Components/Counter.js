function Counter({ emoji, fruitTitle, substractProduct, fruitName, addProduct, count }) {

    return (
        <div className="card">
            <h2>{emoji} {fruitTitle}</h2>
            <button
                type="button"
                onClick={substractProduct}
                name = {fruitName}
            >
                -
            </button>
            {count}
            <button
                type="button"
                onClick={addProduct}
                name = {fruitName}
            >
                +
            </button>
        </div>

    );
}

export default Counter;