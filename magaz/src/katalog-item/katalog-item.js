import './katalog-item.css';

const KatalogItem= ({img, price, description}) => {
        return(
            <div className="content__item">
                <div className="content__item__img"><img className="item__img" src={img} alt='упс..'></img></div>
                <div className="content__item__text">{description}</div>
                <div className="content__item__prise">{price}</div>
            </div>
        )
}


export default KatalogItem;