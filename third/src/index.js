import react from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
const img1='https://picsum.photos/200/300?grayscale';
const img2='https://picsum.photos/200/300?grayscale';
const targetlink='https://picsum.photos/';
ReactDOM.render(
  <>
 {/* <h1 contentEditable="true">This is contentEditable Text which is jsx atteribute</h1>  */}
 <h1 className="heading">Gallary Images</h1> 

 <div className="img_div">
    <img src="https://picsum.photos/200/300" alt="loading"></img>
    <img src="https://picsum.photos/seed/picsum/200/300" alt='loading'/>
    <img src={img1}  alt='loading'/>
  <a href={targetlink} target='_blank'>
    <img src={img2}  alt='loading'/>
  </a>
</div>
 </>
  ,document.getElementById('root')
  );