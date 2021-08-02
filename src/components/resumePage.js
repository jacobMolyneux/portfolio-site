import myResume from "./JacobMolyneuxResume.pdf";
import "./stylesheets/resume.css";

const Resume = () => {
  return (
    <div id="container">
      <iframe id="resumeFrame" src={myResume} />
    </div>
  );
};
export { Resume };
