import react from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
const img1='https://picsum.photos/200/300?grayscale';
const img2='https://picsum.photos/200/300?grayscale';
const targetlink='https://picsum.photos/';

// internal css
const heading={
  color:'#fa9191',
  textTransform:'capitalize',
  textShadow:'2px 1px 1px silver',
  fontWeight:'bold',
  textAlign:'center',
  margin: '70px 0px',
  fontFamily: '"Josefin Sans", sans-serif',
  fontFamily: '"Roboto Slab", serif'
};
ReactDOM.render(
  <>
 {/* <h1 contentEditable="true">This is contentEditable Text which is jsx atteribute</h1>  */}
 <h1 className="heading" style={heading}>Gallary Images</h1> 
 <p style={{color:'red',textAlign:'center'}}>demo images inline css</p>

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