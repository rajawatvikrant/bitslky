import './SubscribeFaq.css'
import subscribe from "../../assets/images/subscribe.png";
import question from "../../assets/images/question.png";
import envelope from "../../assets/images/envelope.svg";
import SkewButton from "../../ui/skewButton";
import { Container,Row,Col,Form } from "react-bootstrap";

const SubscribeFaq = () => {
  return (
    <section className="SubscribeFaq mb-100 text-white">
      <Container className="customContainer">
        <Row className='gap-xl-0 gap-5'>
          <Col xl={6}>
            <div className="subscribeSection">
              <img className="subImg" src={subscribe} />
              <div className="subscribeContent">
                <h3>Subscribe to our news!</h3>
                <p>
                  Please provide your email to receive regular updates on our
                  promotions and tournaments.
                </p>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="inputWithIcon">
                    <img className="inputImg" src={envelope} alt="email" />
                    <Form.Control
                      type="email"
                      placeholder="Your Email Address..."
                    />
                  </div>
                </Form.Group>
                <SkewButton label="Subscribe" />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="subscribeSection">
              <img className="subImg" src={question} alt="question" />
              <div className="subscribeContent">
                <h3>Got any questions?</h3>
                <p>
                  Visit our FAQ section for comprehensive information on
                  frequently asked questions.
                </p>
                <SkewButton label="FAQ Page" className="refCardBtn" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeFaq;
