import Picture from '../assets/about.jpg';

import '../styles/About.css';

function About() {
    return (
        <div>
            <div className='about'>
                <div className='about-left'>
                    <h1 className='about-title'>Little Lemon</h1>
                    <h3 className='about-subtitle'>Chicago</h3>
                    <p>
                        Laborum qui nisi duis nostrud adipisicing mollit id ut amet tempor do duis duis laborum. Sint
                        nostrud amet esse eu cupidatat anim et tempor commodo do cupidatat culpa cupidatat. Sunt ad
                        mollit consectetur veniam. Ad voluptate esse ex velit ipsum aliqua nulla irure aliquip tempor
                        est aliqua.
                    </p>
                </div>

                <div className='about-right'>
                    <img src={Picture} width={300} height={230} alt='Restaurant Food'></img>
                </div>
            </div>
        </div>
    );
}

export default About;
