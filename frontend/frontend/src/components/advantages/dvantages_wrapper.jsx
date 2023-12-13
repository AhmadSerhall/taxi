import './style.css';
import Advantage from '.';
const AdvantagesWrapper = () => {
    return(
        <div className='container'>
            <div className='intro_text'>
                <p>Relaxi Taxi</p>
                <p>your solution for every need</p>
            </div>
            <div className='adv'>
                <Advantage title = 'QUALITY' text = 'We ensure you the best quality service'/>
                <Advantage title = 'Rellable' text = 'We can rely on our services anytime'/>
                <Advantage title = 'Affordable' text = 'Our services are very cheap and affordable'/>
            </div>
        </div>
    )
}

export default AdvantagesWrapper;
