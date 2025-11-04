import React, { Component, useState, useEffect, useRef } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "../../components/Fade";
import {
  getCachedSvg,
  setCachedSvg,
  hasCachedSvg,
  registerSvgUrl
} from "../../utils/svgCache";

function LazyInlineSvg({ src, alt }) {
  const [svgContent, setSvgContent] = useState(() => getCachedSvg(src));
  const [loading, setLoading] = useState(!svgContent);
  const ref = useRef(null);

  useEffect(() => {
    registerSvgUrl(src);
  }, [src]);

  useEffect(() => {
    if (svgContent) {
      setLoading(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasCachedSvg(src)) {
            setSvgContent(getCachedSvg(src));
            setLoading(false);
          } else {
            fetch(src)
              .then(response => response.text())
              .then(data => {
                setCachedSvg(src, data);
                setSvgContent(data);
                setLoading(false);
              })
              .catch(error => {
                console.error('Error loading SVG:', error);
                setLoading(false);
              });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [src, svgContent]);

  if (loading) {
    return <div ref={ref} className="skill-illustration-placeholder" />;
  }

  return (
    <div
      ref={ref}
      className="skill-illustration"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

function GetSkillSvg(props) {
  const svgMap = {
    'DataScienceImg': '/images/skills/data-science.svg',
    'FullStackImg': '/images/skills/full-stack.svg',
    'CloudInfraImg': '/images/skills/cloud-infra.svg',
    'ServerClusterImg': '/images/skills/server-cluster.svg',
  };

  const svgSrc = svgMap[props.fileName];

  if (svgSrc) {
    return (
      <LazyInlineSvg
        src={svgSrc}
        alt={props.fileName.replace('Img', '')}
      />
    );
  }

  return null;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <Fade bottom key={i}>
              <div className="skills-main-div">
                <div className="skills-image-div">
                  { }
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>

                <div className="skills-text-div">
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                  <SoftwareSkill logos={skill.softwareSkills} />
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
