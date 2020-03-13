import React from 'react'
import Header from '../components/header'
import Jumbotron4 from '../components/jumbotron4';
import Footer from '../components/footer';

const AssembleaDrone = () => {
    return (
        <div>
            <Header />
            <div className="documentation-video" style={{ position: "relative", paddingBottom: "56.25%" /* 16:9 */, paddingTop: 25, height: 0 }}>
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/XvMdL1PncEQ`}
                    frameBorder="0"
                />
            </div>
            <div className="about darken-overlay4">
                <h2>HOW TO ASSEMBLE A DRONE</h2>
                <br />
                <h4>
                    Every drone available on the market today comes with its own set of assembly instructions. Some drones require
                more installation steps than others. Typically, you need to install the following items:<br /><br />
                </h4>
                <h4>Propellers</h4>
                <p>
                    Your drone should be packaged with at least one complete set of propellers and possibly even a spare propeller
                    or two. When you install the propellers, be sure that you carefully read the instructions to ensure that you
                    put the propeller with the correct side up. Be sure to use the correct nuts to secure the propeller and tighten
                    each nut with the appropriate amount of pressure. You don’t want your propellers to be loose. Conversely,
                    overtightening can fracture your propellers.<br /><br />
                </p>
                <h4>Landing Gear</h4>
                <p>
                    Most drones are packaged with their landing gear unattached, so be sure to securely attach the landing gear to
                    the drone. Landing gear is critical for the stability of the drone. In some drone models, it provides ground
                    clearance for any camera gear that might be bottom mounted. Be sure to refer to your manual to ensure that your
                    gear is affixed appropriately.<br /><br />
                </p>
                <h4>Camera gear</h4>
                <p>
                    If you haven’t flown a drone yet, you may want to get a few flights under your belt before strapping on a camera.
                    Depending on your drone, you will either attach the drone’s camera package or you will attach the mount or gimbal
                    for your own camera. Be sure to follow the instructions precisely when mounting your camera. The placement of the
                    camera is critical for maintaining stability.<br /><br />
                </p>
                <h4>Charging Batteries</h4>
                <p>
                    LiPo Batteries are far more volatile than most batteries and therefore require a little more TLC. To
                    safely transport or store your drone batteries, you must be sure to they are at least 50% discharged.
                    The more charged they are, the more flammable they are. Also, fully charged LiPo batteries that go unused
                    for more than a day or so run the risk of wearing down their capacity and therefore dramatically reducing
                    their useful life.<br />
                    For these reasons, your drone batteries will have half-charge or less when you take them out of the box.
                    Charging your batteries can take a little time so you want to get the process started sooner than later.
                    Refer to your manual to confirm the best practices for your battery and charger.<br /><br />
                </p>
                <br /><br /><br />
            </div>
            <Jumbotron4 />
            <Footer />
        </div>
    )
}

export default AssembleaDrone;