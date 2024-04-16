import { useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import '../Styles/residentCard.css';

const ResidentCard = ({url}) => {

    const [resident, getResident] = useFetch();

    useEffect(() => {
        getResident(url);

    }, [])
        console.log(resident)

  return (
    <article className='resident'>
        <figure className='resident__image'>
            <img src={resident?.image} alt='Resident photo'/>
            <figcaption className='resident__status'>
                <div className={`resident__circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </figcaption>
        </figure>
        <h3 className='resident__name'>{resident?.name}</h3>
        <hr className='resident__line'/>
        <ul className='resident__list'>
            <li className='resident__item'><span>Specie:</span><span>{resident?.species}</span></li>
            <li className='resident__item'><span>Origin:</span><span></span>{resident?.origin.name}</li>
            <li className='resident__item'><span>Episodes where appear</span><span></span>{resident?.episode.length}</li>

        </ul>
    </article>
  )
}

export default ResidentCard