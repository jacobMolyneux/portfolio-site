import myResume from "./JacobMolyneuxResume.pdf";
const Resume = () => {
  return (
    <div height="100vh">
      <iframe src={myResume} width="100%" heigth="100vh" />
    </div>
  );
};
export { Resume };
