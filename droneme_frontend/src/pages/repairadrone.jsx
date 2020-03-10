import React from 'react'
import Header from '../components/header'
import Jumbotron4 from '../components/jumbotron4';
import Footer from '../components/footer';

const RepairaDrone = () => {
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
                    src={`https://www.youtube.com/embed/IZ8yaP9FWEc`}
                    frameBorder="0"
                />
            </div>

            <div className="about darken-overlay4">
                <h2>INSPECTING DRONE PROBLEMS</h2>
                <h4>Inspect the Body of the Drone</h4>
                <br />
                <p>
                    When you find your drone, you may notice that there is some dirt on the body of the drone. Cleaning the drone
                    makes it easier to find any damage that may have otherwise be hidden. Look closely over its entire body to check
                    for any cracks or breaks.<br /><br />
                </p>
                <h4>Inspect the Propellers</h4>
                <br />
                <p>
                    The propellers rotate at a high rate of speed to move air and create lift, which causes your drone to fly. Propellers
                    are carefully balanced to ensure that at high speeds, they do not create any unnecessary vibration that could make your
                    drone difficult or unfit to fly. Any sort of damage, such as chips or cracks no matter how big or small will result in
                    your propellers needing to be replaced. When your drone crashes, the propellers are most likely to be damaged. Crashing
                    into a building, or a tree will almost always cause damage to unprotected propellers. This can also happen if you fly
                    through bugs. Pay special attention to the leading blade edge. Any nicks or chips, no matter how small, can affect the
                    thrust generation efficiency of the propellers.<br /><br />
                </p>
                <h4>Inspect the Fittings</h4>
                <br />
                <p>
                    The drone motors produce a lot of vibration. If any of the motor mounts are loose, the vibration will be dramatically
                    increased. Any loose fittings can cause rotating parts such as motors and propellers to shake, rattle, and roll causing
                    your drone to be aerodynamically unstable. Check that all of the fittings are snug so that nothing comes loose during
                    your next flight. If after a flight you notice an increase in flying instability, check the fittings.<br /><br />
                </p>
                <h4>Inspect the Landing Gear</h4>
                <br />
                <p>
                    Most drones have fixed landing gear, but more advanced models have retractable landing gears. If you have retractable
                    landing gear, be sure to inspect the extension and retraction mechanism to be sure it is working properly. The shock
                    of a hard landing can have the same effect as crashing your drone. Be sure to inspect the landing gear to make sure
                    that there are no cracks or breaks.<br /><br />
                </p>
                <h4>Inspect the Wiring</h4>
                <br />
                <p>
                    Your drone has numerous wires that send power throughout the device. The main wires you will come in contact with
                    are attached to a harness that quickly connects your battery to your drone. When you check your drone after a flight,
                    check the wiring harness to ensure that there are no loose connections. It is also good to check all visible wires
                    for cracks, breaks, burns, or any other sort of damage. There is a lot of juice flowing through your drone and any
                    sort of wiring issue could cause your drone to fall from the sky.<br /><br />
                </p>
                <br /><br /><br />
            </div>

            <div className="documentation-video" style={{ position: "relative", paddingBottom: "56.25%" /* 16:9 */, paddingTop: 25, height: 0 }}>
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/G9VwT2nitgI`}
                    frameBorder="0"
                />
            </div>

            <div className="about darken-overlay4">
                <h2>BASIC DRONES REPAIR</h2>
                <h4>Propeller Replacement</h4>
                <br />
                <p>
                    If any of the propellers are broken, or bent, you should replace the propellers. Smaller drones have propellers that attach using a
                    friction fit, or a single screw holding the propeller to the drive shaft. Microdrones use a friction (ie push on) propellers that only
                    need your fingers to remove and replace them. Mini drones use a small Phillips head screw, so you will need a small screwdriver kit in
                    order to replace these propellers.<br /><br />
                </p>
                <h4>Motor Replacement</h4>
                <br />
                <p>
                    Your motors may need replacement after extended flying and usage. If you have never done this type of drone repair work before, you may
                    want to research the procedure by watching a few YouTube videos. Some motors are connected the electronics board by simply plugging in,
                    while others may require that you solder the motor leads to the main circuit board. Usually, it is possible to solder the new motor leads
                    to the cutoffs of the old ones. You may need to disassemble the drone booms to gain access to the motors.<br /><br />
                </p>
                <h4>Drone Repair Troubleshooting</h4>
                <br />
                <p>
                    If you are lucky and don’t notice any exterior damage on your drone, except for perhaps a broken propeller, you need to conduct some tests
                    to make sure your drone is fully functional. Remove all of the propellers, use a different battery, power up your drone and attempt a flight
                    sequence. Obviously, without the propellers, the drone will not fly. However, you can observe to see if all of the motors are responding. By
                    going through the drone boot sequence, the internal checks will examine the firmware, sensors, and camera. The next step is to attach the
                    propellers and go for a simple flight test. Don’t fly too high, and don’t attempt any high-speed maneuvers. If your drone is responding
                    correctly, then you can keep flying. If this flight test fails, then something was damaged during the crash, and there is an internal problem
                    with your drone.<br /><br />
                </p>
                <br /><br /><br />
            </div>
            <Jumbotron4 />
            <Footer />
        </div>
    )
}

export default RepairaDrone;