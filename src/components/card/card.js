import './card.css'
export default function Card({ name, image }) {
    return (
        <div className="card">
            <img className="img" src={image} alt="card" />
            <h3>{name}</h3>
        </div>
    )
}