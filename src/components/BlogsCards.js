export default function BlogCards({title, content, index}){
    return(
        <>
        <img src={`https://source.unsplash.com/random/${index}`} alt="" srcSet="" />
        <h2>{title}</h2>
        <p>{content}</p>
        </>
    )
}