function Uiux() {
  const skills = [
    ['Next.js', 'Qwik', 'Node.js'],
    ['React', 'Qwik City', 'Express', 'MySQL', 'MongoDB'],
    ['HTML', 'CSS', 'JavaScript'],
    ['Python', 'C++', 'C', 'JavaScript'],
    ['React Native', 'Flutter'],
    ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'],
    ['Tigrigna', 'English', 'Amharic', 'French'],
    ['Git', 'GitHub', 'Docker', 'Agile', 'Scrum']
  ];

  return (
    <div className="uiux-container">
      <h1 className="big-title">
        <span>HENOK</span> 
        <svg className="circle" width="80" height="40">
          <circle cx="25" cy="20" r="15" stroke="black" strokeWidth="2" fill="none" />
        </svg>
        <span>GEBREMEDHIN</span>
        <div className="dotes"></div>
      </h1>
      <svg className="designer-svg" width="150" height="60">
        <circle cx="80" cy="30" r="15" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="95" cy="30" r="15" stroke="black" strokeWidth="2" fill="none" />
      </svg>

      <h2 className="subheading">
        <div className="dotes dotes-reverse"></div>
        <sup className="creative">creative</sup>
        <span className="designer">Designer</span>
      </h2>

      <div className="marquee-container">
        <div className="marquee">
          {[...skills, ...skills].map((group, index) => ( // Duplicate for infinite smooth scrolling
            <div className="marquee-group" key={index}>
              {group.map((skill, i) => (
                <span key={i}> • {skill} </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Uiux;
