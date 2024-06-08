 import image from '../assets/news.jpg'
 
 const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px", height:"500px"}}>
  <img src={src?src : image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90) : "We interact with a lot of products on our day to day basis, but we rarely notice the Ux principles behind them. It’s not your fault, but it’s designed so well that It becomes invisible. Elevators are one such example, where music is used to enhance the user experience."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem