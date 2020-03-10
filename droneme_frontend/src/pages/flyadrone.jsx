import React from 'react'
import Header from '../components/header'
import Jumbotron4 from '../components/jumbotron4';
import Footer from '../components/footer';

const FlyaDrone = () => {
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
                    src={`https://www.youtube.com/embed/qi8qre9FO18`}
                    frameBorder="0"
                />
            </div>
            <div className="about darken-overlay4">
                <h2>HOW TO FLY A DRONE</h2>
                <h4>Getting your drone flying</h4>
                <br />
                <p>
                    To get your quadcopter in the air, the only control you need is the throttle.
                    Push the throttle (left stick) up very slowly, just to get the propellers going. Then stop.
                    Repeat this multiple times and until you’re comfortable with the throttle’s sensitivity.
                    Slowly push the throttle further than before, until the copter lifts off the ground. Then pull the throttle back down to zero and let the quadcopter land.<br /><br />
                    Repeat this 3-5 times. Notice whether the copter is trying to rotate left or right (yaw), move left or right (roll), or move backwards or forwards (pitch).
                    If you notice any movements happening without you making them happen, use the corresponding trim button to balance them out.
                    For example, if you notice the copter moving to the left when you push the throttle, adjust the “roll” trim button next to the right stick.
                    Keep adjusting the trims until you get a relatively stable hover off the ground by only using the throttle.
                    Congrats! You know how to get your quadcopter airborne.<br /><br />
                </p>
                <h4>Now, let’s learn how to hover in mid-air</h4>
                <br />
                <p>
                    To hover, you will use the throttle to get airborne. You will then use small adjustments of the right stick to keep the quadcopter hovering in place.
                    You may also need to adjust the left stick (yaw) slightly, to keep it from turning. Use the throttle to get the copter about a foot to a foot-and-a-half off the ground.
                    Make tiny adjustments with the right stick (and the left, if necessary) to keep the copter hovering in position. When you’re ready to land, cut back the throttle slowly.
                    When the quadcopter is an inch or two off the ground, go ahead and cut the throttle completely and let the UAV drop to the ground.Repeat this until you get comfortable hovering off the ground and landing gently.<br /><br />
                </p>
                <h4>Flying continuosly</h4>
                <br />
                <p>
                    Flying a quadcopter continuously requires you to rotate and change directions simultaneously.
                    This will take some getting used to, because the quadcopter will be facing different angles in relation to how you’re facing, so you will need to pay close attention to how each movement of the sticks will affect the quadcopter’s flight.
                    First, take off and hover. Rotate (yaw) your copter to a slight angle.
                    Use the right stick to fly it left/right and forwards/backwards. Get comfortable flying the quadcopter while it faces a different direction.
                    Rotate it to another angle, and use the right stick to maneuver it again. Keep doing this until you’re comfortable flying at different angles.<br /><br />
                    To fly continuously, slowly push the right stick forward. As you’re pushing the right stick forward, push the right stick slightly to the left or to the right at the same time.
                    Fly in different directions by pushing the right stick forward (pitch) and adjusting it left and right, and using the left stick (yaw) to change the direction the copter is facing.
                    Then, try adjusting the quadcopter’s height by moving the left stick forward and backward (throttle).
                    Congrats! Now you know how to fly a quadcopter with continuous movement. Keep practicing until you can direct your quadcopter at will.<br /><br />
                </p>
                <br /><br /><br />
            </div>
            <Jumbotron4 />
            <Footer />
        </div>
    )
}

export default FlyaDrone;