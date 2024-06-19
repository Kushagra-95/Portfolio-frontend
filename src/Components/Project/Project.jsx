import React from 'react';
import './Project.css';

const Project = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={projectUrl} className="project-link" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

const Project2 = () => {
  return (
    <div>
      
      <div className="projects-list">
        <Project
          title="Blog App"
          description="This Blog Application is a dynamic platform designed for users to share their thoughts, experiences, and insights with a broader audience. The application provides a seamless experience for users to sign up, log in, create, and view posts. It offers an intuitive and user-friendly interface that encourages active participation and engagement."
          imageUrl="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg?t=st=1718812244~exp=1718815844~hmac=43bd4d2361185da315c6b64b4b32954c6eec11e73d1630b0d6f59002d59d1a2d&w=740"
          projectUrl="https://blog-weld-three-97.vercel.app/"
        />
        <Project
          title="Instagram Clone"
          description="This project demonstrates a comprehensive implementation of a social media application, focusing on providing a user-friendly interface and robust backend functionalities. The use of modern technologies ensures scalability and maintainability, making this Instagram clone a solid foundation for further development and enhancements."
          imageUrl="https://cdn.pixabay.com/photo/2022/08/26/02/01/instagram-7411557_1280.png"
          projectUrl="https://instagram-1efl.onrender.com/"
        />
        <Project
          title="Eagle Universe"
          description="This project showcases the integration of user authentication and image upload functionalities, ensuring secure and efficient management of user profiles. It provides a solid foundation for further enhancements, such as adding more profile customization options or expanding the image handling capabilities."
          imageUrl="https://m.media-amazon.com/images/I/51byIyAlguL._AC_UF1000,1000_QL80_.jpg"
          projectUrl="https://eagle-universe.onrender.com/"
        />
        
        {/* Add more Project components as needed */}
      </div>
    </div>
  );
};

export default Project2;
