const Image = ({ img, alt }) => {
  return (
    <div className="skill-icon-wrapper">
      <img src={img} alt={alt} className="skill-icon" />
    </div>
  );
};

export default Image;
