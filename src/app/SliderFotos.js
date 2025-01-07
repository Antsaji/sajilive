"use client"
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function SliderFotos() {
    return ( <div className='fotohorizontal'>
        <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="/editada.jpg"  alt="Editada" />}
      itemTwo={<ReactCompareSliderImage src="/sineditar.jpg"  alt="SinEditar" />}
    />
    </div>
     );
}

export default SliderFotos;