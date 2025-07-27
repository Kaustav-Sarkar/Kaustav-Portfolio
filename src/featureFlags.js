const featureFlags = {
  sections: {
    blogs: false, // Mostly will be shifted to a new site
    flagshipProjects: false, // Disabled for now, WIP
    
    // Component visibility control
    certifications: true,
    testimonials: true,
  },

  // Experience sections visibility
  experienceSections: {
    work: true,
    internships: true,
    volunteerships: true,
    clubs: true,
  },
};
export default featureFlags;
