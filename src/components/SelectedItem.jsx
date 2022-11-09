import watch from "./watch.jpeg";

const SelectedItem = () => {
  return (
    <div className='selected-item'>
        <img src={watch} alt="" />
        <div className="text">
            <h2 style={{marginBottom:'10px',fontSize:'30px'}}>Lorem, ipsum.</h2>
          <span style={{display:'block',color:'blueviolet',marginBottom:'20px',fontWeight:'bold'}}>$100.00</span>

            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius ipsa velit ipsam consequuntur labore ad fuga porro, fugiat molestias saepe quibusdam consequatur nemo a, mollitia <br /><br />
                quam quasi perferendis. Doloremque sint nemo incidunt inventore facere officia eaque enim exercitationem, tempora quisquam minus magni ab ullam iure, ut nulla? Corrupti, ducimus.
            </span>
            <div className="quantity">
                <button>-</button>
                <input type="number" name="number" />
                <button>+</button>
            </div>
            <button className='add-cart' style={{display:'block',marginTop:'20px'}}> Add to cart</button>
        </div>
      
    </div>
  )
}

export default SelectedItem
