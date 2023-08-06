export default function CocktailInfo({image, name, info, glass, category, ingredients, instructions}) {
    return(
        <div>
            <button>Back Home</button>
            <div>
                <img src={image} alt={name}/>
                <label>Name :</label>
                <span>{name}</span>
                <label>Category :</label>
                <span>{category}</span>
                <label>Info :</label>
                <span>{info}</span>
                <label>Glass :</label>
                <span>{glass}</span>
                <label>Ingredients :</label>
                <span>{ingredients}</span>
                <label>Instructions :</label>
                <span>{instructions}</span>
            </div>
        </div>
        

    )
}