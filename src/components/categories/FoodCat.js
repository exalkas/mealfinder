import { useHistory } from "react-router-dom"

export default function Categories({cats}) {

    const history = useHistory()

    const handleClick = cat => history.push('/meals/' + cat)

    return <div className="catContainer">
    {
      cats && cats.map((item, idx) => <div className="cat" key={idx} onClick={() => handleClick(item.strCategory)}>
        {item.strCategory}
      </div>)
    }
  </div>
}