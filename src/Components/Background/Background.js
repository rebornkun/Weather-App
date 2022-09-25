import './Background.css'
// import sunny from '../../Assets/sunny.jpg'
import sunnytwo from '../../Assets/sunnytwo.jpg'
// import sunnygif from '../../Assets/sunny.gif'
// import sunny from '../../Assets/sunny.mp4'

const Background = () => {

    return(
        <div className='back_container'>
            <img src={sunnytwo} alt='background'/>
            {/* <video
            autoPlay
            playsInline
            muted
            className="video"
            loop
            src={sunny}
            onLoadedData={() => {
            // setVideoLoaded();
            }}
            /> */}
        </div>
    );


}

export default Background;

// <video
//         autoPlay
//         playsInline
//         muted
//         className="video"
//         loop
//         src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//         onLoadedData={() => {
//           setVideoLoaded();
//         }}
//       />