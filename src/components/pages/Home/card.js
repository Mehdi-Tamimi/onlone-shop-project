import Image from "next/image"

const image = 'https://rowzanehnashr.com/wp-content/uploads/2022/12/%D9%82%D8%B5%D9%87%E2%80%8C%D9%87%D8%A7%DB%8C-%D9%86%D8%A7%D8%AA%D9%85%D8%A7%D9%85-%D9%BE%D8%A7%D9%84%D8%AA%D9%88%DB%8C%DB%8C.jpg'
export default function Card({price,title}) {


    return (
        <div className="card">
            <div className="cardImage__container">
                <Image src={image} width={100} height={100} alt="image" className="cardImage"/>
            </div>
            <div className="cardDetails">
                <span className="cardTitle">{title}</span>
                <span className="cardTitle"> <span className="cardPrice">{price}</span> ریال</span>
            </div>
        </div>
    )
}